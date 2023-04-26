import { useForm, FormProvider } from "react-hook-form"
import InputsWrapper from "./InputsWrapper"
import Navbar from "../Navbar"
import ChoosePackage from "../ChoosePackage"
import axios from "axios"
import { Packages } from "../../types"

interface FormData {
  name: string
  email: string
  phone: string
  city: string
  adress: string
  form_of_contact: string[]
  project_files: {
    url: string
    name: string
  }
  project_type: string
  project_level: string
  description: string
  construction: string[]
  package: Packages | undefined
}
const defaultData = {
  name: "",
  email: "",
  phone: "",
  city: "",
  adress: "",
  form_of_contact: [],
  project_files: {
    url: "",
    name: "",
  },
  project_type: "",
  project_stage: "",
  description: "",
  construction: [],
  package: undefined,
}

const Form: React.FC = () => {
  const FormMethods = useForm<FormData>({ defaultValues: defaultData })

  const { handleSubmit } = FormMethods

  const onFormSubmit = (data: FormData) => {
    console.log("Form Data", data)
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
