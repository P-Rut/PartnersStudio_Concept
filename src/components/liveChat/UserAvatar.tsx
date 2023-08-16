import Avatar from "boring-avatars"
import { useContext } from "react"
import { ChatContext } from "./context/ChatContext"

export default function UserAvatar({ userID, username, online }: any) {
  const { open }: any = useContext(ChatContext)
  return (
    <>
      {!open && (
        <div className="flex relative items-center capitalize ml-2">
          <Avatar
            size={40}
            name={userID}
            variant="beam"
            colors={["#1d21a0", "#7788e0", "#93bed3", "#9dd6fc"]}
          />
          <span className="my-auto ml-3 text-xl font-extralight">
            {username}
          </span>
          {online && (
            <div className="absolute w-3 h-3 bg-green-400 -bottom-1  border-white border-2 rounded-full"></div>
          )}
          {!online && (
            <div className="absolute w-3 h-3 bg-gray-400 -bottom-1  border-white border-2 rounded-full"></div>
          )}
        </div>
      )}
      {!!open && (
        <div className="flex relative items-center capitalize ml-2">
          <Avatar
            size={20}
            name={userID}
            variant="beam"
            colors={["#1d21a0", "#7788e0", "#93bed3", "#9dd6fc"]}
          />
          <span className="my-auto ml-3 text-xs font-extralight">
            {username}
          </span>
          {online && (
            <div className="absolute w-3 h-3 bg-green-400 -bottom-1  border-white border-2 rounded-full"></div>
          )}
          {!online && (
            <div className="absolute w-3 h-3 bg-gray-400 -bottom-1  border-white border-2 rounded-full"></div>
          )}
        </div>
      )}
    </>
  )
}
