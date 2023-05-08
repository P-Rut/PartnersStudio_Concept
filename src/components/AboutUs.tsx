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
    <div className="bg-gray-50">
      <div className="bg-gray-50 max-w-[1440px] h-[750px] grid grid-cols-5 grid-rows-2 px-20 py-10">
        <div className="mt-28 col-span-3 row-span-2">
          <div className="grid h-full pr-10">
            <p className={textClassName}>{titleText}</p>
            <div className="flex items-end">
              <button
                onClick={(e) => (window.location.href = "/team")}
                className="text-2xl transition inlnie hover:scale-110 hover:text-indigo-800 font-thin underline decoration-indigo-800 underline-offset-8"
              >
                {buttonTitle}
              </button>
            </div>
          </div>
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
