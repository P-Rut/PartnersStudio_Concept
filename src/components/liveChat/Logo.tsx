import React from "react"
import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline"
const Logo = () => {
  return (
    <div className="text-indigo-900 flex gap-2 text-center text-xl font-medium mb-2 p-4">
      <ChatBubbleLeftRightIcon className="h-6" />
      Support Chat
    </div>
  )
}
export default Logo
