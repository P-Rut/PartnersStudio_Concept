import RegisterAndLoginForm from "./RegisterAndLoginForm"
import { useContext } from "react"
import { UserContext } from "./context/UserContext"
import ChatWindow from "./ChatWindow"

export default function Routes() {
  const { username }: any = useContext(UserContext)

  if (username) {
    return (
      <>
        <ChatWindow />
      </>
    )
  }

  return <RegisterAndLoginForm />
}
