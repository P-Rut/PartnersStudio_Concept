import logo from "../assets/Desktop - 1.png"

const Navbar: React.FC = () => {
  return (
    <nav className="border-gray-900 bg-white flex border-b w-full fixed top-0 z-50 ">
      <div className="flex-1 flex justify-center mr-auto py-3 px-10">
        <button className="flex-1 space-y-1.5">
          <span className="block w-8 h-0.5 bg-indigo-800"></span>
          <span className="block w-8 h-0.5 bg-indigo-800"></span>
          <span className="block w-8 h-0.5 bg-indigo-800"></span>
          <span className="block w-8 h-0.5 bg-indigo-800"></span>
        </button>

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
  )
}

export default Navbar

// text-2xl mt-72 transition-all duration-500 transform px-6 py-2 inlnie hover:scale-125 hover:text-indigo-800 font-thin underline decoration-indigo-800 underline-offset-8

// flex flex-1 cursor-pointer transition-all duration-500 transform hover:text-indigo-800 justify-end ml-auto  decoration-indigo-800 hover:scale-125 underline-offset-8 underline  text-xl font-light whitespace-nowrap
