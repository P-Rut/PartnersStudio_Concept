import { useFormContext } from "react-hook-form"

const FormOfContact: React.FC = () => {
  const { register } = useFormContext()
  return (
    <div className="border-solid border w-full mb-5 border-black bg-white">
      <h1 className="text-xl font-thin ml-7 mt-2">
        Best way for you to meet with us ?
      </h1>

      {/* CHECKBOXY */}
      <div className="columns-2 gap-0 ml-7 mt-3">
        <div className="flex items-center">
          <input
            {...register("form_of_contact")}
            id="checkbox"
            type="checkbox"
            value="Online Meeting"
            className="w-5 h-5 "
          />
          <label
            htmlFor="checkbox"
            className="ml-2 text-m font-thin  text-gray-900"
          >
            Online Metting
          </label>
        </div>

        <div className="flex items-center mt-3 mb-2">
          <input
            {...register("form_of_contact")}
            id="checkbox"
            type="checkbox"
            value="Phone Call"
            className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-600 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 "
          />
          <label htmlFor="checkbox" className="ml-2 font-thin  text-gray-900">
            Phone Call
          </label>
        </div>
        <div className="flex items-center">
          <input
            {...register("form_of_contact")}
            id="checkbox"
            type="checkbox"
            value="Office Meeting"
            className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-600 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 "
          />
          <label htmlFor="checkbox" className="ml-2 font-thin  text-gray-900">
            Office Metting
          </label>
        </div>
        <div className="flex items-center mt-3 mb-2">
          <input
            {...register("form_of_contact")}
            id="checkbox"
            type="checkbox"
            value="Email"
            className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-600 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 "
          />
          <label htmlFor="checkbox" className="ml-2 font-thin  text-gray-900">
            Email
          </label>
        </div>
      </div>
    </div>
  )
}

export default FormOfContact
