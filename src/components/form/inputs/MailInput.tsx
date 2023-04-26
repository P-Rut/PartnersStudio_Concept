import { useFormContext } from "react-hook-form"

const MailInput: React.FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext()
  return (
    <div className="mb-5">
      <input
        className="w-full  py-2 pl-7 text-gray-900 text-xl  ring-inset ring-black placeholder:text-black placeholder: font-thin focus:ring-2 focus:ring-inset focus:ring-indigo-800"
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
            <span className="ml-5 text-red-500 font-light ">
              Email field is required
            </span>
          </>
        )}
        {errors.email?.type === "pattern" && (
          <span className="ml-5 text-red-500 font-light ">
            Invalid Email Adress
          </span>
        )}
      </div>
    </div>
  )
}

export default MailInput
