import { useState } from "react"
import logo from "../assets/Desktop - 1.png"
import { Bars4Icon, XMarkIcon } from "@heroicons/react/24/outline"

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isTransparent, setIsTransparent] = useState(false)
  const changeNavbarColor = () => {
    if (window.scrollY >= 20) {
      setIsTransparent(true)
    } else {
      setIsTransparent(false)
    }
  }
  window.addEventListener("scroll", changeNavbarColor)

  return (
    <div>
      {isTransparent ? (
        <>
          <nav className=" transition-all duration-300 border-gray-900 bg-gray-50 flex border-b w-full fixed top-0 z-50 ">
            <div className="flex-1 flex justify-center mr-auto py-3 px-10">
              <button
                onClick={() => setIsOpen((prev) => !prev)}
                type="button"
                className="flex-1 space-y-1.5 "
              >
                <Bars4Icon className="h-10 w-10 transition-all hover:scale-125 duration-300 hover:text-indigo-800" />
              </button>
              {isOpen && (
                <div className="w-full h-screen top-0 z-30 bg-black bg-opacity-60 absolute">
                  <div className="  text-indigo-900 h-screen bg-gray-50 absolute z-40 w-2/6 py-3 px-10 top-0 left-0">
                    <XMarkIcon
                      onClick={() => setIsOpen((prev) => !prev)}
                      className="h-12 w-12 mb-10 cursor-pointer hover:scale-125 transition-all duration-300"
                    />
                    <ul className="flex flex-col mb-10 gap-10 text-4xl font-thin">
                      <li
                        onClick={(e) => (window.location.href = "/")}
                        className=" cursor-pointer hover:scale-105 hover:pl-10  transition-all duration-300"
                      >
                        Home
                      </li>
                      <li
                        onClick={(e) => (window.location.href = "/offer")}
                        className=" cursor-pointer hover:scale-110 hover:pl-10 duration-300"
                      >
                        Offer
                      </li>
                      <li className=" hover:scale-110 hover:pl-10 duration-300">
                        Contact
                      </li>
                      <li className=" hover:scale-110 hover:pl-10 duration-300">
                        Team
                      </li>
                    </ul>
                  </div>
                </div>
              )}
              <div className="mx-36 invisible lg:visible transition-all hover:scale-110 duration-500">
                <button onClick={(e) => (window.location.href = "/")}>
                  <img src={logo} className="h-9" alt="Logo" />
                </button>
              </div>
              <span
                onClick={(e) => (window.location.href = "/offer")}
                className="flex flex-1 cursor-pointer transition-all duration-500 transform hover:text-indigo-800 justify-end ml-auto  decoration-indigo-800 hover:text-2xl underline-offset-8 underline  text-xl font-light whitespace-nowrap"
              >
                How it works ?
              </span>
            </div>
          </nav>
        </>
      ) : (
        <>
          <nav className="hidden border-gray-900 bg-gray-50  border-b w-full fixed top-0 z-50 "></nav>
        </>
      )}
    </div>
  )
}

export default Navbar

// text-2xl mt-72 transition-all duration-500 transform px-6 py-2 inlnie hover:scale-125 hover:text-indigo-800 font-thin underline decoration-indigo-800 underline-offset-8

// flex flex-1 cursor-pointer transition-all duration-500 transform hover:text-indigo-800 justify-end ml-auto  decoration-indigo-800 hover:scale-125 underline-offset-8 underline  text-xl font-light whitespace-nowrap
