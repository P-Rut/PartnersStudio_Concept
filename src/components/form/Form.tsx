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
  photos: {
    url: string
    name: string
  }
  project_type: string
  project_level: string
  additional_info: string
  construction: string[]
  package: Packages | undefined
}
const defaultData = {
  name: "",
  email: "",
  phone: "",
  city: "",
  address: "",
  contact_preference: [],
  photos: {
    url: "",
    name: "",
  },
  project_type: "",
  project_stage: "",
  additional_info: "",
  contractor: [],
  package: undefined,
}

const Form: React.FC = () => {
  const FormMethods = useForm<FormData>({ defaultValues: defaultData })

  const { handleSubmit } = FormMethods

  const onFormSubmit = async (data: FormData) => {
    console.log(data)
    try {
      const response = await axios.post(
        "https://strapi-km.herokuapp.com/api/inquiries"
      )
      console.log(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <Navbar />
      <FormProvider {...FormMethods}>
        <form onSubmit={handleSubmit(onFormSubmit)}>
          <div>
            <ChoosePackage />
            <InputsWrapper />
            <div className="mx-10">
              <button
                className="w-full mb-5 tracking-widest text-2xl border border-black text-gray-50 p-2 hover:bg-indigo-100 hover:text-indigo-900 bg-indigo-800"
                type="submit"
              >
                SUBMIT
              </button>
            </div>
          </div>
        </form>
      </FormProvider>
    </>
  )
}

export default Form
