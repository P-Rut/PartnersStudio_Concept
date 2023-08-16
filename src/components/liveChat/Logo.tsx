import React from "react"
import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/outline"
const Logo = () => {
  return (
    <div
      className="flex items-center gap-2 text-center text-2xl font-extralight p-4 justify-center
    border border-t-0 border-b border-l-0 border-r-0 border-black
    "
    >
      <ChatBubbleOvalLeftEllipsisIcon className="h-8 text-indigo-900" />
      Support Chat
    </div>
  )
}
export default Logo
