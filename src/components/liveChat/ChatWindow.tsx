import { useContext, useEffect, useState, useRef } from "react"
import { uniqBy } from "lodash"
import { ChatContext } from "./context/ChatContext"
import axios from "axios"
import UsersList from "./UsersList"
import MessagesWindow from "./MessagesWindow"
import SupportChatBubble from "./SupportChatBubble"

const ChatWindow = () => {
  const [webSocket, setWebSocket] = useState<any>()
  const [onlineUsers, setOnlineUsers] = useState<any>({})
  const [selectedUser, setSelectedUser] = useState("")
  const [messageText, setMessageText] = useState("")
  const [messagesInsideChat, setMessagesInsideChat] = useState<any[]>([])
  const [offlineUsers, setOfflineUsers] = useState<any>({})
  const { username, id, setUsername, setId, open, identifier }: any =
    useContext(ChatContext)
  const chatWindowRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const connectToWebSocket = () => {
      const webSocket = new WebSocket("ws://localhost:7007")
      setWebSocket(webSocket)
      webSocket.addEventListener("message", handleMessage)
      webSocket.addEventListener("close", handleClose)
      return () => {
        webSocket.removeEventListener("message", handleMessage)
        webSocket.removeEventListener("close", handleClose)
        webSocket.close()
      }
    }
    const handleMessage = (ev: any) => {
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
    const handleClose = () => {
      setTimeout(() => {
        console.log("Disconnected ! Trying to reconnect...")
        connectToWebSocket()
      }, 1000)
    }

    connectToWebSocket()
  }, [selectedUser])

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
      console.log(selectedUser)
      axios.get(`/messages/${selectedUser}`).then((res) => {
        setMessagesInsideChat(res.data)
      })
    }
  }, [selectedUser])

  const messagesWithoutDuplicates = uniqBy(messagesInsideChat, "_id")

  return (
    <>
      {!open && !identifier ? (
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
      ) : null}

      <SupportChatBubble />

      {!!open && !!identifier && (
        <>
          <div className="fixed bottom-20 flex flex-col right-5 h-4/5 w-[350px]  sm:h-2/4 sm:w-[290px]  items-center bg-white p-4 rounded-md border-2 border-indigo-900">
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
          <SupportChatBubble />
        </>
      )}
    </>
  )
}

export default ChatWindow
