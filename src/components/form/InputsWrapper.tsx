import ConstructorInput from "./inputs/ConstructorInput"
import DescriptionInput from "./inputs/DescriptionInput"
import FilesUpload from "./inputs/FilesUpload"
import FormOfContact from "./inputs/FormOfContactInput"
import BasicInputs from "./inputs/BasicInput"

const InputsWrapper: React.FC = () => {
  return (
    <div className="sm:grid sm:grid-cols-2 sm:gap-5 h-full sm:mt-10 sm:mx-10 mx-5 ">
      <div>
        <BasicInputs
          placeholder="Name"
          title="name"
          type="text"
          required={true}
        />
        <BasicInputs
          placeholder="Mail"
          title="email"
          type="email"
          required={true}
          pattern={/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i}
        />
        <BasicInputs
          placeholder="Phone Number"
          title="phone"
          type="text"
          required={true}
          minLenght={9}
          maxLength={9}
        />
        <BasicInputs placeholder="City" title="city" type="text" />
        <BasicInputs placeholder="Project Adress" title="address" type="text" />
        <FormOfContact />
        <FilesUpload />
      </div>
      <div>
        <BasicInputs
          placeholder="Project Type"
          title="project_type"
          type="text"
        />
        <BasicInputs
          placeholder="Project Stage"
          title="project_level"
          type="text"
        />
        <ConstructorInput />
        <DescriptionInput />
      </div>
    </div>
  )
}

export default InputsWrapper
