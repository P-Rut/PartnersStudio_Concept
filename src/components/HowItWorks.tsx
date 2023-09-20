const HowItWorks: React.FC = () => {
  return (
    <>
      <div className="sm:max-w-[1440px] sm:h-[650px] pb-12 py-10 sm:py-0 ">
        <div className="h-auto">
          <div className="sm:p-20 p-5">
            <h1 className="sm:text-5xl text-2xl tracking-normal font-light sm:text-center">
              Modern approach to design with help of professionals.
            </h1>
          </div>
          <div className="sm:grid sm:grid-cols-3 sm:mt-5">
            <div className="sm:p-10 p-5">
              <h1 className="sm:text-center sm:text-4xl text-xl font-light sm:mb-12">
                1. Design
              </h1>
              <p className="sm:text-2xl font-extralight sm:text-center">
                Design any space under supervision and help of architects and
                designers.
              </p>
            </div>
            <div className="sm:border-x border-indigo-900 sm:p-10 p-5">
              <h1 className="sm:text-center sm:text-4xl text-xl font-light sm:mb-12">
                2. Document
              </h1>
              <p className="sm:text-2xl font-extralight sm:text-center">
                Quickly turn your drawing to proffessional blueprints and
                specifications ready for construction.
              </p>
            </div>
            <div className="sm:p-10 p-5">
              <h1 className="sm:text-center sm:text-4xl text-xl font-light sm:mb-12">
                3. Build
              </h1>
              <p className="sm:text-2xl font-extralight sm:text-center">
                Manage your project with assistance right away from design
                throughout construction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HowItWorks
