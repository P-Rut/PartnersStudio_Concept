// import "./App.css"
import dynamic from "next/dynamic"
import "../styles/globals.css"

const AppRouter = dynamic(() => import("../App"), { ssr: false })

function App() {
  return (
    <div>
      <AppRouter />
    </div>
  )
}

export default App
