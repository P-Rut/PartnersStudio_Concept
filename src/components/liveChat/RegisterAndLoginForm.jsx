import { useContext } from "react"
import { useState } from "react"
import axios from "axios"
import { UserContext } from "./context/UserContext"
import SupportChatBubble from "./SupportChatBubble"

const RegisterAndLoginForm = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [isLoginOrRegister, setIsLoginOrRegister] = useState("register")
  const { setUsername: setLoggedInUsername, setId } = useContext(UserContext)
  const [chatBubbleToggle, setChatBubbleToggle] = useState(false)
  const [showSmallChat, setShowSmallChat] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const url = isLoginOrRegister === "register" ? "register" : "login"
    const { data } = await axios.post(url, { username, password })
    setLoggedInUsername(username)
    setId(data.id)
  }
  const handleChatBubbleOpen = () => {
    setShowSmallChat(true)
    setChatBubbleToggle(false)
  }
  const handleChatBubbleClose = () => {
    setShowSmallChat(false)
    setChatBubbleToggle(true)
  }

  if (showSmallChat) {
    return (
      <>
        <div className="fixed flex flex-col w-72 items-center bottom-16 right-5 bg-white h-4/5 p-6 rounded-md border-2 border-indigo-900">
          <h1 className="font-extralight mb-4 px-6">
            If you need help feel free to contact our support team.
          </h1>
          <h2 className="text-xs font-thin mb-4 px-6">
            Login via your email or create new account.
          </h2>
          <form
            className="mx-auto mb-16 font-extralight text-black"
            onSubmit={handleSubmit}
          >
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              placeholder="Username"
              className="block w-full mb-4"
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              className="block w-full mb-4"
            />
            <button className="text-white bg-indigo-900 block w-full p-2">
              {isLoginOrRegister === "register" ? "Register" : "Login"}
            </button>
            <div className="text-center text-sm mt-4 font-extralight">
              {isLoginOrRegister === "register" && (
                <div>
                  Arleady a member ?
                  <br />
                  <button
                    onClick={() => setIsLoginOrRegister("login")}
                    className="underline decoration-indigo-900 underline-offset-2 font-light"
                  >
                    Login here
                  </button>
                </div>
              )}

              {isLoginOrRegister === "login" && (
                <div>
                  Don't have an account ?
                  <br />
                  <button
                    onClick={() => setIsLoginOrRegister("register")}
                    className="underline decoration-indigo-900 underline-offset-2 font-light"
                  >
                    Register
                  </button>
                </div>
              )}
            </div>
          </form>
        </div>

        <button
          onClick={handleChatBubbleClose}
          className="fixed bottom-5 right-5 w-10 h-10 bg-indigo-900 rounded-full text-2xl font-extralight text-white"
        >
          X
        </button>
      </>
    )
  }

  if (chatBubbleToggle) {
    return (
      <div onClick={handleChatBubbleOpen}>
        <SupportChatBubble />
      </div>
    )
  }
  return (
    <div className="bg-indigo-100 h-screen flex items-center">
      <form className="w-72 mx-auto mb-16" onSubmit={handleSubmit}>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="username"
          className="block w-full mb-2"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="password"
          className="block w-full mb-2"
        />
        <button className="text-white bg-indigo-900 block w-full p-2">
          {isLoginOrRegister === "register" ? "Register" : "Login"}
        </button>
        <div className=" text-center mt-2 font-light">
          {isLoginOrRegister === "register" && (
            <div>
              Arleady a member ?
              <button
                onClick={() => setIsLoginOrRegister("login")}
                className="ml-2 underline decoration-indigo-900 underline-offset-2 font-light"
              >
                Login here
              </button>
            </div>
          )}
          {isLoginOrRegister === "login" && (
            <div>
              Don't have an account ?
              <button
                onClick={() => setIsLoginOrRegister("register")}
                className="ml-2 underline decoration-indigo-900 underline-offset-2 font-light"
              >
                Register
              </button>
            </div>
          )}
        </div>
      </form>
    </div>
  )
}

export default RegisterAndLoginForm
