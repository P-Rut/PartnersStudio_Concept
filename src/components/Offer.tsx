import Navbar from "./Navbar"
import { PhotoIcon, MapIcon, CubeIcon } from "@heroicons/react/24/outline"

const Offer: React.FC = () => {
  return (
    <>
      <div>
        <Navbar />
        <div className="h-[800px] mt-14 grid grid-cols-3 grid-rows-3 gap-x-5 gap-y-5 p-10">
          <div className="w-full col-span-3 border border-black">
            <p className="p-16 text-4xl font-light">
              Choose a package that best suits your needs and provide us with
              your design requirements as well as vision for the project.
            </p>
          </div>

          <div className="row-span-2 border  border-black">
            <div className="h-full grid grid-rows-2 gap-y-5">
              <div className="space-y-5 py-5 px-5">
                <div className="flex items-center gap-5">
                  <div className="row-span-1">
                    <PhotoIcon className=" h-14 w-14 text-indigo-800" />
                  </div>
                  <div>
                    <h1 className="text-2xl">Basic</h1>
                    <p className="text-xs font-thin">Starting at $1500</p>
                  </div>
                </div>
                <p className="text-xl font-light">
                  Our Basic package provides high-quality 3D visualizations and
                  virtual walkthroughs to help you envision your dream space.
                </p>
              </div>
              <div>
                <div className="row-span-2 border border-red-500 p-2 h-full "></div>
              </div>
            </div>
          </div>
          <div className="row-span-2 border  border-black">
            <div className="h-full grid grid-rows-2 gap-y-5">
              <div className="space-y-5 py-5 px-5">
                <div className="flex items-center gap-5">
                  <div className="row-span-1">
                    <MapIcon className="h-14 w-14 text-indigo-800" />
                  </div>
                  <div>
                    <h1 className="text-2xl">Plus</h1>
                    <p className="text-xs font-thin">Starting at $2500</p>
                  </div>
                </div>
                <p className="text-xl font-light">
                  Our Plus package includes professional construction plans,
                  detailed blueprints, technical drawings, and specifications,
                  in addition to the high-quality visualizations
                </p>
              </div>
              <div>
                <div className="row-span-2 border border-red-500 p-2 h-full "></div>
              </div>
            </div>
          </div>
          <div className="row-span-2 border  border-black">
            <div className="h-full grid grid-rows-2 gap-y-5">
              <div className="space-y-5 py-5 px-5">
                <div className="flex items-center gap-5">
                  <div className="row-span-1">
                    <div className="row-span-1">
                      <CubeIcon className=" h-14 w-14 text-indigo-800" />
                    </div>
                  </div>
                  <div>
                    <h1 className="text-2xl">Exclusive</h1>
                    <p className="text-xs font-thin">Starting at $4500</p>
                  </div>
                </div>
                <p className="text-xl font-light">
                  Our Exclusive package offers end-to-end design and building
                  supervision to ensure your project meets and exceeds your
                  expectations.
                </p>
              </div>
              <div>
                <div className="row-span-2 border border-red-500 p-2 h-full "></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Offer
