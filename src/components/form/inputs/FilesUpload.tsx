import { useFormContext } from "react-hook-form"

const FilesUpload: React.FC = () => {
  const { register } = useFormContext()
  return (
    <div className="border-solid border mb-5 w-full border-black bg-white">
      <label
        className="block text-xl font-thin ml-7 mt-5 mb-2 "
        htmlFor="files_upload"
      >
        Please upload project drawings or photos ↓
      </label>
      <div className=" border-gray-400 py-5 flex flex-col justify-center items-center">
        <input
          {...register("project_files")}
          type="file"
          className="font-thin text-sm"
          multiple
        />
      </div>
    </div>
  )
}

export default FilesUpload

// <input id="hidden-input" type="file" multiple className="hidden" />
//             <button className="ml-2 mt-2 px-3 py-1 text-gray-50 bg-indigo-800 hover:bg-gray-300 focus:shadow-outline focus:outline-none">
//               upload a file
//             </button>