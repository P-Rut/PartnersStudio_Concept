import { useEffect, useState } from "react"
import logo from "../assets/Logo-black.png"
import { Bars4Icon, XMarkIcon } from "@heroicons/react/24/outline"

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [prevScrollPosition, setPrevScrollPosition] = useState(0)
  const [visable, setVisable] = useState(true)
  const handleScroll = () => {
    const currentScrollPosition = window.scrollY

    if (currentScrollPosition > prevScrollPosition) {
      setVisable(false)
    } else {
      setVisable(true)
    }
    setPrevScrollPosition(currentScrollPosition)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  })

  return (
    <>
      <nav
        className={`transition ease-out duration-300 border-gray-900 w-full bg-gray-50 flex border-b fixed top-0 z-50 ${
          visable ? "" : "opacity-0 invisible"
        }`}
      >
        <div className="flex flex-1 justify-center py-2 px-5 sm:px-10">
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            type="button"
            className="flex-1 space-y-1.5"
          >
            <Bars4Icon className="h-7 w-7 transition-all hover:scale-125  hover:text-indigo-900" />
          </button>

          <div
            className={`transition ease-linear w-full h-screen top-0 z-30 bg-black bg-opacity-60 absolute ${
              isOpen ? "" : "opacity-0 invisible"
            }`}
          >
            <div className=" text-indigo-900 h-full bg-gray-50 absolute z-40 w-4/6 sm:w-2/6 py-3 px-5 sm:px-10 top-0 left-0">
              <XMarkIcon
                onClick={() => setIsOpen((prev) => !prev)}
                className="h-7 w-7 mb-10 cursor-pointer hover:scale-125 transition-all"
              />
              <ul className="flex flex-col mb-10 gap-8 sm:gap-10 text-3xl font-thin">
                <li
                  onClick={(e) => (window.location.href = "/")}
                  className="cursor-pointer  hover:pl-10 transition-all hover:text-indigo-300 border-b border-gray-400 sm:border-none"
                >
                  Home
                </li>
                <li
                  onClick={(e) => (window.location.href = "/offer")}
                  className="cursor-pointer  hover:pl-10 transition-all hover:text-indigo-300 border-b border-gray-400 sm:border-none"
                >
                  Offer
                </li>
                <li
                  onClick={(e) => (window.location.href = "/contact")}
                  className="cursor-pointer hover:pl-10 transition-all hover:text-indigo-300 border-b border-gray-400 sm:border-none"
                >
                  Contact
                </li>
                <li
                  onClick={(e) => (window.location.href = "/team")}
                  className="cursor-pointer hover:pl-10 transition-all hover:text-indigo-300 border-b border-gray-400 sm:border-none"
                >
                  Team
                </li>
              </ul>
            </div>
          </div>
          <div className="sm:mx-36 invisible sm:visible flex transition-all hover:scale-110">
            <button onClick={(e) => (window.location.href = "/")}>
              <img src={logo} className=" items-center h-9" alt="Logo" />
            </button>
          </div>
          <span
            onClick={(e) => (window.location.href = "/offer")}
            className="items-center sm:visible flex flex-1 cursor-pointer transition-all transform hover:text-indigo-900 decoration-1 justify-end ml-auto  decoration-indigo-800 hover:text-xl underline-offset-4 underline font-light whitespace-nowrap"
          >
            How it works ?
          </span>
        </div>
      </nav>
    </>
  )
}

export default Navbar
