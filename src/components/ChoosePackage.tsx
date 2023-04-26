import { useFormContext } from "react-hook-form"
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
      <div>
        <Navbar />
        <div className="h-[800px] mt-14 grid grid-cols-3 grid-rows-3 gap-x-5 gap-y-10 p-10">
          <div className="row-span-2 border  border-black">
            <div className="flex justify-end">
              <input
                {...register("package")}
                value={Packages.BASIC}
                id="checkbox"
                type="checkbox"
                className="border-black border-r-0 border-t-0 border-l-1 border-b-1 cursor-pointer 
                w-12 h-12 "
              />
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
                <ul className="mb-8 space-y-4 text-left  ">
                  <li className="flex items-center space-x-3">
                    <div className=" bg-indigo-50 flex-shrink-0 w-6 h-6 text-indigo-900 ">
                      <CheckIcon />
                    </div>
                    <span className="font-extralight">
                      Work with dedicated profesional designers
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className=" bg-indigo-50 flex-shrink-0 w-6 h-6 text-indigo-900 ">
                      <CheckIcon />
                    </div>
                    <span className="font-extralight">
                      High-quality 3D visualizations and virtual walkthroughs.
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className=" bg-indigo-50 flex-shrink-0 w-6 h-6 text-indigo-900 ">
                      <CheckIcon />
                    </div>
                    <span className="font-extralight">
                      Matching visualization space where you live.
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className=" bg-indigo-50 flex-shrink-0 w-6 h-6 text-indigo-900 ">
                      <CheckIcon />
                    </div>
                    <span className="font-extralight">
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
                {...register("package")}
                value=""
                id="checkbox"
                type="checkbox"
                className="border-black border-r-0 border-t-0 border-l-1 border-b-1 cursor-pointer 
                w-12 h-12 "
              />
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
                    <span className="font-extralight">
                      Everything that Basic plan includes.
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className=" bg-indigo-50 flex-shrink-0 w-6 h-6 text-indigo-900 ">
                      <CheckIcon />
                    </div>
                    <span className="font-extralight">
                      Professional construction plans, blueprints, technical
                      drawings, and specifications.
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className=" bg-indigo-50 flex-shrink-0 w-6 h-6 text-indigo-900 ">
                      <CheckIcon />
                    </div>
                    <span className="font-extralight">
                      Meetings and advice with constructors and architects who
                      will analyze your project.
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className=" bg-indigo-50 flex-shrink-0 w-6 h-6 text-indigo-900 ">
                      <CheckIcon />
                    </div>
                    <span className="font-extralight">
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
                {...register("package")}
                value="Exclusive: $4500"
                id="checkbox"
                type="checkbox"
                className="border-black border-r-0 border-t-0 border-l-1 border-b-1 cursor-pointer 
                w-12 h-12 "
              />
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
                    <span className="font-extralight">
                      End-to-end design and building supervision.
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className=" bg-indigo-50 flex-shrink-0 w-6 h-6 text-indigo-900 ">
                      <CheckIcon />
                    </div>
                    <span className="font-extralight">
                      High-quality 3D visualizations and virtual walkthroughs
                      (included in Basic package).
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className=" bg-indigo-50 flex-shrink-0 w-6 h-6 text-indigo-900 ">
                      <CheckIcon />
                    </div>
                    <span className="font-extralight">
                      Professional construction plans, blueprints, technical
                      drawings, and specifications (included in Plus package).
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className=" bg-indigo-50 flex-shrink-0 w-6 h-6 text-indigo-900 ">
                      <CheckIcon />
                    </div>
                    <span className="font-extralight">
                      Expert team guidance to ensure that the final result meets
                      your needs and exceeds your expectations.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-full col-span-3 border border-black">
            <p className="p-10 text-4xl font-light leading-tight">
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