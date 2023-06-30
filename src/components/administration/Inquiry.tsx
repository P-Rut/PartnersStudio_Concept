import { useState } from "react"
import { Link } from "react-router-dom"
import { XMarkIcon } from "@heroicons/react/24/outline"

interface PropsType {
  id?: number
  item?: any
  deleteInquiry?: any
}

const Inquiry: React.FC<PropsType> = ({ item, id, deleteInquiry }) => {
  const backendUrl = "https://strapi-km.herokuapp.com"

  return (
    <tr
      data-testid={`inquiry-${item.id}`}
      key={item.id}
      className="text-sm font-thin text-gray-900 text-center border content-center"
    >
      <td className="text-xl font-normal text-indigo-900 p-5">{id}</td>

      <td>{item.name}</td>
      <td
        className="cursor-pointer hover:text-indigo-300 mr-1 underline decoration-1 underline-offset-4 decoration-indigo-800"
        onClick={() => (window.location.href = `mailto:${item.email}`)}
      >
        {item.email}
      </td>
      <td>{item.phone}</td>
      <td>{item.city}</td>
      {/* <td>{item.address}</td>
      <td>{item.contact_preference}</td>
      <td>{item.project_level}</td> */}
      <td>{item.project_type}</td>
      <td>{item.contractor ? "Interested" : "Not interested"}</td>
      <td>
        <button className="text-indigo-900 cursor-pointer transition-all transform  hover:font-semibold hover:text-white hover:bg-indigo-900  mx-auto h-6 w-12 border border-gray-300">
          <Link to={`/admin/${id}`}>Open</Link>
        </button>
      </td>
      <td>
        <XMarkIcon
          onClick={() => deleteInquiry(id)}
          className="transition-all transform mx-auto bg-indigo-900 text-white h-6 w-6 hover:scale-110 hover:border hover:border-indigo-900 hover:bg-indigo-100 hover:text-indigo-900 cursor-pointer"
        />
      </td>
    </tr>
  )
}

export default Inquiry
