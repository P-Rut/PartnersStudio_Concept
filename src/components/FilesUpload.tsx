const FilesUpload: React.FC = () => {
  return (
    <div className="border-solid border m-5 w-6/12 border-black bg-white">
      <label
        className="block text-xl font-thin ml-7 mt-5 mb-2 "
        htmlFor="files_upload"
      >
        Please upload project drawings or photos ↓
      </label>
      <div className="m-5 border-dashed border border-gray-400 py-5 flex flex-col justify-center items-center">
        <input type="file" className="font-thin text-sm" />
      </div>
    </div>
  )
}

export default FilesUpload

// <input id="hidden-input" type="file" multiple className="hidden" />
//             <button className="ml-2 mt-2 px-3 py-1 text-gray-50 bg-indigo-800 hover:bg-gray-300 focus:shadow-outline focus:outline-none">
//               upload a file
//             </button>
