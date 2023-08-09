import { createContext, useEffect, useState } from "react"
import axios from "axios"

export const UserContext = createContext({})

export function UserContextProvider({ children }: any) {
  const [username, setUsername] = useState(null)
  const [id, setId] = useState(null)

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
    <UserContext.Provider value={{ username, setUsername, id, setId }}>
      {children}
    </UserContext.Provider>
  )
}