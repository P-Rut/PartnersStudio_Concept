import { useContext } from "react"
import OpenLoginToSupportChat from "./OpenLoginToSupportChat"
import ChatWindow from "./ChatWindow"
import { ChatContext } from "./context/ChatContext"

export default function OpenRoutes() {
  const { identifier }: any = useContext(ChatContext)

  if (identifier) {
    return <ChatWindow />
  }

  return <OpenLoginToSupportChat />
}
