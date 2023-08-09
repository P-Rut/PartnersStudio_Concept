import { useContext, useEffect, useState, useRef } from "react"
import { uniqBy } from "lodash"
import { UserContext } from "./context/UserContext"
import axios from "axios"
import UsersList from "./UsersList"
import MessagesWindow from "./MessagesWindow"

const ChatWindow = () => {
  const [webSocket, setWebSocket] = useState<any>()
  const [onlineUsers, setOnlineUsers] = useState<any>({})
  const [selectedUser, setSelectedUser] = useState("")
  const [messageText, setMessageText] = useState("")
  const [messagesInsideChat, setMessagesInsideChat] = useState<any[]>([])
  const [offlineUsers, setOfflineUsers] = useState<any>({})
  const { username, id, setUsername, setId }: any = useContext(UserContext)
  const chatWindowRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    connectToWebSocket()
  }, [selectedUser])

  function connectToWebSocket() {
    const webSocket = new WebSocket("ws://localhost:7007")
    setWebSocket(webSocket)
    webSocket.addEventListener("message", handleMessage)
    webSocket.addEventListener("close", () => {
      setTimeout(() => {
        console.log("Disconnected ! Trying to reconnect...")
        connectToWebSocket()
      }, 1000)
    })
  }

  function showOnlineUsers(usersArray: any) {
    interface UsersType {
      [key: string]: string
    }
    const users: UsersType = {}

    usersArray.forEach(({ userID, username }: any) => {
      users[userID] = username
    })

    setOnlineUsers(users)
  }

  function logout() {
    axios.post("/logout").then(() => {
      setWebSocket(null)
      setId(null)
      setUsername(null)
    })
  }

  function handleMessage(ev: any) {
    const messageData = JSON.parse(ev.data)
    console.log({ ev, messageData })
    if ("online" in messageData) {
      showOnlineUsers(messageData.online)
    } else if ("text" in messageData) {
      if (messageData.sender === selectedUser) {
        setMessagesInsideChat((prev: any) => [...prev, { ...messageData }])
      }
    }
  }

  function sendMessage(ev: any, file = null) {
    if (ev) ev.preventDefault()
    webSocket.send(
      JSON.stringify({
        recipient: selectedUser,
        text: messageText,
        file,
      })
    )
    if (file) {
      axios.get("/messages/" + selectedUser).then((res) => {
        setMessagesInsideChat(res.data)
      })
    } else {
      setMessageText("")
      setMessagesInsideChat((prev: any) => [
        ...prev,
        {
          text: messageText,
          sender: id,
          recipient: selectedUser,
          _id: Date.now(),
        },
      ])
    }
  }

  useEffect(() => {
    const chatWindowDiv = chatWindowRef.current
    if (chatWindowDiv) {
      chatWindowDiv.scrollTop = chatWindowDiv.scrollHeight
    }
  }, [messagesInsideChat])

  useEffect(() => {
    interface UsersType {
      [key: string]: string
    }
    axios.get("/people").then((res) => {
      const offlineUsersArray = res.data
        .filter((p: any) => p._id !== id)
        .filter((p: any) => !Object.keys(onlineUsers).includes(p._id))

      const offlineUsers: UsersType = {}
      offlineUsersArray.forEach((p: any) => {
        offlineUsers[p._id] = p
      })

      setOfflineUsers(offlineUsers)
    })
  }, [onlineUsers])

  useEffect(() => {
    if (selectedUser) {
      axios.get(`/messages/${selectedUser}`).then((res) => {
        setMessagesInsideChat(res.data)
      })
    }
  }, [selectedUser])

  const messagesWithoutDuplicates = uniqBy(messagesInsideChat, "_id")

  return (
    <div className="flex h-screen">
      <UsersList
        onlineUsers={onlineUsers}
        setSelectedUser={setSelectedUser}
        selectedUser={selectedUser}
        offlineUsers={offlineUsers}
        id={id}
        username={username}
        logout={logout}
      />
      <MessagesWindow
        selectedUser={selectedUser}
        chatWindowRef={chatWindowRef}
        messagesWithoutDuplicates={messagesWithoutDuplicates}
        id={id}
        sendMessage={sendMessage}
        messageText={messageText}
        setMessageText={setMessageText}
      />
    </div>
  )
}

export default ChatWindow
