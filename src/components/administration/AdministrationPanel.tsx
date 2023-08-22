import React from "react"
import axios from "axios"
import Navbar from "../Navbar"
import { useState, useEffect } from "react"
import { Inquiriy } from "../../types/FormData"
import Pagination from "./Pagination"
import Inquiry from "./Inquiry"
import InquiriesTable from "./InquiriesTable"
import Spinner from "../../assets/spin.gif"
import apiService from "../../services/apiServices.js"

function AdministrationPanel() {
  const [inquiries, setInquiries] = useState<Inquiriy[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const InquiryPerPage = 5
  const indexOfLastInquiry = currentPage * InquiryPerPage
  const indexOfFirstInquiry = indexOfLastInquiry - InquiryPerPage
  const currentInquiry = inquiries.slice(
    indexOfFirstInquiry,
    indexOfLastInquiry
  )

  //Download Inquiry
  useEffect(() => {
    const fun = async () => {
      setIsLoading(true)
      const response = await apiService.get("/api/inquiries?populate=*")

      setIsLoading(false)
      const InquiriesData = response.data
      setInquiries(InquiriesData.data)
      console.log(InquiriesData.data)
    }
    fun()
  }, [])

  //Delete Inquiry

  const deleteInquiry = async (id: any) => {
    if (
      window.confirm("Are you sure you want to delete this client enquiry ?")
    ) {
      apiService
        .delete(`/api/inquiries/${id}`)
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

  //Pagination

  const paginate = (InquiryNumber: any) => setCurrentPage(InquiryNumber)
  function Next() {
    currentPage < inquiries.length && setCurrentPage(currentPage + 1)
  }
  function Prev() {
    currentPage > 1 && setCurrentPage(currentPage - 1)
  }

  return isLoading ? (
    <div className="flex justify-center items-center h-screen">
      <div className="h-2/3">
        <img className=" h-52" src={Spinner} alt="Loading..." />
      </div>
    </div>
  ) : (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-12 h-screen">
        <table className="table-fixed border w-full">
          <InquiriesTable />
          <tbody>
            {currentInquiry.map(({ attributes, id }: Inquiriy) => {
              return (
                <React.Fragment key={id}>
                  <Inquiry
                    item={attributes}
                    id={id}
                    deleteInquiry={deleteInquiry}
                  />
                </React.Fragment>
              )
            })}
          </tbody>
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
    </div>
  )
}

export default AdministrationPanel
