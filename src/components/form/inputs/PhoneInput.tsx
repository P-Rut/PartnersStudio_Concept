import { useFormContext } from "react-hook-form"

const PhoneInput: React.FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext()
  return (
    <div className="mb-5">
      <input
        className="w-full py-2 pl-7  text-gray-900 text-xl ring-inset ring-black placeholder:text-black placeholder: font-thin focus:ring-2 focus:ring-inset focus:ring-indigo-600"
        type="text"
        placeholder="Phone Number"
        {...register("phone", { required: true, maxLength: 9, minLength: 9 })}
      />
      <div>
        {errors.phone?.type === "required" && (
          <span className="ml-5 text-red-500 font-light">
            Phone Number field is required
          </span>
        )}
        {errors.phone?.type === "maxLength" && (
          <span className="ml-5 text-red-500 font-light">
            Phone number can only have 9 digits. <br />
            Please don't input your country call prefix.
          </span>
        )}
        {errors.phone?.type === "minLength" && (
          <span className="ml-5 text-red-500 font-light">
            Phone number consists minimum 9 digits
          </span>
        )}
      </div>
    </div>
  )
}

export default PhoneInput
