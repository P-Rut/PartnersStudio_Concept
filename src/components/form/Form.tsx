import { useForm, FormProvider } from "react-hook-form"
import InputsWrapper from "./InputsWrapper"
import Navbar from "../Navbar"
import ChoosePackage from "../ChoosePackage"
//@ts-ignore
import { Packages } from "../../types"
import axios from "axios"

interface FormData {
  name: string
  email: string
  phone: string
  city: string
  address: string
  contact_preference: string[]
  photos: Array<string | Blob>
  project_type: string
  project_level: string
  additional_info: string
  contractor: boolean
  package: Packages | undefined
}

type InquiryPayload = Omit<FormData, "photos"> & { photos: number[] }

const defaultData = {
  name: "",
  email: "",
  phone: "",
  city: "",
  address: "",
  contact_preference: [],
  photos: undefined,
  project_type: "",
  project_stage: "",
  additional_info: "",
  contractor: undefined,
  package: undefined,
}

// { phone: true, online_meeting: false} as Record<string, boolean>

const Form: React.FC = () => {
  const FormMethods = useForm<FormData>({ defaultValues: defaultData })

  const { handleSubmit } = FormMethods

  const onFormSubmit = async (data: FormData) => {
    const token =
      "40c08a534448a91544103e934fad533513a6785a07d8a9773f4a3754e8decf6dd1190804437971b58854a3847c9c2614e90231e3392288fb14e8372411bebbdb74df58c4708f0065b0d600488bb6327187c910a9a80d2f2976c3910e7f571f597bbd12a760f4e0d8e7677c9bc95557505ad9ce42ab15cb13ab95fbbbfa1bddf1"
    let formData = new FormData()
    Object.values(data.photos).forEach((photo: string | Blob) =>
      formData.append("files", photo)
    )

    try {
      const res = await axios({
        method: "POST",
        url: "https://strapi-km.herokuapp.com/api/upload",
        data: formData,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      const photoIds: number[] = res.data.map((e: { id: number }) => e.id)
      let dataCopy: InquiryPayload = { ...data, photos: photoIds }

      const response = await axios({
        method: "POST",
        url: "https://strapi-km.herokuapp.com/api/inquiries",
        data: { data: dataCopy },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      console.log("Inquiry", response.data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className="bg-gray-50">
        <Navbar />
        <FormProvider {...FormMethods}>
          <form onSubmit={handleSubmit(onFormSubmit)}>
            <div>
              <ChoosePackage />
              <InputsWrapper />
              <div className="mx-10">
                <button
                  className="transition-colors duration-300 w-full mb-5 tracking-widest text-2xl border border-black text-gray-50 p-2 hover:bg-indigo-100 hover:text-indigo-900 bg-indigo-800"
                  type="submit"
                >
                  SUBMIT
                </button>
              </div>
            </div>
          </form>
        </FormProvider>
      </div>
    </>
  )
}

export default Form
