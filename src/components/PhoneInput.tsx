import { useFormContext } from "react-hook-form"

const PhoneInput: React.FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext()
  return (
    <div className="input">
      <input
        className="m-5 py-2 pl-7  text-gray-900 ring-2 ring-inset ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
        type="text"
        placeholder="Phone Number"
        {...register("phone", { required: true, maxLength: 9 })}
      />
      <div>
        {errors.phone?.type === "required" && (
          <span style={{ color: "red" }}>Phone Number field is required</span>
        )}
        {errors.phone?.type === "maxLength" && (
          <span style={{ color: "red" }}>
            Phone Number can only have 9 digits. Please don't input your country
            call prefix.
          </span>
        )}
      </div>
    </div>
  )
}

export default PhoneInput
