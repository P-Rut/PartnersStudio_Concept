import Navbar from "./Navbar"
import { PhotoIcon, MapIcon, CubeIcon } from "@heroicons/react/24/outline"

const Offer: React.FC = () => {
  const basicImg = {
    backgroundImage:
      "url('https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')",
  }
  const PlusImg = {
    backgroundImage:
      "url('https://images.unsplash.com/photo-1608303588026-884930af2559?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=703&q=80')",
  }
  const ExclusiveImg = {
    backgroundImage:
      "url('https://images.unsplash.com/photo-1624555130581-1d9cca783bc0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80')",
  }
  return (
    <>
      <Navbar />
      <div>
        <div className="flex px-5 py-5 mx-5 mb-5 mt-20 items-center border border-black">
          <p className="text-2xl font-light leading-tight tracking-tight">
            Select the package that aligns with your requirements and share with
            us your vision. Submit your form and we will send you offer via
            email.
          </p>
        </div>
        <div className=" bg-gray-50 grid grid-cols-3 grid-rows-3 gap-x-5 gap-y-5 px-5 ">
          <div className="row-span-1 md:row-span-3 col-span-3 md:col-span-1 border  border-black">
            <div className="h-full grid grid-rows-2">
              <div className="space-y-3 py-5 px-5">
                <div className="flex items-center gap-5">
                  <div className="row-span-1">
                    <PhotoIcon className="h-12 w-12 text-indigo-900" />
                  </div>
                  <div>
                    <h1 className="text-3xl">Basic</h1>
                    <p className="font-thin">Starting at $1500</p>
                  </div>
                </div>
                <p className="text-lg font-thin">
                  Our Basic package provides high-quality 3D visualizations and
                  virtual walkthroughs to help you envision your dream space.
                </p>
              </div>
              <div>
                <div
                  className="row-span-2 h-full w-full bg-fit bg-cover"
                  style={basicImg}
                />
              </div>
            </div>
          </div>
          <div className="row-span-1 md:row-span-3 border col-span-3 md:col-span-1  border-black">
            <div className="h-full grid grid-rows-2">
              <div className="space-y-3 py-5 px-5">
                <div className="flex items-center gap-5">
                  <div className="row-span-1">
                    <MapIcon className="h-12 w-12 text-indigo-900" />
                  </div>
                  <div>
                    <h1 className="text-3xl">Plus</h1>
                    <p className="font-thin">Starting at $2500</p>
                  </div>
                </div>
                <p className="text-lg font-thin">
                  Our Plus package includes professional construction plans,
                  detailed blueprints, technical drawings, and specifications,
                  in addition to the high-quality visualizations
                </p>
              </div>
              <div>
                <div
                  className="row-span-2 h-full w-full bg-fit bg-cover"
                  style={PlusImg}
                />
              </div>
            </div>
          </div>
          <div className="row-span-1 md:row-span-3 border col-span-3 md:col-span-1  border-black">
            <div className="h-full grid grid-rows-2">
              <div className="space-y-3 py-5 px-5">
                <div className="flex items-center gap-5">
                  <div className="row-span-1">
                    <div className="row-span-1">
                      <CubeIcon className=" h-12 w-12 text-indigo-900" />
                    </div>
                  </div>
                  <div>
                    <h1 className="text-3xl ">Exclusive</h1>
                    <p className="font-thin">Starting at $4500</p>
                  </div>
                </div>
                <p className="text-lg font-thin">
                  Our Exclusive package offers end-to-end design and building
                  supervision to ensure your project meets and exceeds your
                  expectations.
                </p>
              </div>
              <div>
                <div
                  className="row-span-2 h-full w-full bg-fit bg-cover"
                  style={ExclusiveImg}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mx-5 my-5 h-12 flex justify-center items-center">
          <button
            onClick={(e) => (window.location.href = "/form")}
            className="w-full tracking-wide text-2xl border transition-colors duration-300 border-black text-gray-50 p-2 hover:bg-indigo-100 hover:text-indigo-900 bg-indigo-900"
          >
            CHOOSE A PACKAGE
          </button>
        </div>
      </div>
    </>
  )
}

export default Offer
