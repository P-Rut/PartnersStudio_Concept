import { useFormContext } from "react-hook-form"

const MailInput: React.FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext()
  return (
    <div className="input">
      <input
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
