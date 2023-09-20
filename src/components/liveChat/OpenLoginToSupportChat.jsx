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
        <div className="transition ease-out duration-300 px-10 py-10 fixed bottom-20 gap-5 flex flex-1 justify-center flex-col right-5 h-4/5 w-[350px] sm:h-2/4 sm:w-[290px]  items-center bg-white p-4 rounded-md border-2 border-indigo-900 ">
          <div className=" flex flex-col gap-4">
            <h1 className="font-extralight leading-8 text-2xl">
              If you need help feel free to contact our support team.
            </h1>
            <h2 className="text-base font-thin">
              To start chatting provide us with username below.
            </h2>
          </div>
          <div className="w-full">
            <form onSubmit={handleSubmit}>
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                placeholder="Username"
                className="block w-full"
              />
              {usernameExists && (
                <p className="text-red-500 mb-2 mt-2 text-base leading-5 justify-center flex">
                  Username is taken. <br /> Please try another.
                </p>
              )}
              <button className="text-white mt-4  bg-indigo-900 block w-full p-2  hover:opacity-50">
                Create
              </button>
            </form>
          </div>
        </div>
      )}
      <SupportChatBubble />
    </>
  )
}

export default OpenLoginToSupportChat
