import { useFormContext } from "react-hook-form"

const NameInput: React.FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <>
      <div className="input-group">
        <input
          className="m-5 py-2 pl-7  text-gray-900 ring-2 ring-inset ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
          type="text"
          placeholder="Name"
          {...register("name", {
            required: true,
          })}
        />
        <div>
          {errors.name?.type === "required" && (
            <span style={{ color: "red" }}>Name field is required</span>
          )}
        </div>
      </div>
    </>
  )
}
export default NameInput
