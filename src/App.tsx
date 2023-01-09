import { lazy } from "react";
import { useLoaderData } from "react-router-dom";
// Lazy load components
const HomePage = lazy(() => import('@/pages/HomePage'));

function App() {
  const teams = useLoaderData();

  return (
    <div className="App">
      <div className="wedding-page">
        <HomePage teams={teams} />
      </div>
    </div>
  )
}

export default App
