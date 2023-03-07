import Fireworks, { FireworksHandlers } from "@fireworks-js/react";
import { useLocation } from "react-router-dom";
import * as React from "react";
import AudioPlay from "@/shared/AudioPlay";
import HomePage from "@/pages/HomePage";
import Loading from "@/shared/Loading";
import Cursor from "@/shared/Cursor";
import { FireworkOptions } from "./utils";
import { useCookies } from "react-cookie";

function App() {
  // const ref = React.useRef<FireworksHandlers>(null);
  const [cookies, setCookie] = useCookies();
  const { hash } = useLocation();
  React.useEffect(() => {
    if (hash) {
      const access_token = hash.substring(1)?.split("&")?.find(elem => elem.startsWith("access_token"))?.split("=")[1] as string;
      setCookie("access_token", access_token, { path: "/", expires: new Date(Date.now() + (3600 * 60 * 24)) });
      window.location.hash = "";
    }
  }, [hash]);

  return (
    <>
      <React.Suspense fallback={<Loading />}>
        <div className="App">
          <div className="wedding-page">
            <HomePage />
          </div>
          {/* <Cursor /> */}
          {/* <AudioPlay /> */}
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
      </React.Suspense>
    </>
  )
}

export default App
