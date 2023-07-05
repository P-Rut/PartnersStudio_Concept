import axios from "axios"
import { UserContextProvider } from "./context/UserContex"
import Routes from "./Routes"

const Chat = () => {
  axios.defaults.baseURL = "http://localhost:7007"
  axios.defaults.withCredentials = true

  return (
    <UserContextProvider>
      <Routes />
    </UserContextProvider>
  )
}

export default Chat
