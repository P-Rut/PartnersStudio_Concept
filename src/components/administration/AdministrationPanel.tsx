import axios from "axios"
import { XMarkIcon } from "@heroicons/react/24/outline"
import Navbar from "../Navbar"
import React, { useState, useEffect } from "react"
import { Inquiriy } from "../../types/FormData"
import { DataTable } from "./table/data-table"
import { columns } from "./table/columns"

const backendUrl = "https://strapi-km.herokuapp.com"

function AdministrationPanel() {
  const [inquiries, setInquiries] = useState<Inquiriy[]>([])
  const getUrl = `${process.env.REACT_APP_URL}/api/inquiries?populate=*`
  const [isDropdown, setIsDropdown] = useState(false)

  const openAdditionalInfo = (id: any) => {
    setInquiries(inquiries.filter((item) => (item.id = id)))
    setIsDropdown((prev) => !prev)
  }

  useEffect(() => {
    axios
      .get(getUrl, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
        },
      })
      .then((response) => {
        const InquiriesData = response.data
        setInquiries(InquiriesData.data)
        console.log(InquiriesData.data)
      })
  }, [])

  const deleteEnguiry = async (id: any) => {
    if (
      window.confirm("Are you sure you want to delete this client enquiry ?")
    ) {
      axios
        .delete(`${process.env.REACT_APP_URL}/api/inquiries/${id}`, {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
          },
        })
        .then((res) => {
          window.alert("Enquiry has been removed")
          setInquiries(inquiries.filter((item) => item.id !== id))
          console.log("deleted", res.data)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }

  return (
    <>
      <Navbar />
      <div className="w-screen py-20 px-10 ">
        <table className="w-full border">
          <thead className="text-indigo-900 uppercase bg-indigo-50 pt-20 text-sm font-light underline underline-offset-2">
            <th className="p-3">Client's id</th>
            <th className="p-3">Name</th>
            <th className="p-3">Email</th>
            <th className="p-3">Phone</th>
            <th className="p-3">City</th>
            <th className="p-3">Address</th>
            <th className="p-3">Contact</th>
            <th className="p-3"> Stage</th>
            <th className="p-3">Type</th>
            <th className="p-3">Contructor</th>
            <th className="p-3">Additional Info</th>
            <th className="p-3">Photos</th>
            <th className="p-3">CTA</th>
          </thead>
          <>
            {inquiries.map(({ attributes, id }: Inquiriy) => {
              return (
                <>
                  <tbody className="text-xs text-center border content-center">
                    <tr>
                      <td className="text-xl text-indigo-900">{id}</td>
                      <td>{attributes.name}</td>
                      <td>{attributes.email}</td>
                      <td>{attributes.phone}</td>
                      <td>{attributes.city}</td>
                      <td>{attributes.address}</td>
                      <td>{attributes.contact_preference}</td>
                      <td>{attributes.project_level}</td>
                      <td>{attributes.project_type}</td>
                      <td>{attributes.contractor ? "Yes" : "No"}</td>
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
                            {attributes.additional_info}
                          </div>
                        </div>
                      </td>
                      <td>
                        {attributes.photos.data?.map((photo) => (
                          <img
                            className="w-12 mx-auto"
                            src={`${backendUrl}${photo.attributes.url}`}
                            alt="photo"
                          />
                        ))}
                      </td>
                      <td>
                        <XMarkIcon
                          onClick={() => deleteEnguiry(id)}
                          className="mx-auto bg-indigo-900 text-white h-5 w-5 hover:scale-110 hover:border hover:border-indigo-900 hover:bg-indigo-100 hover:text-indigo-900 cursor-pointer"
                        />
                      </td>
                    </tr>
                  </tbody>
                </>
              )
            })}
          </>
        </table>
      </div>
    </>
  )
}

export default AdministrationPanel
