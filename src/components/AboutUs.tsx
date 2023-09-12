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
    <div className="bg-white sm:max-w-[1440px] sm:pb-10 sm:h-[750px] sm:grid sm:grid-cols-5 py-10 sm:grid-rows-2 sm:px-20 sm:pt-10 px-5">
      <div className="sm:mt-16 col-span-3 row-span-2">
        <div className="grid h-full pr-10">
          <p className={textClassName}>{titleText}</p>
          <div className="flex items-end invisible sm:visible">
            <button
              onClick={(e) => (window.location.href = "/team")}
              className="text-2xl align-bottom transition h-full inlnie hover:scale-110 hover:text-indigo-900 font-thin underline decoration-indigo-900 underline-offset-8"
            >
              {buttonTitle}
            </button>
          </div>
        </div>
      </div>
      <div className="w-full col-span-2 row-span-3 mt-10 sm:m-0">
        <img alt="img" src={imgUrl} className="h-full w-full object-cover" />
      </div>
      <div />
      <div className="flex items-end sm:invisible">
        <button
          onClick={(e) => (window.location.href = "/team")}
          className="text-xl mt-10 transition inlnie hover:scale-110 hover:text-indigo-900 font-thin underline decoration-indigo-900 underline-offset-8"
        >
          {buttonTitle}
        </button>
      </div>
    </div>
  )
}

export default AboutUs
