import { lazy } from "react";
import { useLoaderData } from "react-router-dom";
// Lazy load components
const HomePage = lazy(() => import('@/pages/HomePage'));
const Introduction = lazy(() => import('@/components/Introduction'));

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
