import Fireworks, { FireworksHandlers } from "@fireworks-js/react";
import { lazy, useRef } from "react";
import { useLoaderData } from "react-router-dom";
import { FireworkOptions } from "./utils";
// Lazy load components
const HomePage = lazy(() => import('@/pages/HomePage'));

function App() {
  const teams = useLoaderData();
  const ref = useRef<FireworksHandlers>(null);

  return (
    <>
      <div className="App">
        <div className="wedding-page">
          <HomePage teams={teams} />
        </div>
      </div>
      {/* <Fireworks
        ref={ref}
        options={FireworkOptions}
        style={{
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          position: 'fixed',
          background: 'transparent',
          zIndex: -1
        }}
      /> */}
    </>
  )
}

export default App
