import { useFormContext } from "react-hook-form"

interface BasicInputProps {
  placeholder: string
  title: string
  type: string
  required?: boolean
  pattern?: RegExp
}

const BasicInputs: React.FC<BasicInputProps> = ({
  title,
  type,
  required,
  placeholder,
  pattern,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext()
  return (
    <div className="mb-5">
      <input
        className="py-2 pl-7 w-full text-gray-900 text-xl ring-inset ring-black placeholder:text-black placeholder: font-thin focus:ring-2 focus:ring-inset focus:ring-indigo-600"
        type={type}
        placeholder={placeholder}
        {...register(title, { required: required, pattern: pattern })}
      />
      <div>
        {errors[title]?.type === "required" && (
          <>
            <span className="ml-5 text-red-500 font-light ">
              {placeholder} is required
            </span>
          </>
        )}
        {errors[title]?.type === "pattern" && (
          <>
            <span className="ml-5 text-red-500 font-light ">Invalid Value</span>
          </>
        )}
        <div />
      </div>
    </div>
  )
}

export default BasicInputs
