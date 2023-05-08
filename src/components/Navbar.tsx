import { useEffect, useState } from "react"
import logo from "../assets/Desktop - 1.png"
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
        className={`transition ease-out duration-300 border-gray-900 bg-gray-50 flex border-b w-full fixed z-50 ${
          visable ? "" : "opacity-0 invisible"
        }`}
      >
        <div className="flex-1 flex justify-center mr-auto py-2 px-10">
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            type="button"
            className="flex-1 space-y-1.5"
          >
            <Bars4Icon className="h-7 w-7 transition-all hover:scale-125  hover:text-indigo-800" />
          </button>

          <div
            className={`transition ease-linear w-full h-screen top-0 z-30 bg-black bg-opacity-60 absolute ${
              isOpen ? "" : "opacity-0 invisible"
            }`}
          >
            <div className=" text-indigo-900 h-screen bg-gray-50 absolute z-40 w-2/6 py-3 px-10 top-0 left-0">
              <XMarkIcon
                onClick={() => setIsOpen((prev) => !prev)}
                className="h-7 w-7 mb-10 cursor-pointer hover:scale-125 transition-all"
              />
              <ul className="flex flex-col mb-10 gap-10 text-3xl font-thin">
                <li
                  onClick={(e) => (window.location.href = "/")}
                  className="cursor-pointer  hover:pl-10 transition-all hover:text-indigo-300"
                >
                  Home
                </li>
                <li
                  onClick={(e) => (window.location.href = "/offer")}
                  className="cursor-pointer  hover:pl-10 transition-all hover:text-indigo-300"
                >
                  Offer
                </li>
                <li
                  onClick={(e) => (window.location.href = "/contact")}
                  className="cursor-pointer hover:pl-10 transition-all hover:text-indigo-300"
                >
                  Contact
                </li>
                <li
                  onClick={(e) => (window.location.href = "/team")}
                  className="cursor-pointer hover:pl-10 transition-all hover:text-indigo-300"
                >
                  Team
                </li>
              </ul>
            </div>
          </div>
          <div className="mx-36 invisible lg:visible transition-all hover:scale-110">
            <button onClick={(e) => (window.location.href = "/")}>
              <img src={logo} className="h-7" alt="Logo" />
            </button>
          </div>
          <span
            onClick={(e) => (window.location.href = "/offer")}
            className="flex flex-1 cursor-pointer transition-all transform hover:text-indigo-800 justify-end ml-auto  decoration-indigo-800 hover:text-xl underline-offset-8 underline font-light whitespace-nowrap"
          >
            How it works ?
          </span>
        </div>
      </nav>
    </>
  )
}

export default Navbar
