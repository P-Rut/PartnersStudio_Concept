import { useFormContext } from "react-hook-form"

const MailInput: React.FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext()
  return (
    <div className="input">
      <input
        className="m-5 py-2 pl-7  text-gray-900 ring-2 ring-inset ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
        type="text"
        placeholder="Email"
        {...register("email", {
          required: true,
          pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        })}
      />
      <div>
        {errors.email?.type === "required" && (
          <>
            <span style={{ color: "red" }}>Email field is required</span>
          </>
        )}
        {errors.email?.type === "pattern" && (
          <span style={{ color: "red" }}> Invalid Email Adress</span>
        )}
      </div>
    </div>
  )
}

export default MailInput
