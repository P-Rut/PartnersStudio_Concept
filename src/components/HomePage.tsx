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
      <div className="h-[750px]">
        <div className="bg-cover bg-center h-full w-auto" style={background}>
          <div className="h-full w-full flex justify-center items-center bg-black/30">
            <img src={hero_logo} className="h-28" alt="Logo" />
          </div>
        </div>
      </div>
      <AboutUs
        textClassName="text-5xl tracking-tight font-light leading-tight mr-10"
        titleText="We aim to simplify whole process of architectural design.
        From interior to exterior with us it’s always the easiest way."
        buttonTitle="More about us"
        imgUrl="https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
      />
      <HowItWorks />
      <ProjectsCarousel />
      <AboutUs
        textClassName="text-4xl tracking-tight font-light leading-snug mr-20"
        titleText="Our architectural studio is fueled by a team of passionate and skilled professionals who share a common goal of achieving nothing less than excellence in every project they undertake."
        buttonTitle="Meet our team"
        imgUrl="https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1776&q=80"
      />
    </>
  )
}

export default HomePage
