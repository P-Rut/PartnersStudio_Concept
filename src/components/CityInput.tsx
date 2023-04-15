import { useFormContext } from "react-hook-form"

const CityInput: React.FC = () => {
  const { register } = useFormContext()
  return (
    <div className="input">
      <input
        type="text"
        placeholder="City"
        {...register("city", { required: false })}
      />
    </div>
  )
}

export default CityInput
