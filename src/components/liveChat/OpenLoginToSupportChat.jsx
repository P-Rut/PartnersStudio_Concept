import React, { useContext } from "react"
import { useState } from "react"
import axios from "axios"
import SupportChatBubble from "./SupportChatBubble"
import { ChatContext } from "./context/ChatContext"

const OpenLoginToSupportChat = () => {
  const [username, setUsername] = useState("")

  const {
    setIdentifier: setLoggedIdentifier,
    setId,
    open,
  } = useContext(ChatContext)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const url = "open"
    const { data } = await axios.post(url, { username })
    console.log(username)
    setLoggedIdentifier(username)
    setId(data.id)
  }

  return (
    <>
      {!!open && (
        <div className="transition ease-out duration-300 fixed bottom-20 right-5 flex flex-col h-3/5 w-1/4 items-center bg-white  p-6 rounded-md border-2 border-indigo-900 ">
          <h1 className="font-extralight mb-4 mt-4 px-6">
            If you need help feel free to contact our support team.
          </h1>
          <h2 className="text-xs font-thin mb-10 px-6">
            To start chatting provide us with username below.
          </h2>
          <form onSubmit={handleSubmit}>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              placeholder="Username"
              className="block w-full mb-4"
            />
            <button className="text-white  bg-indigo-900 block w-full p-2 hover:opacity-50">
              Create
            </button>
          </form>
        </div>
      )}
      <SupportChatBubble />
    </>
  )
}

export default OpenLoginToSupportChat
