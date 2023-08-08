import React from "react"
import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/outline"
const Logo = () => {
  return (
    <div className="flex items-center gap-2 text-center text-2xl font-extralight mb-2 p-4 justify-center">
      <ChatBubbleOvalLeftEllipsisIcon className="h-8 text-indigo-900" />
      Support Chat
    </div>
  )
}
export default Logo
