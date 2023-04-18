import AdressInput from "./AdressInput"
import CityInput from "./CityInput"
import ConstructorInput from "./ConstructorInput"
import DescriptionInput from "./DescriptionInput"
import FilesUpload from "./FilesUpload"
import FormOfContact from "./FormOfContactInput"
import MailInput from "./MailInput"
import NameInput from "./NameInput"
import PhoneInput from "./PhoneInput"
import ProjectStageInput from "./ProjectStageInput"
import ProjectTypeInput from "./ProjectTypeInput"

const InputsWrapper: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-5 mx-28 mt-8">
      <div>
        <NameInput />
        <MailInput />
        <PhoneInput />
        <CityInput />
        <AdressInput />
        <FormOfContact />
        <FilesUpload />
      </div>
      <div>
        <ProjectTypeInput />
        <ProjectStageInput />
        <ConstructorInput />
        <DescriptionInput />
      </div>
    </div>
  )
}

export default InputsWrapper
