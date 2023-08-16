const HowItWorks: React.FC = () => {
  return (
    <>
      <div className=" bg-gray-50">
        <div className="max-w-[1440px] h-[750px] py-10">
          <div className="h-auto">
            <div className="p-20">
              <h1 className="text-5xl tracking-normal font-light text-center">
                Modern approach to design with help of professionals.
              </h1>
            </div>
            <div className="grid grid-cols-3 mt-5">
              <div className="p-10">
                <h1 className="text-center text-4xl font-light mb-12">
                  1. Design
                </h1>
                <p className="text-2xl font-extralight text-center">
                  Design any space under supervision and help of architects and
                  designers.
                </p>
              </div>
              <div className="border-x border-indigo-900 p-10">
                <h1 className="text-center text-4xl font-light mb-12">
                  2. Document
                </h1>
                <p className="text-2xl font-extralight text-center">
                  Quickly turn your drawing to proffessional blueprints and
                  specifications ready for construction.
                </p>
              </div>
              <div className="p-10">
                <h1 className="text-center text-4xl font-light mb-12">
                  3. Build
                </h1>
                <p className="text-2xl font-extralight text-center">
                  Manage your project with assistance right away from design
                  throughout construction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HowItWorks
