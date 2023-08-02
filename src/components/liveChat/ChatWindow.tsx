import React, { useContext, useEffect, useState, useRef } from "react"
import Avatar from "boring-avatars"
import Logo from "./Logo"
import { PaperAirplaneIcon } from "@heroicons/react/24/outline"
import { uniqBy } from "lodash"
import { UserContext } from "./context/UserContext"
import axios from "axios"

const ChatWindow = () => {
  const [webSocket, setWebSocket] = useState<any>()
  const [onlineUsers, setOnlineUsers] = useState<any>({})
  const [selectedUser, setSelectedUser] = useState("")
  const [messageText, setMessageText] = useState("")
  const [messagesInsideChat, setMessagesInsideChat] = useState<any[]>([])
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
      setMessagesInsideChat((prev: any) => [...prev, { ...messageData }])
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
    if (selectedUser) {
      axios.get(`/messages/${selectedUser}`).then((res) => {
        setMessagesInsideChat(res.data)
      })
    }
  }, [selectedUser])

  const deleteOurUserName = { ...onlineUsers }
  delete deleteOurUserName[id]
  const messagesWithoutDuplicates = uniqBy(messagesInsideChat, "_id")

  return (
    <div className="flex h-screen">
      <div className="w-1/3 flex  flex-col">
        <div className="flex-grow">
          <Logo />

          {Object.keys(deleteOurUserName).map((userID) => (
            <div
              key={userID}
              onClick={() => setSelectedUser(userID)}
              className={
                "cursor-pointer border-b border-t border-indigo-200 bg-indigo-200  flex items-center" +
                (userID === selectedUser ? "" : "opacity-40 bg-white")
              }
            >
              {userID === selectedUser && (
                <div className="w-1 bg-green-500 h-14"></div>
              )}
              <div className="flex gap-4 py-2 pl-4">
                <Avatar
                  size={40}
                  name={userID}
                  variant="beam"
                  colors={["#1d21a0", "#F1C93B", "#FBD85D", "#FAE392"]}
                />
                <span className="my-auto text-lg font-light">
                  {onlineUsers[userID]}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center p-2 justify-center text-center">
          <span className="text-sm flex items-center">
            <Avatar
              size={30}
              name={id}
              variant="beam"
              colors={["#1d21a0", "#F1C93B", "#FBD85D", "#FAE392"]}
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
