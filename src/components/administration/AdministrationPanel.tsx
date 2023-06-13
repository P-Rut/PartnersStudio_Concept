import axios from "axios"
import Navbar from "../Navbar"
import { useState, useEffect } from "react"
import { Inquiriy } from "../../types/FormData"
import Pagination from "./Pagination"
import Inquiry from "./Inquiry"
import InquiriesTable from "./InquiriesTable"

function AdministrationPanel() {
  const [inquiries, setInquiries] = useState<Inquiriy[]>([])
  const getUrl = `${process.env.REACT_APP_URL}/api/inquiries?populate=*`
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
  })

  //Delete Inquiry

  const deleteInquiry = async (id: any) => {
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

  //Pagination

  const paginate = (InquiryNumber: any) => setCurrentPage(InquiryNumber)
  function Next() {
    currentPage < inquiries.length && setCurrentPage(currentPage + 1)
  }
  function Prev() {
    currentPage > 1 && setCurrentPage(currentPage - 1)
  }

  return (
    <>
      <Navbar />
      <div className="pt-12 h-screen">
        <table className=" table-fixed border">
          <InquiriesTable />
          <>
            {currentInquiry.map(({ attributes, id }: Inquiriy) => {
              return (
                <>
                  <Inquiry
                    item={attributes}
                    id={id}
                    deleteInquiry={deleteInquiry}
                  />
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
