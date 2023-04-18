import { useFormContext } from "react-hook-form"

const CityInput: React.FC = () => {
  const { register } = useFormContext()
  return (
    <div className="mb-5">
      <input
        className="w-full py-2 pl-7  text-gray-900 text-xl ring-1 ring-inset ring-black placeholder:text-black placeholder: font-thin focus:ring-2 focus:ring-inset focus:ring-indigo-600"
        type="text"
        placeholder="City"
        {...register("city", { required: false })}
      />
    </div>
  )
}

export default CityInput
