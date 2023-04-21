import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Form from "./components/form/Form"
import Homepage from "./components/Homepage"

function App() {
  return (
    <div className="App bg-gray-50">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Form" element={<Form />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
