import { createContext, useEffect, useState } from "react"
import axios from "axios"

export const ChatContext = createContext({})

export function UserContextProvider({ children }: any) {
  const [username, setUsername] = useState(null)
  const [id, setId] = useState(null)
  const [identifier, setIdentifier] = useState(null)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    axios
      .get("/profile")
      .then((res) => {
        setId(res.data.userID)
        setUsername(res.data.username)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  return (
    <ChatContext.Provider
      value={{
        username,
        setUsername,
        id,
        setId,
        identifier,
        setIdentifier,
        open,
        setOpen,
      }}
    >
      {children}
    </ChatContext.Provider>
  )
}
