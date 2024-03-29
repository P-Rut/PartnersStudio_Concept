import { useFormContext } from "react-hook-form"

const DescriptionInput: React.FC = () => {
  const { register } = useFormContext()

  return (
    <div className=" px-7 py-2 border-solid border mb-5 w-full border-black">
      <textarea
        {...register("additional_info")}
        className=" block h-full w-full rounded-none border-none tracking-tight sm:tracking-normal  text-black text-xl font-thin placeholder:text-black "
        id="description"
        rows={6}
        placeholder="If you need provide more infofrmation. &#10;
        Describe your project and how may we help you here:
        "
      ></textarea>
    </div>
  )
}

export default DescriptionInput
