import AdressInput from "./AdressInput"
import CityInput from "./CityInput"
import FormOfContact from "./FormOfContactInput"
import MailInput from "./MailInput"
import NameInput from "./NameInput"
import PhoneInput from "./PhoneInput"

const InputsWrapper: React.FC = () => {
  return (
    <div className="inputs">
      <NameInput />
      <MailInput />
      <PhoneInput />
      <CityInput />
      <AdressInput />
      <FormOfContact />
    </div>
  )
}

export default InputsWrapper
