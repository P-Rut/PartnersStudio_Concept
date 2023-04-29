import ConstructorInput from "./inputs/ConstructorInput"
import DescriptionInput from "./inputs/DescriptionInput"
import FilesUpload from "./inputs/FilesUpload"
import FormOfContact from "./inputs/FormOfContactInput"
import BasicInputs from "./inputs/BasicInput"

const InputsWrapper: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-5 mx-10 bg-gray-50">
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
          title="project_stage"
          type="text"
        />
        <ConstructorInput />
        <DescriptionInput />
      </div>
    </div>
  )
}

export default InputsWrapper
