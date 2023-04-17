import { useFormContext } from "react-hook-form"

const AdressInput: React.FC = () => {
  const { register } = useFormContext()
  return (
    <div className="input">
      <input
        className="m-5 py-2 pl-7  text-gray-900 ring-2 ring-inset ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
        type="text"
        placeholder="Project Adress"
        {...register("adress", { required: false })}
      />
    </div>
  )
}

export default AdressInput
