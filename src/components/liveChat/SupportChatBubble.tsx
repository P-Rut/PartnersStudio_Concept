import { ChatBubbleBottomCenterTextIcon } from "@heroicons/react/24/outline"

const SupportChatBubble = () => {
  return (
    <div className="fixed w-12 h-12 flex justify-center items-center bottom-5 right-5 bg-indigo-900 rounded-full border border-white drop-shadow-[0_0px_10px_rgba(0,0,0,0.50)] shadow-black">
      <ChatBubbleBottomCenterTextIcon className="text-white h-8 w-8 cursor-pointer hover:text-indigo-200" />
    </div>
  )
}

export default SupportChatBubble
