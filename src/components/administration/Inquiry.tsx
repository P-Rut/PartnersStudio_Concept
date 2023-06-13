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

  return (
    <tbody key={item.id} className="text-xs text-center border content-center">
      <tr>
        <td className="text-xl text-indigo-900">{id}</td>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{item.phone}</td>
        <td>{item.city}</td>
        <td>{item.address}</td>
        <td>{item.contact_preference}</td>
        <td>{item.project_level}</td>
        <td>{item.project_type}</td>
        <td>{item.contractor ? "Yes" : "No"}</td>
        <td>
          <button
            className="bg-indigo-900 text-white h-5 w-16 border"
            onClick={() => openAdditionalInfo(id)}
          >
            dropdown
          </button>
          <div
            className={`transition ease-linear w-screen h-4/6 bg-gray-200 text-black left-0 p-1 absolute ${
              isDropdown ? "" : "opacity-0 invisible"
            }`}
          >
            <div className=" mt-1">
              {id}
              {item.additional_info}
            </div>
          </div>
        </td>
        <td className="flex">
          {item.photos.data?.map((photo: any, id: number) => (
            <img
              key={item.id}
              className="w-12 mx-auto"
              src={`${backendUrl}${photo.attributes.url}`}
              alt=""
            />
          ))}
        </td>
        <td>
          <XMarkIcon
            onClick={() => deleteInquiry(id)}
            className="mx-auto bg-indigo-900 text-white h-5 w-5 hover:scale-110 hover:border hover:border-indigo-900 hover:bg-indigo-100 hover:text-indigo-900 cursor-pointer"
          />
        </td>
      </tr>
    </tbody>
  )
}

export default Inquiry
