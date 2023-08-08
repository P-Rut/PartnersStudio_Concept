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
    <div className="w-1/3 flex  flex-col">
      <div className="flex-grow">
        <Logo />
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
      <div className="flex items-center p-2 justify-center text-center capitalize">
        <span className="text-sm flex items-center">
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
          className="text-sm text-gray-200 bg-indigo-800 px-3 py-1 border"
        >
          logout
        </button>
      </div>
    </div>
  )
}
