import Navbar from "./Navbar"

const img = {
  backgroundImage:
    "url('https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80')",
}

const AboutUs: React.FC = () => {
  return (
    <div className="min-h-full ">
      <Navbar />
      <div className="grid grid-cols-5  h-full mx-10 my-14">
        <div className=" mt-28 col-span-3 ">
          <p className="text-5xl tracking-tight line-clamp-4 mr-10 font-light leading-tight ">
            We aim to simplify whole process of architectural design. <br />
            From interior to exterior with us it’s always the easiest way.
          </p>
          <p className="text-2xl mt-36 font-thin underline decoration-indigo-800 underline-offset-8">
            More about us
          </p>
        </div>
        <div className="w-full col-span-2  ">
          <div style={img} className="h-full w-full bg-fit bg-center" />
        </div>
        <div />
      </div>
    </div>
  )
}

export default AboutUs
