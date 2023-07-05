import React, { useEffect, useState } from "react"
import {
  PaperAirplaneIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline"
const ChatWindow = () => {
  const [webSocket, setWebSocket] = useState({})
  const [onlineUsers, setOnlineUsers] = useState<Set<string>>(new Set())

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
        <div className="text-indigo-900 flex gap-2 text-center text-xl font-medium mb-2">
          <ChatBubbleLeftRightIcon className="h-6" />
          Support Chat
        </div>
        {Array.from(onlineUsers).map((username) => (
          <div className="border-b border-indigo-200 py-2" key={username}>
            {username}
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
