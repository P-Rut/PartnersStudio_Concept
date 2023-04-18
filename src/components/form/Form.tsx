import { useForm, FormProvider } from "react-hook-form"
import InputsWrapper from "./InputsWrapper"
import Navbar from "../Navbar"

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
  construction: string
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
  construction: "",
}

const Form: React.FC = () => {
  const FormMethods = useForm<FormData>({ defaultValues: defaultData })

  const { handleSubmit, reset } = FormMethods

  const onFormSubmit = (data: FormData) => {
    console.log("Form Data", data)
  }

  //   const name = watch("name")
  //   const email = watch("email")
  //   const phone = watch("phone")
  //   const city = watch("city")
  //   const adress = watch("adress")

  return (
    <>
      <Navbar />
      <FormProvider {...FormMethods}>
        <form onSubmit={handleSubmit(onFormSubmit)}>
          <div className="">
            <InputsWrapper />
            <div className="mx-28">
              <button
                className="w-full mb-5 tracking-widest text-2xl border border-black text-gray-50 p-2 hover:bg-gray-400 bg-indigo-800"
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
