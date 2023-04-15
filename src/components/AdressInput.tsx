import { useFormContext } from "react-hook-form"

const AdressInput: React.FC = () => {
  const { register } = useFormContext()
  return (
    <div className="input">
      <input
        type="text"
        placeholder="Project Adress"
        {...register("adress", { required: false })}
      />
    </div>
  )
}

export default AdressInput
