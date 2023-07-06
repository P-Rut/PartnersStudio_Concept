import React, { useEffect, useState } from "react"
import Avatar from "boring-avatars"
import Logo from "./Logo"
import { PaperAirplaneIcon } from "@heroicons/react/24/outline"

const ChatWindow = () => {
  const [webSocket, setWebSocket] = useState({})
  const [onlineUsers, setOnlineUsers] = useState<Set<string>>(new Set())
  const [selectedUser, setSelectedUser] = useState("")

  useEffect(() => {
    const webSocket = new WebSocket("ws://localhost:7007")
    setWebSocket(webSocket)
    webSocket.addEventListener("message", handleMessage)
  }, [])
  function showOnlineUsers(usersArray: any) {
    const users = new Set()
    usersArray.forEach(({ _, username }: any) => {
      users.add(username)
    })

    //@ts-ignore
    setOnlineUsers(users)
  }

  function handleMessage(ev: any) {
    const messageData = JSON.parse(ev.data)
    if ("online" in messageData) {
      showOnlineUsers(messageData.online)
    }
  }

  return (
    <div className="flex h-screen">
      <div className="w-1/3 p-4 ">
        <Logo />
        {Array.from(onlineUsers).map((username) => (
          <div
            onClick={() => setSelectedUser(username)}
            className={
              "cursor-pointer border-b border-indigo-200 py-2 flex items-center gap-3 " +
              (username === selectedUser ? "" : "opacity-40")
            }
            key={username}
          >
            <Avatar
              name={username}
              variant="beam"
              colors={["#9af486", "#4fb485", "#404baa", "#39487c", "#27079b"]}
            />

            <span>{username}</span>
          </div>
        ))}
      </div>
      <div className="flex flex-col  bg-indigo-500 w-2/3 p-2">
        <div className="flex-grow">messages with selected person</div>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Type your message here"
            className="p-2 border-indigo-800 flex-grow"
          />
          <button className="bg-indigo-900 p-2">
            <PaperAirplaneIcon className="h-6 text-white" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ChatWindow
