import { useForm, FormProvider } from "react-hook-form"
import InputsWrapper from "./InputsWrapper"

interface FormData {
  name: string
  email: string
  phone: string
  city: string
  adress: string
  form_of_contact: string[]
}
const defaultData = {
  name: "",
  email: "",
  phone: "",
  city: "",
  adress: "",
  form_of_contact: [],
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
            <button className="submit" type="submit">
              Submit
            </button>
          </div>
        </form>
      </FormProvider>
    </>
  )
}

export default Form
