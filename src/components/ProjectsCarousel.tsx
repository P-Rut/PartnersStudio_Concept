import { useState } from "react"
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai"
import Navbar from "./Navbar"

const ProjectsCarousel: React.FC = () => {
  const projects = [
    {
      URL: "https://images.unsplash.com/photo-1622372738946-62e02505feb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=832&q=80",
      header: "Our kitchen renovation",
      text: "Experience peace of mind with our Exclusive package - expert guidance throughout the entire process.",
    },
    {
      URL: "https://images.unsplash.com/photo-1604014237744-2f4ab6bfbcc2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      header: "Our bathroom renovation",
      text: "From dreams to reality, we offer customized packages to bring your vision to life",
    },
    {
      URL: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      header: "Our exterior renovation",
      text: "Let us take the hassle out of design and construction with our expert guidance and customizable options.",
    },
    {
      URL: "https://images.unsplash.com/photo-1594873604892-b599f847e859?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
      header: "Our living room renovation",
      text: "Transform your space with our high-quality visualizations and professional construction plans - all tailored to your needs.",
    },
  ]

  const [currentImg, setCurrentImg] = useState(0)
  const prevImg = () => {
    const isFirstImg = currentImg === 0
    const newImg = isFirstImg ? projects.length - 1 : currentImg - 1
    setCurrentImg(newImg)
  }

  const nextImg = () => {
    const isLastImg = currentImg === projects.length - 1
    const newImg = isLastImg ? 0 : currentImg + 1
    setCurrentImg(newImg)
  }

  // const goToProject = (projectIndex: any) => {
  //   setCurrentImg(projectIndex)
  // }

  return (
    <>
      <div className="border">
        <div className="max-w-[1440px] h-[750px] py-10 px-20 w-full m-auto grid grid-cols-5 relative ">
          <div
            style={{ backgroundImage: `url(${projects[currentImg].URL})` }}
            className="col-span-2 h-full bg-center bg-cover duration-500"
          ></div>
          <div className="col-span-3 py-40 ml-24">
            <div className="py-5 mb-10 duration-1000">
              <h1 className="text-5xl font-light mb-10">
                {projects[currentImg].header}
              </h1>
              <p className="text-2xl font-extralight">
                {projects[currentImg].text}
              </p>
            </div>
            <div className="flex absolute justify-center aligng-center bottom-70">
              <div className="text-2xl  text-indigo-800 hover:text-indigo-200 cursor-pointer">
                <AiOutlineArrowLeft onClick={prevImg} size={50} />
              </div>
              {/* <div className="flex mx-2">
            {projects.map((project, projectIndex) => (
              <div
                key={projectIndex}
                onClick={() => goToProject(projectIndex)}
                className="solid  cursor-pointer border mx-2 border-black h-8 w-8"
              ></div>
            ))}
          </div> */}
              <div className="text-2xl ml-10  text-indigo-800  hover:text-indigo-200 cursor-pointer">
                <AiOutlineArrowRight onClick={nextImg} size={50} className="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectsCarousel
