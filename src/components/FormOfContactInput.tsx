import { useFormContext } from "react-hook-form"

const FormOfContact: React.FC = () => {
  const { register } = useFormContext()
  return (
    <div className="input">
      <label className="checkbox">
        <input type="checkbox" disabled />
        Online Metting
      </label>
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
