import dynamic from "next/dynamic";

const AppComponent = dynamic(() => import("../App"), { ssr: false });

function App() {
  return (
    <div className="App ">
      <AppComponent></AppComponent>
    </div>
  );
}

export default App;
