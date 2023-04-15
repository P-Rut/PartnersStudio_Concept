import { useFormContext } from "react-hook-form"

const FormOfContact: React.FC = () => {
  const { register } = useFormContext()
  return (
    <div className="input">
      <input type="checkbox" />
      <p>Online Metting</p>
      <input type="checkbox" />
      <p>Phone Call</p>
      <input type="checkbox" />
      <p>Local Metting</p>
      <input type="checkbox" />
      <p>Email</p>
    </div>
  )
}

export default FormOfContact
