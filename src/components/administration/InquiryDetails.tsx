import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import { Inquiriy } from "../../types/FormData"
import {
  ArrowUturnLeftIcon,
  FolderArrowDownIcon,
} from "@heroicons/react/24/outline"
import apiService from "../../services/apiServices"
const InquiryDetails: React.FC = () => {
  const { id } = useParams()

  const [inquiryDetails, setInquiryDetails] = useState<Inquiriy | null>(null)

  //Backend nie przesyła photos w przypadku api/inqiries/id
  //gdy przełacze url na /api/inquiries?populate=* wtedy przy fetchu dostaje array photosow z backenud

  const backendUrl = "https://strapi-km.herokuapp.com"

  useEffect(() => {
    const fun = async () => {
      try {
        const response = await apiService.get(`/api/inquiries/${id}`)
        console.log(response.data)
        const detailsData = response.data
        setInquiryDetails(detailsData.data)
        console.log(detailsData.data)
      } catch (error) {
        console.error("Error when fetching inquiry details:", error)
      }
    }
    fun()
  }, [])

  return (
    <>
      <div className="flex justify-between mx-10 mt-10">
        <button
          onClick={(e) => (window.location.href = "/admin")}
          className="px-2 text-indigo-900 cursor-pointer transition-all hover:bg-indigo-900 hover:text-white transform border border-gray-300"
        >
          <ArrowUturnLeftIcon className="h-5 w-5" />
        </button>
        <div className="text-xl  text-indigo-900">ID: {id}</div>
      </div>
      {inquiryDetails !== null && (
        <div className="grid grid-cols-2 px-10 mt-5 gap-10">
          <div>
            <div className="font-thin p-3 pl-5 border border-1 border-gray-700">
              {inquiryDetails.attributes.name}
            </div>
            <div
              onClick={() =>
                (window.location.href = `mailto:${inquiryDetails.attributes.email}`)
              }
              className="font-thin text-sm p-3 transition-all transform cursor-pointer hover:text-indigo-300 underline underline-offset-4 decoration-indigo-800 mt-2 pl-5 border border-1 border-gray-700"
            >
              {inquiryDetails.attributes.email}
            </div>
            <div className=" mt-2 text-sm p-1 pl-5 font-thin border border-1 border-gray-700">
              123123123
              {inquiryDetails.attributes.phone}
            </div>
            <div>
              {inquiryDetails.attributes.city === "" ? (
                <div className="mt-2  text-sm p-1 pl-5  text-gray-400 font-thin border border-1 border-gray-700">
                  No data submitted
                </div>
              ) : (
                <div className=" text-sm p-1 mt-2  pl-5 font-thin border border-1 border-gray-700">
                  {inquiryDetails.attributes.city}
                </div>
              )}
            </div>
            <div>
              {inquiryDetails.attributes.address === "" ? (
                <div className="mt-2  text-sm p-1  pl-5  text-gray-400 font-thin border border-1 border-gray-700">
                  No data submitted
                </div>
              ) : (
                <div className=" text-sm p-1  mt-2  pl-5 font-thin border border-1 border-gray-700">
                  {inquiryDetails.attributes.address}
                </div>
              )}
            </div>
            <div>
              {inquiryDetails.attributes.contact_preference !== undefined ? (
                <div className="mt-2  text-sm p-1  pl-5  text-gray-400 font-thin border border-1 border-gray-700">
                  No data submitted
                </div>
              ) : (
                <div className=" text-sm p-1  mt-2  pl-5 font-thin border border-1 border-gray-700">
                  {inquiryDetails.attributes.contact_preference}
                </div>
              )}
            </div>
            <div>
              {inquiryDetails.attributes.project_type === "" ? (
                <div className="mt-2  text-sm p-1  pl-5  text-gray-400 font-thin border border-1 border-gray-700">
                  No data submitted
                </div>
              ) : (
                <div className=" text-sm p-1  mt-2  pl-5 font-thin border border-1 border-gray-700">
                  {inquiryDetails.attributes.project_type}
                </div>
              )}
            </div>
            <div>
              {inquiryDetails.attributes.project_level === "" ? (
                <div className="mt-2  text-sm p-1  pl-5  text-gray-400 font-thin border border-1 border-gray-700">
                  No data submitted
                </div>
              ) : (
                <div className=" text-sm p-1  mt-2 pl-5  font-thin border border-1 border-gray-700">
                  {inquiryDetails.attributes.project_level}
                </div>
              )}
            </div>
            <div>
              {inquiryDetails.attributes.additional_info === "" ? (
                <div className="mt-2 p-1 pl-5  text-gray-400 font-thin border border-1 border-gray-700">
                  No data submitted
                </div>
              ) : (
                <div className="p-2 mt-2 px-5  font-thin border border-1 border-gray-700">
                  {inquiryDetails.attributes.additional_info}
                </div>
              )}
            </div>
          </div>
          <div className="border border-gray-700 h-full w-full">
            {inquiryDetails.attributes.photos?.data?.map(
              (photo: any, id: number) => {
                return (
                  <div>
                    <img
                      key={id}
                      src={`${backendUrl}${photo.attributes.url}`}
                      alt=""
                    />
                  </div>
                )
              }
            )}
            <div className="p-5 font-light">
              Display photos <br />
              Area prepared to dispaly subbmited photos from backend. <br />
              There is a issue with get request photo/ id. <br />
              After resolving problem from backend side photos will be displayed
              and possible to download.
              <br />
              <br />
            </div>
          </div>
        </div>
      )}
      <div className="flex justify-end px-10 mt-5 w-full">
        <button className=" px-2 py-1 text-indigo-900 cursor-pointer transition-all hover:bg-indigo-900 hover:text-white transform border border-gray-300">
          <FolderArrowDownIcon className="h-6 w-14" />
        </button>
      </div>
    </>
  )
}
export default InquiryDetails
