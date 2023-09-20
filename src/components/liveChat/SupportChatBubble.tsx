import {
  ChatBubbleBottomCenterTextIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline"
import { useContext } from "react"

import { ChatContext } from "./context/ChatContext"

const SupportChatBubble: React.FC = () => {
  const { open, setOpen }: any = useContext(ChatContext)
  return (
    <>
      <div
        onClick={() => setOpen((prev: any) => !prev)}
        className={`transition ease-out duration-150 fixed w-12 h-12 flex justify-center items-center bottom-5 right-5 bg-indigo-900 rounded-full border border-white drop-shadow-[0_0px_10px_rgba(0,0,0,0.50)] shadow-black hover:scale-125 
        ${!!open ? "opacity-0 invisible" : ""}`}
      >
        <ChatBubbleBottomCenterTextIcon className="text-white h-8 w-8 cursor-pointer hover:text-indigo-200" />
      </div>
      <div
        onClick={() => setOpen((prev: any) => !prev)}
        className={`transition ease-in duration-150 fixed w-12 h-12 flex justify-center items-center bottom-5 right-5 bg-indigo-900 rounded-full drop-shadow-[0_0px_10px_rgba(0,0,0,0.50)] shadow-black hover:scale-125 
        ${!!open ? "" : "opacity-0 invisible"}`}
      >
        <XMarkIcon className="text-white h-10 w-10 cursor-pointer hover:text-indigo-200" />
      </div>
    </>
  )
}

export default SupportChatBubble
