import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Form from "./components/form/Form"
import HomePage from "./components/HomePage"
import Navbar from "./components/Navbar"

function App() {
  return (
    <div className="App bg-gray-50">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Form" element={<Form />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
