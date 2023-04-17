import logo from "../assets/Desktop - 1.png"

const Navbar: React.FC = () => {
  return (
    <nav className="border-gray-900 border-b w-screen ">
      <div className="max-w-screen flex flex-wrap items-center justify-between  p-4">
        <button className="flex-1 space-y-1.5">
          <span className="block w-8 h-0.5 bg-indigo-800"></span>
          <span className="block w-8 h-0.5 bg-indigo-800"></span>
          <span className="block w-8 h-0.5 bg-indigo-800"></span>
          <span className="block w-8 h-0.5 bg-indigo-800"></span>
        </button>

        <div className="flex-1 items-center invisible lg:visible">
          <img src={logo} className="h-9" alt="Logo" />
        </div>
        <span className=" text-indigo-800 underline self-center text-2xl font-light whitespace-nowrap">
          How does it work ?
        </span>
      </div>
    </nav>
  )
}

export default Navbar
