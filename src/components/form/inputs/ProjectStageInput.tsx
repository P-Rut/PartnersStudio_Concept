import { useFormContext } from "react-hook-form"

const ProjectStageInput: React.FC = () => {
  const { register } = useFormContext()
  return (
    <div className="mb-5">
      <input
        className=" py-2 pl-7 w-full text-gray-900 text-xl ring-inset ring-black placeholder:text-black placeholder: font-thin focus:ring-2 focus:ring-inset focus:ring-indigo-600"
        type="text"
        placeholder="Project Stage"
        {...register("project_stage", { required: false })}
      />
    </div>
  )
}

export default ProjectStageInput
