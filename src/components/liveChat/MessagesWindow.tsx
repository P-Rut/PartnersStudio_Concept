import axios from "axios"
import { PaperAirplaneIcon, PaperClipIcon } from "@heroicons/react/24/outline"

export default function MessagesWindow({
  selectedUser,
  chatWindowRef,
  messagesWithoutDuplicates,
  id,
  sendMessage,
  messageText,
  setMessageText,
}: any) {
  function sendFile(ev: any) {
    const reader = new FileReader()
    reader.readAsDataURL(ev.target.files[0])
    reader.onload = () => {
      const fileMessage: any = {
        name: ev.target.files[0].name,
        data: reader.result,
      }
      sendMessage(null, fileMessage)
    }
  }

  return (
    <div className="flex flex-col m-5 rounded border-black border w-2/3 p-2">
      <div className="flex-grow">
        {!selectedUser && (
          <div className="flex items-center justify-center h-full">
            <div className="text-gray-50"> No selected conversation</div>
          </div>
        )}
        {!!selectedUser && (
          <div className="relative h-full">
            <div
              ref={chatWindowRef}
              className=" scroll-smooth overflow-y-scroll absolute top-0 bottom-4 left-0 right-0 max-w-4xl mx-auto space-y-2 grid grid-cols-1"
            >
              {messagesWithoutDuplicates.map((message: any) => (
                <div key={message._id}>
                  <div
                    className={
                      message.sender === id
                        ? "place-self-end inline-block bg-indigo-900 border border-gray-300 mr-2 text-white p-4 ml-24 font-normal text-base float-right rounded-2xl rounded-tr-none"
                        : " place-self-start inline-block border border-gray-300 bg-gray-200  text-gray-900 p-4 mr-24 font-normal text-base float-left rounded-2xl rounded-tl-none"
                    }
                  >
                    {message.text}
                    {message.file && (
                      <div>
                        <a
                          target="_blank"
                          rel="noreferrer"
                          className={
                            message.sender === id
                              ? "border-b flex items-center gap-2"
                              : "border-b  border-indigo-900 flex items-center gap-2"
                          }
                          href={
                            axios.defaults.baseURL + "/uploads/" + message.file
                          }
                        >
                          <PaperClipIcon
                            className={
                              message.sender === id
                                ? "h-4 text-white"
                                : "h-4 text-indigo-900 "
                            }
                          />
                          {message.file}
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      {!!selectedUser && (
        <form className="flex gap-2" onSubmit={sendMessage}>
          <input
            value={messageText}
            onChange={(ev) => setMessageText(ev.target.value)}
            type="text"
            placeholder="Type your message here"
            className="p-2 border-indigo-800 flex-grow rounded"
          />
          <label className="bg-gray-300 p-2 border cursor-pointer rounded border-indigo-900">
            <input type="file" className="hidden" onChange={sendFile} />
            <PaperClipIcon className="h-6 text-indigo-900" />
          </label>
          <button type="submit" className="bg-indigo-900 rounded p-2">
            <PaperAirplaneIcon className="h-6 text-white" />
          </button>
        </form>
      )}
    </div>
  )
}
