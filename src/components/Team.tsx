import Navbar from "./Navbar"

const Team: React.FC = () => {
  const founderProfile = {
    backgroundImage:
      "url('https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=644&q=80')",
  }
  const designProfile = {
    backgroundImage:
      "url('https://images.unsplash.com/photo-1506863530036-1efeddceb993?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1044&q=80')",
  }
  const directorProfile = {
    backgroundImage:
      "url('https://images.unsplash.com/photo-1540649903767-9ad36473d182?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')",
  }
  const architectProfile = {
    backgroundImage:
      "url('https://images.unsplash.com/photo-1614950326208-f267d274c8df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80')",
  }
  const juniorProfile = {
    backgroundImage:
      "url('https://images.unsplash.com/photo-1542206395-9feb3edaa68d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80')",
  }
  return (
    <>
      <Navbar />
      <div className="py-20 sm:px-40 sm:grid sm:grid-rows-5 h-full sm:h-full text-sm sm:text-base gap-16  tracking-tighter sm:tracking-normal">
        {/* Founder */}
        <div className="gap-8 sm:h-36 h-42 flex mb-10 sm:mb-0 p-2 sm:p-0">
          <div>
            <div
              style={founderProfile}
              className="bg-center h-full w-32 min-w-full bg-cover"
            ></div>
          </div>

          <div>
            <div className="h-full grid content-between">
              <div className="flex">
                <h1 className="font-light text-indigo-800 mr-1">Founder </h1>
                <h1 className="font-light">- John Smith</h1>
              </div>
              <p className="font-light leading-6">
                John has over 20 years of experience in the industry and founded
                the architectural studio with a vision to create spaces that
                inspire and delight people.
              </p>
              <div className="flex-col sm:flex gap-2">
                <p
                  onClick={() =>
                    (window.location.href =
                      "mailto:johnsmith@partnersstudio.com")
                  }
                  className="cursor-pointer  hover:text-indigo-300 mr-1 font-light underline underline-offset-4 decoration-indigo-800"
                >
                  johnsmith@partnersstudio.com
                </p>
                <p className="font-light">+1 (555) 123-4567</p>
              </div>
            </div>
          </div>
        </div>
        {/* Head of Design */}
        <div className="flex sm:h-36 h-42 gap-8 mb-10 sm:mb-0 p-2 sm:p-0">
          <div>
            <div
              style={designProfile}
              className="bg-center h-full w-32 min-w-full bg-cover"
            ></div>
          </div>
          <div>
            <div className="grid content-between h-full">
              <div className="flex">
                <h1 className="font-light text-indigo-800 mr-1">
                  Head of Desing
                </h1>
                <h1 className="font-light">- Sarah Lee</h1>
              </div>
              <p className="font-light leading-6">
                Sarah leads the design team at the studio, and is passionate
                about creating spaces that are not only beautiful, but also
                functional and sustainable.
              </p>
              <div className="flex-col sm:flex gap-2">
                <p
                  onClick={() =>
                    (window.location.href =
                      "mailto:sarahlee@architecturalstudio.com")
                  }
                  className="cursor-pointer hover:text-indigo-300 mr-1  font-light underline underline-offset-4 decoration-indigo-800"
                >
                  sarahlee@architecturalstudio.com
                </p>

                <p className="font-light">+1 (555) 234-5678</p>
              </div>
            </div>
          </div>
        </div>
        {/* Director of Marketing & Business Development */}
        <div className="flex sm:h-36 h-42 gap-8 mb-10 sm:mb-0 p-2 sm:p-0">
          <div>
            <div
              style={directorProfile}
              className="bg-center h-full w-32 min-w-full bg-cover"
            ></div>
          </div>
          <div>
            <div className="grid content-between h-full">
              <div className="flex ">
                <h1 className="font-light text-indigo-800 mr-1">Marketing</h1>
                <h1 className="font-light">- Michael Chen</h1>
              </div>
              <p className="font-light leading-6">
                Michael is responsible for the marketing and business
                development efforts of the studio. He has a strong background in
                marketing and is passionate about helping clients achieve their
                goals.
              </p>
              <div className="flex-col sm:flex gap-2">
                <p
                  onClick={() =>
                    (window.location.href =
                      "mailto:m.chen@architecturalstudio.com")
                  }
                  className="cursor-pointer hover:text-indigo-300 mr-1 font-light underline underline-offset-4 decoration-indigo-800"
                >
                  m.chen@architecturalstudio.com
                </p>
                <p className="font-light">+1 (555) 345-6789</p>
              </div>
            </div>
          </div>
        </div>
        {/* Project Architect */}
        <div className="flex sm:h-34 h-42 gap-8 mb-10 sm:mb-0 p-2 sm:p-0">
          <div>
            <div
              style={architectProfile}
              className="bg-top h-full w-32 min-w-full bg-cover"
            ></div>
          </div>
          <div>
            <div className="grid content-between h-full">
              <div className="flex">
                <h1 className="font-light text-indigo-800 mr-1">
                  Project Architect
                </h1>
                <h1 className="font-light">- David Singh</h1>
              </div>
              <p className="font-light leading-5">
                David is an experienced project architect with a keen eye for
                detail. He works closely with clients to understand their needs
                and translate them into practical and beautiful design
                solutions.
              </p>
              <div className="flex-col sm:flex gap-2">
                <p
                  onClick={() =>
                    (window.location.href =
                      "mailto:davidsingh@partnersstudio.com")
                  }
                  className="cursor-pointer hover:text-indigo-300 mr-1 font-light underline underline-offset-4 decoration-indigo-800"
                >
                  davidsingh@partnersstudio.com
                </p>
                <p className="font-light">+1 (555) 456-7890</p>
              </div>
            </div>
          </div>
        </div>
        {/* Junior Architect */}
        <div className="flex sm:h-32 h-42 gap-8 p-2 sm:p-0">
          <div>
            <div
              style={juniorProfile}
              className="bg-center h-full w-32 min-w-full bg-cover"
            ></div>
          </div>
          <div>
            <div className="grid content-between h-full">
              <div className="flex">
                <h1 className="font-light text-indigo-800 mr-1">
                  Junior Architect
                </h1>
                <h1 className="font-light">- Emily Martinez</h1>
              </div>
              <p className="font-light leading-5">
                Emily is a talented and enthusiastic junior architect who is
                passionate about sustainability and eco-friendly design. She is
                always eager to learn and grow in her role.
              </p>
              <div className="flex-col sm:flex gap-2">
                <p
                  onClick={() =>
                    (window.location.href =
                      "mailto:emilymartinez@partnersstudio.com")
                  }
                  className=" cursor-pointer hover:text-indigo-300 mr-1 font-light underline underline-offset-4 decoration-indigo-800"
                >
                  emilymartinez@partnersstudio.com
                </p>
                <p className="font-light">+1 (555) 567-8901</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Team
