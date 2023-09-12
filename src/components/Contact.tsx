import Navbar from "./Navbar"

const Contact: React.FC = () => {
  return (
    <>
      <div className="h-screen ">
        <Navbar />
        <div>
          <div className="pt-24 px-10 sm:px-32 w-full sm:w-4/6">
            <div>
              <h1 className="text-5xl font-light mb-2">Contact</h1>
              <p className="text-xl text-gray-400 font-extralight">
                Please do not hesitate to contact us.
              </p>
            </div>
            <div className="mt-5 sm:mt-10 grid gap-5 sm:gap-10">
              <div>
                <p className="text-xl text-gray-400 font-thin">
                  If you have questions about your project or our work status,
                  you can contact as by email at
                </p>
                <p
                  onClick={() =>
                    (window.location.href = "mailto:contact@partenrsstudio.com")
                  }
                  className="cursor-pointer hover:text-indigo-300 text-xl font-extralight"
                >
                  contact@partenrsstudio.com
                </p>
                <p className="text-xl inline-block text-gray-400 font-extralight">
                  or our office number :
                </p>
                <p className="ml-1 inline-block text-xl font-extralight">
                  +1 (555) 789-1011
                </p>
              </div>
              <div>
                <p className="text-xl text-gray-400 font-extralight">
                  Also, if you would like to contact directly with one of our
                  employees, you can do it by clicking
                </p>
                <p
                  onClick={(e) => (window.location.href = "/team")}
                  className="inline-block text-xl font-extralight underline underline-offset-4 hover:decoration-indigo-300 decoration-indigo-900 cursor-pointer hover:text-indigo-200"
                >
                  here
                </p>
                <p className="text-xl text-gray-400 font-extralight inline-block ml-2">
                  and choosing one of provided emails.
                </p>
              </div>
              <p className="text-xl text-gray-400 font-extralight">
                Our office is open Monday to Friday 9am - 6pm
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
