import { useState } from "react"
import { XMarkIcon } from "@heroicons/react/24/outline"

interface PropsType {
  id: number
  item: any
  deleteInquiry: any
}

const Inquiry: React.FC<PropsType> = ({ item, id, deleteInquiry }) => {
  const backendUrl = "https://strapi-km.herokuapp.com"
  const [isDropdown, setIsDropdown] = useState(false)
  const openAdditionalInfo = (id: any) => {
    setIsDropdown((prev) => !prev)
  }

  const buttonText = isDropdown ? "Close" : "Open"

  return (
    <tr
      data-testid={`inquiry-${item.id}`}
      key={item.id}
      className="text-xs text-gray-900 text-center border content-center"
    >
      <td className="text-xl text-indigo-900">{id}</td>
      <td className="p-4">{item.name}</td>
      <td
        className="cursor-pointer hover:text-indigo-300 mr-1 font-light underline underline-offset-4 decoration-indigo-800"
        onClick={() => (window.location.href = `mailto:${item.email}`)}
      >
        {item.email}
      </td>
      <td className="p-5">{item.phone}</td>
      <td className="p-5">{item.city}</td>
      <td className="p-5">{item.address}</td>
      <td className="p-5">{item.contact_preference}</td>
      <td className="p-5">{item.project_level}</td>
      <td className="p-5">{item.project_type}</td>
      <td className="p-5">{item.contractor ? "Yes" : "No"}</td>
      <td>
        <button
          className={`bg-indigo-900 text-gray-50 cursor-pointer transition-all transform  hover:font-bold mx-auto h-5 w-10 border ${
            isDropdown ? "" : " text-indigo-900 bg-transparent"
          }`}
          onClick={() => openAdditionalInfo(id)}
        >
          {buttonText}
        </button>
        <div
          className={`transition duration-300 ease-in-out h-3/6 left-0 mt-8 z-50 p-2 font-light bg-gray-50 text-black absolute  ${
            isDropdown ? "" : "opacity-0 invisible"
          }`}
        >
          <div className="grid grid-rows-2 grid-cols-2 gap-10">
            <div className="row-span-2 text-base text-justify leading-7 font-extralight">
              {item.additional_info}
            </div>
            <div className="flex">
              {item.photos.data?.map((photo: any, id: number) => (
                <img
                  key={item.id}
                  className="w-3/6  mx-auto"
                  src={`${backendUrl}${photo.attributes.url}`}
                  alt=""
                />
              ))}
            </div>
          </div>
        </div>
      </td>
      <td>
        <XMarkIcon
          onClick={() => deleteInquiry(id)}
          className="transition-all transform mx-auto bg-indigo-900 text-white h-5 w-5 hover:scale-110 hover:border hover:border-indigo-900 hover:bg-indigo-100 hover:text-indigo-900 cursor-pointer"
        />
      </td>
    </tr>
  )
}

export default Inquiry
