import UserAvatar from "./UserAvatar"

export default function Users({
  id,
  username,
  onClick,
  selected,
  online,
}: any) {
  return (
    <div
      key={id}
      onClick={() => onClick(id)}
      className={`cursor-pointer border-t border-indigo-900 flex items-center ${
        selected ? "border-b border-r-0 border-l-0 " : ""
      }`}
    >
      {selected && <div className="w-2 bg-indigo-900 h-14"></div>}
      <div className="flex gap-4 py-2 pl-4">
        <UserAvatar online={online} userID={id} username={username} />
      </div>
    </div>
  )
}
