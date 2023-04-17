import { useFormContext } from "react-hook-form"

const ConstructorInput: React.FC = () => {
  const { register } = useFormContext()
  return (
    <div className=" mb-5">
      <input
        className="ml-5 py-2 pl-7 w-6/12 text-gray-900 text-xl ring-1 ring-inset ring-black placeholder:text-black placeholder: font-thin focus:ring-2 focus:ring-inset focus:ring-indigo-600"
        type="text"
        placeholder="Do you intend to work with constructor ?"
        {...register("constructor", { required: false })}
      />
    </div>
  )
}

export default ConstructorInput
