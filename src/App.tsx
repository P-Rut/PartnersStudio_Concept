import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Form from "./components/form/Form";
import Homepage from "./components/HomePage";
import Offer from "./components/Offer";

function App() {
  return (
    <div className="App ">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/form" element={<Form />} />
          <Route path="/offer" element={<Offer />} />
          <Route path="/contact" element={""} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
