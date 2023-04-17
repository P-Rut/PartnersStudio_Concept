import { useFormContext } from "react-hook-form"

const NameInput: React.FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <>
      <div className="mt-5 mb-5">
        <input
          className="ml-5 py-2 pl-7 w-6/12 text-gray-900 text-xl ring-1 ring-inset ring-black placeholder:text-black placeholder: font-thin focus:ring-2 focus:ring-inset focus:ring-indigo-600"
          type="text"
          placeholder="Name"
          {...register("name", {
            required: true,
          })}
        />
        <div>
          {errors.name?.type === "required" && (
            <span className="text-red-500 font-light">
              Name field is required
            </span>
          )}
        </div>
      </div>
    </>
  )
}
export default NameInput
