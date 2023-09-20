import RegisterAndLoginForm from "./RegisterAndLoginForm"
import { useContext } from "react"
import { ChatContext } from "./context/ChatContext"
import ChatWindow from "./ChatWindow"

export default function Routes() {
  const { username }: any = useContext(ChatContext)

  if (username) {
    return <ChatWindow />
  }

  return <RegisterAndLoginForm />
}
