import { useFormContext } from "react-hook-form"
//@ts-ignore
import { Packages } from "../types"
import Navbar from "./Navbar"
import {
  PhotoIcon,
  MapIcon,
  CubeIcon,
  CheckIcon,
} from "@heroicons/react/24/outline"

const ChoosePackage: React.FC = () => {
  const { register } = useFormContext()
  return (
    <>
      <div className="bg-gray-50">
        <Navbar />
        <div className="h-[800px] grid grid-cols-3 grid-rows-3 gap-x-5 gap-y-10 pt-20 pb-10 px-10">
          <div className="row-span-2 border border-black ">
            <div className="flex justify-end">
              <input
                type="radio"
                id="basic"
                value={Packages.BASIC}
                {...register("package")}
                className="hidden peer"
              />
              <label
                htmlFor="basic"
                className="inline-flex items-center px-4 py-2  border-gray-800 bg-gray-50 text-indigo-800  border border-r-0 border-t-0 cursor-pointer  peer-checked:border-blue-600 peer-checked:text-white peer-checked:bg-indigo-800 hover:text-gray-600 hover:bg-gray-100"
              >
                <div
                  aria-hidden="true"
                  className="w-fit h-fit font-thin text-5xl"
                >
                  +
                </div>
              </label>
            </div>
            <div className="h-full grid grid-rows-2 gap-y-5">
              <div className="space-y-10 pb-5 px-5">
                <div className="flex items-center gap-5">
                  <div className="row-span-1">
                    <PhotoIcon className="h-14 w-14 text-indigo-800" />
                  </div>
                  <div>
                    <h1 className="text-3xl">Basic</h1>
                    <p className="text-xs font-thin">Starting at $1500</p>
                  </div>
                </div>
                <ul className="mb-8 space-y-4 text-left">
                  <li className="flex items-center space-x-3">
                    <div className=" bg-indigo-50 flex-shrink-0 w-6 h-6 text-indigo-900 ">
                      <CheckIcon />
                    </div>
                    <span className="font-extralight text-sm">
                      Work with dedicated profesional designers
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className=" bg-indigo-50 flex-shrink-0 w-6 h-6 text-indigo-900 ">
                      <CheckIcon />
                    </div>
                    <span className="font-extralight text-sm">
                      High-quality 3D visualizations and virtual walkthroughs.
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className=" bg-indigo-50 flex-shrink-0 w-6 h-6 text-indigo-900 ">
                      <CheckIcon />
                    </div>
                    <span className="font-extralight text-sm">
                      Matching visualization space where you live.
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className=" bg-indigo-50 flex-shrink-0 w-6 h-6 text-indigo-900 ">
                      <CheckIcon />
                    </div>
                    <span className="font-extralight text-sm">
                      Full shopping list of materials and furnitures included in
                      3D renderings
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <div className="row-span-2 h-full w-full bg-fit bg-cover" />
              </div>
            </div>
          </div>
          <div className="row-span-2 border  border-black">
            <div className="flex justify-end">
              <input
                type="radio"
                id="plus"
                value={Packages.PLUS}
                className="hidden peer"
                {...register("package")}
              />
              <label
                htmlFor="plus"
                className="inline-flex items-center px-4 py-2   border-gray-800 bg-gray-50 text-indigo-800  border border-r-0 border-t-0 cursor-pointer  peer-checked:border-blue-600 peer-checked:text-white peer-checked:bg-indigo-800 hover:text-gray-600 hover:bg-gray-100"
              >
                <div
                  aria-hidden="true"
                  className="w-fit h-fit font-thin text-5xl"
                >
                  +
                </div>
              </label>
            </div>
            <div className="h-full grid grid-rows-2 gap-y-5">
              <div className="space-y-10 pb-5 px-5">
                <div className="flex items-center gap-5">
                  <div className="row-span-1">
                    <MapIcon className="h-14 w-14 text-indigo-800" />
                  </div>
                  <div>
                    <h1 className="text-3xl">Plus</h1>
                    <p className="text-xs font-thin">Starting at $2500</p>
                  </div>
                </div>
                <ul className="mb-8 space-y-4 text-left  ">
                  <li className="flex items-center space-x-3">
                    <div className=" bg-indigo-50 flex-shrink-0 w-6 h-6 text-indigo-900 ">
                      <CheckIcon />
                    </div>
                    <span className="font-extralight text-sm">
                      Everything that Basic plan includes.
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className=" bg-indigo-50 flex-shrink-0 w-6 h-6 text-indigo-900 ">
                      <CheckIcon />
                    </div>
                    <span className="font-extralight text-sm">
                      Professional construction plans, blueprints, technical
                      drawings, and specifications.
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className=" bg-indigo-50 flex-shrink-0 w-6 h-6 text-indigo-900 ">
                      <CheckIcon />
                    </div>
                    <span className="font-extralight text-sm">
                      Meetings and advice with constructors and architects who
                      will analyze your project.
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className=" bg-indigo-50 flex-shrink-0 w-6 h-6 text-indigo-900 ">
                      <CheckIcon />
                    </div>
                    <span className="font-extralight text-sm">
                      All you need to obtain permits and begin the construction
                      process.
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <div className="row-span-2 h-full w-full bg-fit bg-cover" />
              </div>
            </div>
          </div>
          <div className="row-span-2 border  border-black">
            <div className="flex justify-end">
              <input
                type="radio"
                id="exclusive"
                value={Packages.EXCLUSIVE}
                className="hidden peer"
                {...register("package")}
              />
              <label
                htmlFor="exclusive"
                className="inline-flex items-center px-4 py-2 text-indigo-800 bg-gray-50 border border-r-0 border-t-0 border-gray-400  cursor-pointer  peer-checked:border-blue-600 peer-checked:text-white peer-checked:bg-indigo-800 hover:text-gray-600 hover:bg-gray-100"
              >
                <div
                  aria-hidden="true"
                  className="w-fit h-fit font-thin text-5xl"
                >
                  +
                </div>
              </label>
            </div>
            <div className="h-full grid grid-rows-2 gap-y-5">
              <div className="space-y-10 pb-5 px-5">
                <div className="flex items-center gap-5">
                  <div className="row-span-1">
                    <div className="row-span-1">
                      <CubeIcon className=" h-14 w-14 text-indigo-800" />
                    </div>
                  </div>
                  <div>
                    <h1 className="text-3xl ">Exclusive</h1>
                    <p className="text-xs font-thin">Starting at $4500</p>
                  </div>
                </div>
                <ul className="mb-8 space-y-4 text-left  ">
                  <li className="flex items-center space-x-3">
                    <div className=" bg-indigo-50 flex-shrink-0 w-6 h-6 text-indigo-900 ">
                      <CheckIcon />
                    </div>
                    <span className="font-extralight text-sm">
                      End-to-end design and building supervision.
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className=" bg-indigo-50 flex-shrink-0 w-6 h-6 text-indigo-900 ">
                      <CheckIcon />
                    </div>
                    <span className="font-extralight text-sm">
                      High-quality 3D visualizations and virtual walkthroughs
                      (included in Basic package).
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className=" bg-indigo-50 flex-shrink-0 w-6 h-6 text-indigo-900 ">
                      <CheckIcon />
                    </div>
                    <span className="font-extralight text-sm">
                      Professional construction plans, blueprints, technical
                      drawings, and specifications (included in Plus package).
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className=" bg-indigo-50 flex-shrink-0 w-6 h-6 text-indigo-900 ">
                      <CheckIcon />
                    </div>
                    <span className="font-extralight text-sm">
                      Expert team guidance to ensure that the final result meets
                      your needs and exceeds your expectations.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-span-3 border flex items-center px-20 border-black">
            <p className="text-3xl font-light leading-tight">
              After choosing a package that best suits your needs please provide
              us below with your design requirements as well as vision for the
              project.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default ChoosePackage
