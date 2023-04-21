import hero_logo from "../assets/Hero_Logo.png"
import AboutUs from "./AboutUs"
import HowItWorks from "./HowItWorks"

const HomePage: React.FC = () => {
  const background = {
    backgroundImage:
      "url('https://images.unsplash.com/photo-1632583824020-937ae9564495?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=958&q=80')",
  }

  return (
    <>
      <div className="h-screen">
        <div className="bg-cover bg-center h-full w-auto" style={background}>
          <div className="h-screen w-screen flex justify-center items-center bg-black/30">
            <img src={hero_logo} className="h-28" alt="Logo" />
          </div>
        </div>
      </div>
      <AboutUs />
      <HowItWorks />
    </>
  )
}

export default HomePage
