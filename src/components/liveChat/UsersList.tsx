import Logo from "./Logo"
import Users from "./Users"
import Avatar from "boring-avatars"

export default function UsersList({
  setSelectedUser,
  selectedUser,
  offlineUsers,
  id,
  username,
  logout,
  onlineUsers,
}: any) {
  const onlinePeoplewithoutOurUserName = { ...onlineUsers }
  delete onlinePeoplewithoutOurUserName[id]

  return (
    <div className="w-1/3 m-5 rounded flex flex-col border border-black">
      <div className="flex-grow">
        <Logo />
        <div>
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
  )
}
