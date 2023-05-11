import axios from "axios"
import { XMarkIcon } from "@heroicons/react/24/outline"
import Navbar from "./Navbar"
import React, { useState, useEffect } from "react"
import { Inquiriy } from "../types/FormData"

const backendUrl = "https://strapi-km.herokuapp.com"

function AdministrationPanel() {
  const [inquiries, setInquiries] = useState<Inquiriy[]>([])
  const getUrl = `${process.env.REACT_APP_URL}/api/inquiries?populate=*`

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

      <>
        {inquiries.map(({ attributes, id }: Inquiriy) => {
          return (
            <>
              <div className="w-screen h-screen">
                <div key={id} className="px-72 py-20 bg-gray-50">
                  <div className="mb-5">
                    <p className="text-indigo-900 text-sm underline underline-offset-2 mb-1">
                      Client's id : {id}
                    </p>
                    <p className="text-gray-400 font-thin text-xs">Name</p>
                    <h1 className="py-2 pl-7 justify-between flex flex-row mb-2 font-light bg-gray-50 text-gray-900 border border-black">
                      {attributes.name}
                      <XMarkIcon
                        onClick={() => deleteEnguiry(id)}
                        className="bg-indigo-900 mr-2 text-white h-5 w-5 hover:scale-110 hover:border hover:border-indigo-900 hover:bg-indigo-100 hover:text-indigo-900 cursor-pointer"
                      />
                    </h1>
                    <p className="text-gray-400 font-thin text-xs">Email</p>
                    <p
                      onClick={() =>
                        (window.location.href = `mailto:${attributes.email}`)
                      }
                      className="py-2 pl-7 mb-2 bg-gray-50 text-gray-900 text-xs border-black border font-light"
                    >
                      {attributes.email}
                    </p>
                    <p className="text-gray-400 font-thin text-xs">
                      Phone Number
                    </p>
                    <p className="py-2 pl-7 mb-2  bg-gray-50 text-gray-900 text-xs border-black border font-light">
                      {attributes.phone}
                    </p>
                    <p className="text-gray-400 font-thin text-xs">City</p>
                    <p className="py-2 pl-7 mb-2 bg-gray-50 text-gray-900 text-xs border-black border font-light">
                      {attributes.city}
                    </p>
                    <p className="text-gray-400 font-thin text-xs">Address</p>
                    <p className="py-2 pl-7 mb-2  bg-gray-50 text-gray-900 text-xs border-black border font-light">
                      {attributes.address}
                    </p>
                    <p className="text-gray-400 font-thin text-xs">
                      Contact Preference
                    </p>
                    <p className="py-2 pl-7 mb-2  bg-gray-50 text-gray-900 text-xs border-black border font-light">
                      {Array.isArray(attributes.contact_preference)
                        ? attributes.contact_preference.join(" ")
                        : "No contact preferences specified"}
                    </p>
                    <p className="text-gray-400 font-thin text-xs">
                      Project Level
                    </p>
                    <p className="py-2 pl-7 mb-2  bg-gray-50 text-gray-900 text-xs border-black border font-light">
                      {attributes.project_level}
                    </p>
                    <p className="text-gray-400 font-thin text-xs">
                      Project Type
                    </p>
                    <p className="py-2 pl-7 mb-2  bg-gray-50 text-gray-900 text-xs border-black border font-light">
                      {attributes.project_type}
                    </p>
                    <p className="text-gray-400 font-thin text-xs">
                      Do you intend to work with contructor ?
                    </p>
                    <p className="py-2 pl-7 mb-2  bg-gray-50 text-gray-900 text-xs border-black border font-light">
                      {attributes.contractor ? "Yes" : "No"}
                    </p>
                    <p className="text-gray-400 font-thin text-xs">
                      Additional Info
                    </p>
                    <p className="py-2 px-7 mb-2  bg-gray-50 text-gray-900 text-xs border-black border font-light">
                      {attributes.additional_info}
                    </p>
                    <p className="text-gray-400 font-thin text-xs">
                      Uploaded Photos
                    </p>
                    <p className="py-2 pl-7 mb-2  bg-gray-50 text-gray-900 text-xs border-black border font-light">
                      {attributes.photos.data?.map((photo) => (
                        <img
                          src={`${backendUrl}${photo.attributes.url}`}
                          alt="photo"
                        />
                      ))}
                    </p>
                  </div>
                </div>
              </div>
            </>
          )
        })}
      </>
    </>
  )
}

export default AdministrationPanel
