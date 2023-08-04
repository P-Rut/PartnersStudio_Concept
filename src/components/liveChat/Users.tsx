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
      className={
        "cursor-pointer border-b border-t border-indigo-200 bg-indigo-200  flex items-center" +
        (id === selected ? "" : "opacity-40 bg-white")
      }
    >
      {id === selected && <div className="w-1 bg-green-500 h-14"></div>}
      <div className="flex gap-4 py-2 pl-4">
        <UserAvatar online={online} userID={id} username={username} />
      </div>
    </div>
  )
}
