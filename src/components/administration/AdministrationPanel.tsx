import axios from "axios"
import { XMarkIcon } from "@heroicons/react/24/outline"
import Navbar from "../Navbar"
import React, { useState, useEffect } from "react"
import { Inquiriy } from "../../types/FormData"
import Pagination from "./Pagination"

const backendUrl = "https://strapi-km.herokuapp.com"

function AdministrationPanel() {
  const [inquiries, setInquiries] = useState<Inquiriy[]>([])
  const getUrl = `${process.env.REACT_APP_URL}/api/inquiries?populate=*`
  const [isDropdown, setIsDropdown] = useState(false)
  const openAdditionalInfo = (id: any) => {
    setInquiries(inquiries.filter((item) => (item.id = id)))
    setIsDropdown((prev) => !prev)
  }
  const [currentPage, setCurrentPage] = useState(1)
  const [InquiryPerPage] = useState(5)
  const indexOfLastInquiry = currentPage * InquiryPerPage
  const indexOfFirstInquiry = indexOfLastInquiry - InquiryPerPage
  const currentInquiry = inquiries.slice(
    indexOfFirstInquiry,
    indexOfLastInquiry
  )

  const paginate = (InquiryNumber: any) => setCurrentPage(InquiryNumber)

  function Next() {
    currentPage < 5 && setCurrentPage(currentPage + 1)
  }
  function Prev() {
    currentPage > 1 && setCurrentPage(currentPage - 1)
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
      <div className="pt-12 h-screen">
        <table className=" table-fixed border">
          <thead className="w-full text-indigo-900 uppercase bg-indigo-50 pt-20 text-sm font-light underline underline-offset-2">
            <tr>
              <th className="p-3 w-30 bg-indigo-300">Client's id</th>
              <th className="p-3 w-52 bg-red-200">Name</th>
              <th className="p-3 w-52">Email</th>
              <th className="p-3 w-52">Phone</th>
              <th className="p-3 w-52">City</th>
              <th className="p-3 w-52">Address</th>
              <th className="p-3 w-52">Contact</th>
              <th className="p-3 w-52"> Stage</th>
              <th className="p-3 w-52">Type</th>
              <th className="p-3 w-52">Contructor</th>
              <th className="p-3 w-52">Additional Info</th>
              <th className="p-3 w-52">Photos</th>
              <th className="p-3 w-30">CTA</th>
            </tr>
          </thead>
          <>
            {currentInquiry.map(({ attributes, id }: Inquiriy) => {
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
                      <td className="flex">
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

        <div className="flex items-center justify-center">
          <Pagination
            inquiriesPerPage={InquiryPerPage}
            totalInquiries={inquiries.length}
            paginate={paginate}
            next={Next}
            prev={Prev}
            currentPage={currentPage}
          />
        </div>
      </div>
    </>
  )
}

export default AdministrationPanel
