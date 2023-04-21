import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Form from "./components/form/Form"
import Homepage from "./components/Homepage"
import ProjectsCarousel from "./components/ProjectsCarousel"

function App() {
  return (
    <div className="App ">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Form" element={<Form />} />
          <Route path="/Projects" element={<ProjectsCarousel />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
