import React, { useContext, useEffect, useState, useRef } from "react"
import Avatar from "boring-avatars"
import Logo from "./Logo"
import { PaperAirplaneIcon } from "@heroicons/react/24/outline"
import { uniqBy } from "lodash"
import { UserContext } from "./context/UserContext"
import axios from "axios"
import Users from "./Users"

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
  }, [])

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
    console.log(ev, messageData)
    if ("online" in messageData) {
      showOnlineUsers(messageData.online)
    } else if ("text" in messageData) {
      if (messageData.sender === selectedUser) {
        setMessagesInsideChat((prev: any) => [...prev, { ...messageData }])
      }
    }
  }

  function sendMessage(ev: any) {
    ev.preventDefault()
    webSocket.send(
      JSON.stringify({
        recipient: selectedUser,
        text: messageText,
      })
    )
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

  const onlinePeoplewithoutOurUserName = { ...onlineUsers }
  delete onlinePeoplewithoutOurUserName[id]
  const messagesWithoutDuplicates = uniqBy(messagesInsideChat, "_id")

  return (
    <div className="flex h-screen">
      <div className="w-1/3 flex  flex-col">
        <div className="flex-grow">
          <Logo />
          {Object.keys(onlinePeoplewithoutOurUserName).map((userID) => (
            <Users
              key={userID}
              online={true}
              onClick={() => setSelectedUser(userID)}
              id={userID}
              username={onlinePeoplewithoutOurUserName[userID]}
              selected={userID === selectedUser}
            />
          ))}
          {Object.keys(offlineUsers).map((userID) => (
            <Users
              key={userID}
              online={false}
              onClick={() => setSelectedUser(userID)}
              id={userID}
              username={offlineUsers[userID].username}
              selected={userID === selectedUser}
            />
          ))}
        </div>
        <div className="flex items-center p-2 justify-center text-center">
          <span className="text-sm flex items-center">
            <Avatar
              size={30}
              name={id}
              variant="beam"
              colors={["#1d21a0", "#7788e0", "#93bed3", "#9dd6fc"]}
            />
            {username}
          </span>

          <button
            onClick={logout}
            className="text-sm text-gray-200 bg-indigo-800 px-3 py-1 border"
          >
            logout
          </button>
        </div>
      </div>
      <div className="flex flex-col  bg-indigo-200 w-2/3 p-2">
        <div className="flex-grow">
          {!selectedUser && (
            <div className="flex items-center justify-center h-full">
              <div className="text-gray-50"> No selected conversation</div>
            </div>
          )}
          {!!selectedUser && (
            <div className="relative h-full">
              <div
                ref={chatWindowRef}
                className=" scroll-smooth overflow-y-scroll absolute top-0 bottom-4 left-0 right-0 max-w-4xl mx-auto space-y-2 grid grid-cols-1"
              >
                {messagesWithoutDuplicates.map((message: any) => (
                  <div key={message._id}>
                    <div
                      className={
                        message.sender === id
                          ? "place-self-end inline-block bg-indigo-800 mr-2 text-white p-3 ml-24  font-normal text-base float-right rounded-2xl rounded-tr-none"
                          : " place-self-start inline-block bg-white text-gray-800 p-3 mr-24 font-normal text-base float-left rounded-2xl rounded-tl-none"
                      }
                    >
                      {message.text}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        {!!selectedUser && (
          <form className="flex gap-2" onSubmit={sendMessage}>
            <input
              value={messageText}
              onChange={(ev) => setMessageText(ev.target.value)}
              type="text"
              placeholder="Type your message here"
              className="p-2 border-indigo-800 flex-grow"
            />
            <button type="submit" className="bg-indigo-900 p-2">
              <PaperAirplaneIcon className="h-6 text-white" />
            </button>
          </form>
        )}
      </div>
    </div>
  )
}

export default ChatWindow
