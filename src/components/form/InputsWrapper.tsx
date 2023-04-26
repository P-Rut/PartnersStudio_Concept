import ConstructorInput from "./inputs/ConstructorInput"
import DescriptionInput from "./inputs/DescriptionInput"
import FilesUpload from "./inputs/FilesUpload"
import FormOfContact from "./inputs/FormOfContactInput"
import MailInput from "./inputs/MailInput"
import NameInput from "./inputs/NameInput"
import PhoneInput from "./inputs/PhoneInput"
import ProjectStageInput from "./inputs/ProjectStageInput"

import BasicInputs from "./inputs/BasicInputs"

const InputsWrapper: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-5 mx-10">
      <div>
        {/* <NameInput /> */}
        <BasicInputs
          placeholder="Name"
          title="name"
          type="text"
          required={true}
        />
        {/* <MailInput /> */}
        <BasicInputs
          placeholder="mail"
          title="mail"
          type="text"
          required={true}
          pattern={/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i}
        />
        <PhoneInput />
        {/* <CityInput /> */}
        <BasicInputs
          placeholder="City"
          title="city"
          type="text"
          required={false}
        />
        {/* <AdressInput /> */}
        <BasicInputs
          placeholder="Project Adress"
          title="adress"
          type="text"
          required={false}
        />
        <FormOfContact />
        <FilesUpload />
      </div>
      <div>
        {/* <ProjectTypeInput /> */}
        <BasicInputs
          placeholder="Project Type"
          title="project_type"
          type="text"
          required={false}
        />
        <ProjectStageInput />
        <ConstructorInput />
        <DescriptionInput />
      </div>
    </div>
  )
}

export default InputsWrapper
