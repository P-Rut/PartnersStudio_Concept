import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Form from "./components/form/Form"
import Homepage from "./components/HomePage"
import Offer from "./components/Offer"
import Team from "./components/Team"
import Contact from "./components/Contact"
import Chat from "./components/liveChat/Chat"
import AdministrationPanel from "./components/administration/AdministrationPanel"
import InquiryDetails from "./components/administration/InquiryDetails"
import OpenChat from "./components/liveChat/OpenChat"

function App() {
  return (
    <div className="App ">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/form" element={<Form />} />
          <Route path="/offer" element={<Offer />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/admin" element={<AdministrationPanel />} />
          <Route path="/admin/:id" element={<InquiryDetails />} />
        </Routes>
        <OpenChat />
      </BrowserRouter>
    </div>
  )
}

export default App
