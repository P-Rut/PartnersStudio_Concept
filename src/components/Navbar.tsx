import logo from "../assets/Desktop - 1.png"

const Navbar: React.FC = () => {
  return (
    <nav className="border-gray-900 flex border-b w-screen ">
      <div className="flex-1 flex justify-center mr-auto py-4 px-10">
        <button className="flex-1 space-y-1.5">
          <span className="block w-8 h-0.5 bg-indigo-800"></span>
          <span className="block w-8 h-0.5 bg-indigo-800"></span>
          <span className="block w-8 h-0.5 bg-indigo-800"></span>
          <span className="block w-8 h-0.5 bg-indigo-800"></span>
        </button>

        <div className="mx-36 invisible lg:visible">
          <img src={logo} className="h-9" alt="Logo" />
        </div>
        <span className="flex flex-1 justify-end ml-auto text-indigo-800 underline  text-xl font-light whitespace-nowrap">
          How it works ?
        </span>
      </div>
    </nav>
  )
}

export default Navbar
