import "./App.css"
import Form from "./components/Form"
import HomePage from "./components/HomePage"
import Navbar from "./components/Navbar"

function App() {
  return (
    <div className="App bg-gray-50">
      <Navbar />
      {/* <HomePage /> */}
      <Form />
    </div>
  )
}

export default App
