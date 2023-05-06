import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Form from "./components/form/Form"
import Homepage from "./components/Homepage"
import Offer from "./components/Offer"
import AdministrationPanel from "./components/AdministrationPanel"

function App() {
  return (
    <div className="App ">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/form" element={<Form />} />
          <Route path="/offer" element={<Offer />} />
          <Route path="/contact" element={""} />
          <Route path="/admin" element={<AdministrationPanel />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
