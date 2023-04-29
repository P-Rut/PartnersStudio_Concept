interface AboutUsProps {
  titleText: string
  imgUrl: string
  buttonTitle: string
  textClassName: string
}

const AboutUs: React.FC<AboutUsProps> = ({
  titleText,
  imgUrl,
  buttonTitle,
  textClassName,
}) => {
  return (
    <div className="py-5 border bg-gray-50">
      <div className="max-w-[1440px] h-[650px]  grid grid-cols-5 grid-rows-2 mx-10 my-10">
        <div className=" mt-28 col-span-3 row-span-2">
          <p className={textClassName}>{titleText}</p>
          <button className="text-2xl mt-72 transition-all duration-500 transform px-6 py-2 inlnie hover:scale-125 hover:text-indigo-800 font-thin underline decoration-indigo-800 underline-offset-8">
            {buttonTitle}
          </button>
        </div>
        <div className="w-full col-span-2 row-span-2 ">
          <img alt="img" src={imgUrl} className="h-full w-full object-cover" />
        </div>
        <div />
      </div>
    </div>
  )
}

export default AboutUs
