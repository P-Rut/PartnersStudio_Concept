import { useState } from "react"
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai"

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

  return (
    <>
      <div className=" ">
        <div className="sm:max-w-[1440px] sm:h-[750px] sm:px-20 sm:w-full h-[700px] sm:py-0 py-5 px-5 sm:m-auto sm:grid sm:grid-cols-5 sm:relative">
          <div
            style={{ backgroundImage: `url(${projects[currentImg].URL})` }}
            className="col-span-2 sm:row-span-3 sm:h-full h-2/4 bg-center bg-cover duration-500"
          />
          <div className="flex visible sm:invisible justify-center align-center top-[35%] h-50 w-50 relative">
            <div className="text-2xl bg-white bg-opacity-50  text-indigo-900 h-fit hover:text-indigo-200 hover:scale-125 transition-all cursor-pointer">
              <AiOutlineArrowLeft onClick={prevImg} size={50} />
            </div>

            <div className="text-2xl ml-10 bg-white bg-opacity-50 h-fit  text-indigo-900 hover:scale-125 transition-all  hover:text-indigo-200 cursor-pointer">
              <AiOutlineArrowRight onClick={nextImg} size={50} className="" />
            </div>
          </div>
          <div className="sm:col-span-3 sm:row-span-2 sm:ml-24">
            <div>
              <h1 className="sm:text-5xl font-light text-3xl sm:mb-5">
                {projects[currentImg].header}
              </h1>
              <p className="sm:text-2xl font-extralight text-xl mt-2">
                {projects[currentImg].text}
              </p>
            </div>
          </div>
          <div className="invisible sm:visible flex justify-center align-center sm:top-[70%] h-50 w-50 sm:left-[65%] sm:absolute relative">
            <div className="text-2xl bg-white bg-opacity-50  text-indigo-900 h-fit hover:text-indigo-200 hover:scale-125 transition-all cursor-pointer">
              <AiOutlineArrowLeft onClick={prevImg} size={50} />
            </div>

            <div className="text-2xl ml-10 bg-white bg-opacity-50 h-fit  text-indigo-900 hover:scale-125 transition-all  hover:text-indigo-200 cursor-pointer">
              <AiOutlineArrowRight onClick={nextImg} size={50} className="" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectsCarousel
