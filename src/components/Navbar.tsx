import logo from "../assets/Desktop - 1.png"

const Navbar: React.FC = () => {
  return (
    <nav className="border-gray-900 bg-white flex border-b w-full fixed top-0 z-50 ">
      <div className="flex-1 flex justify-center mr-auto py-2 px-10">
        <button className="flex-1 space-y-1.5">
          <span className="block w-8 h-0.5 bg-indigo-800"></span>
          <span className="block w-8 h-0.5 bg-indigo-800"></span>
          <span className="block w-8 h-0.5 bg-indigo-800"></span>
          <span className="block w-8 h-0.5 bg-indigo-800"></span>
        </button>

        <div className="mx-36 invisible lg:visible">
          <button onClick={(e) => (window.location.href = "/")}>
            <img src={logo} className="h-9" alt="Logo" />
          </button>
        </div>
        <span
          onClick={(e) => (window.location.href = "/offer")}
          className="flex flex-1 cursor-pointer hover:text-indigo-800 justify-end ml-auto  decoration-indigo-800 underline-offset-8 underline  text-xl font-light whitespace-nowrap"
        >
          How it works ?
        </span>
      </div>
    </nav>
  )
}

export default Navbar
