import { useFormContext } from "react-hook-form"

const NameInput: React.FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <>
      <div className="input">
        <input
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
