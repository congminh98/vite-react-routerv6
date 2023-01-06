import { useLoaderData } from "react-router-dom";
import HomePage from "@/pages/HomePage";
import Introduction from "@/components/Introduction";

function App() {
  const teams = useLoaderData();
  return (
    <div className="App">
      <div className="wedding-page">
        <HomePage teams={teams} />
        <Introduction />
      </div>
    </div>
  )
}

export default App
