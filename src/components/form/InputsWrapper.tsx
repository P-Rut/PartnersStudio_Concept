import AdressInput from "./inputs/AdressInput"
import CityInput from "./inputs/CityInput"
import ConstructorInput from "./inputs/ConstructorInput"
import DescriptionInput from "./inputs/DescriptionInput"
import FilesUpload from "./inputs/FilesUpload"
import FormOfContact from "./inputs/FormOfContactInput"
import MailInput from "./inputs/MailInput"
import NameInput from "./inputs/NameInput"
import PhoneInput from "./inputs/PhoneInput"
import ProjectStageInput from "./inputs/ProjectStageInput"
import ProjectTypeInput from "./inputs/ProjectTypeInput"

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
