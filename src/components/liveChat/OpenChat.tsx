import axios from "axios"
import OpenRoutes from "./OpenRoutes"
import { UserContextProvider } from "./context/ChatContext"

const OpenChat = () => {
  axios.defaults.baseURL = "http://localhost:7007"
  axios.defaults.withCredentials = true

  return (
    <UserContextProvider>
      <OpenRoutes />
    </UserContextProvider>
  )
}

export default OpenChat
