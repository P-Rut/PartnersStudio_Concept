import RegisterAndLoginForm from "./RegisterAndLoginForm"
import { useContext } from "react"
import { UserContext } from "./context/UserContex"
import ChatWindow from "./ChatWindow"

export default function Routes() {
  const { username, id }: any = useContext(UserContext)

  if (username) {
    return <ChatWindow />
  }

  return <RegisterAndLoginForm />
}
