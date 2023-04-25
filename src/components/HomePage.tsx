import Navbar from "./Navbar"
import hero_logo from "../assets/Hero_Logo.png"
import AboutUs from "./AboutUs"
import HowItWorks from "./HowItWorks"
import ProjectsCarousel from "./ProjectsCarousel"

const HomePage: React.FC = () => {
  const background = {
    backgroundImage:
      "url('https://images.unsplash.com/photo-1632583824020-937ae9564495?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=958&q=80')",
  }

  return (
    <>
      <Navbar />
      <div className="h-[850px]">
        <div className="bg-cover bg-center h-full w-auto" style={background}>
          <div className="h-full w-full flex justify-center items-center bg-black/30">
            <img src={hero_logo} className="h-28" alt="Logo" />
          </div>
        </div>
      </div>
      <AboutUs />
      <HowItWorks />
      <ProjectsCarousel />
    </>
  )
}

export default HomePage
