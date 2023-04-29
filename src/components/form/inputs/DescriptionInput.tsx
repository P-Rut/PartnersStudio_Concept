import { useFormContext } from "react-hook-form"

const DescriptionInput: React.FC = () => {
  const { register } = useFormContext()

  return (
    <div className=" px-7 py-2 border-solid border mb-5 w-full border-black bg-gray-50">
      <textarea
        {...register("additional_info")}
        className="bg-gray-50 block h-full w-full rounded-none border-none  text-black text-xl font-thin placeholder:text-black "
        id="description"
        rows={6}
        placeholder="Don't see what you want ? &#10;
        Describe your project and how may we help you here:
        "
      ></textarea>
    </div>
  )
}

export default DescriptionInput
