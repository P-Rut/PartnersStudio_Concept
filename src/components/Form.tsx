import { useForm, FormProvider } from "react-hook-form"
import InputsWrapper from "./InputsWrapper"

interface FormData {
  name: string
  email: string
  phone: string
  city: string
  adress: string
  form_of_contact: string[]
  project_type: string
  project_level: string
  constructor: string
  descirption: string
}
const defaultData = {
  name: "",
  email: "",
  phone: "",
  city: "",
  adress: "",
  form_of_contact: [],
  project_type: "",
  project_stage: "",
  constructor: "",
  descirption: "",
}

const Form: React.FC = () => {
  const FormMethods = useForm<FormData>({ defaultValues: defaultData })

  const { handleSubmit, reset } = FormMethods

  const onFormSubmit = (data: FormData) => {
    console.log("data", data)
  }

  //   const name = watch("name")
  //   const email = watch("email")
  //   const phone = watch("phone")
  //   const city = watch("city")
  //   const adress = watch("adress")

  return (
    <>
      <FormProvider {...FormMethods}>
        <form onSubmit={handleSubmit(onFormSubmit)}>
          <div className="form">
            <InputsWrapper />
            <div className="mx-5">
              <button
                className="bg-indigo-800 tracking-widest text-2xl border border-black text-gray-50 p-2 w-full hover:bg-gray-400"
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
