import React, { useContext } from "react"
import { useState } from "react"
import axios from "axios"
import SupportChatBubble from "./SupportChatBubble"
import { ChatContext } from "./context/ChatContext"

const OpenLoginToSupportChat = () => {
  const [username, setUsername] = useState("")
  const [usernameExists, setUsernameExists] = useState(false)

  const {
    setIdentifier: setLoggedIdentifier,
    setId,
    open,
  } = useContext(ChatContext)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const url = "open"
    try {
      const response = await axios.post(url, { username })
      if (response.status === 201) {
        setUsernameExists(false)
        setLoggedIdentifier(username)
        setId(response.data.id)
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setUsernameExists(true)
      }
    }
  }

  return (
    <>
      {!!open && (
        <div className="transition ease-out duration-300 fixed bottom-20 right-5 flex flex-col h-3/5 w-1/4 items-center bg-white  p-4 rounded-md border-2 border-indigo-900 ">
          <h1 className="font-extralight mb-4 mt-4 px-6 leading-5">
            If you need help feel free to contact our support team.
          </h1>
          <h2 className=" text-sm font-thin mb-5 px-6">
            To start chatting provide us with username below.
          </h2>
          <form onSubmit={handleSubmit}>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              placeholder="Username"
              className="block w-full"
            />
            {usernameExists && (
              <p className="text-red-500 mb-2 mt-2 text-xs justify-center flex">
                Username is taken. <br /> Please try another.
              </p>
            )}
            <button className="text-white mt-2  bg-indigo-900 block w-full p-2  hover:opacity-50">
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
