import { useContext, useEffect } from "react"
import Logo from "./Logo"
import Users from "./Users"
import Avatar from "boring-avatars"
import { ChatContext } from "./context/ChatContext"
import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/outline"

export default function UsersList({
  setSelectedUser,
  selectedUser,
  offlineUsers,
  id,
  username,
  logout,
  onlineUsers,
}: any) {
  const { open }: any = useContext(ChatContext)
  const onlinePeoplewithoutOurUserName = { ...onlineUsers }
  delete onlinePeoplewithoutOurUserName[id]

  useEffect(() => {
    if (!!open) {
      setSelectedUser("64da2b1a0f65516d3a52412f")
    }
  }, [selectedUser, username])

  return (
    <>
      {!open && (
        <>
          <div className="w-1/3 m-5 rounded flex flex-col border border-black">
            <Logo />
            <div className="flex-grow overflow-y-auto">
              {Object.keys(onlinePeoplewithoutOurUserName).map((userID) => (
                <Users
                  key={userID}
                  online={true}
                  onClick={() => setSelectedUser(userID)}
                  id={userID}
                  username={onlinePeoplewithoutOurUserName[userID]}
                  selected={userID === selectedUser}
                />
              ))}
              {Object.keys(offlineUsers).map((userID) => (
                <Users
                  key={userID}
                  online={false}
                  onClick={() => setSelectedUser(userID)}
                  id={userID}
                  username={offlineUsers[userID].username}
                  selected={userID === selectedUser}
                />
              ))}
            </div>
            <div className="flex flex-col items-center py-2 gap-2 border border-t border-b-0 border-l-0 border-r-0 border-black justify-center text-center capitalize">
              <span className="font-extralight">Logged in as:</span>
              <span className=" text-sm flex items-center gap-2 font-light">
                <Avatar
                  size={30}
                  name={id}
                  variant="beam"
                  colors={["#1d21a0", "#7788e0", "#93bed3", "#9dd6fc"]}
                />
                {username}
              </span>

              <button
                onClick={logout}
                className="text-sm text-gray-200 bg-indigo-900 px-16 py-2 font-extralight border hover:bg-indigo-300 hover:rounded-lg hover: ease-in-out hover:transition-all"
              >
                Logout
              </button>
            </div>
          </div>
        </>
      )}
      {!!open && (
        <div className="w-full absolute top-0 p-2 flex flex-col text-white rounded-b font-extralight text-sm  bg-indigo-900">
          <div className="flex gap-2 items-center">
            <ChatBubbleOvalLeftEllipsisIcon className="w-6 h-6" />
            <h1>Live Support Chat</h1>
          </div>

          <div className="bg-white absolute p-1 z-10 top-10 flex items-center border-black border-b rounded-b rounded-md w-full left-0 text-black">
            <h1 className="text-xs ml-2">You are chatting with</h1>
            <h1 className="text-xs ml-1 py-2 font-medium">Support Team</h1>
          </div>
        </div>
      )}
    </>
  )
}
