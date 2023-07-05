import React, { useContext } from "react"
import { useState } from "react"
import axios from "axios"
import { UserContext } from "./context/UserContex"

const RegisterAndLoginForm = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [isLoginOrRegister, setIsLoginOrRegister] = useState("register")
  const { setUsername: setLoggedInUsername, setId } = useContext(UserContext)

  async function handleSubmit(e) {
    e.preventDefault()

    const url = isLoginOrRegister === "register" ? "register" : "login"
    const { data } = await axios.post(url, { username, password })
    setLoggedInUsername(username)
    setId(data.id)
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
