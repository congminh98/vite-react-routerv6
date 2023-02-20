import Fireworks, { FireworksHandlers } from "@fireworks-js/react";
import { useLoaderData } from "react-router-dom";
import * as React from "react";
import AudioPlay from "@/shared/AudioPlay";
import HomePage from "@/pages/HomePage";
import Loading from "@/shared/Loading";
import Cursor from "@/shared/Cursor";
import { FireworkOptions } from "./utils";
import { loader } from "@/routes/app";
import { useQuery } from "@tanstack/react-query";
import { getAccessToken, useGetAccessToken } from "@/api/music";
import { useCookies } from "react-cookie";

function App() {
  const [cookies, setCookie] = useCookies(['access_token']);
  const { access_token, expires_in } = useLoaderData() as Awaited<ReturnType<ReturnType<typeof loader>>>;
  setCookie("access_token", access_token, { path: '/', expires: new Date(Date.now() + expires_in * 60 * 24) });
  sessionStorage.setItem("access_token", access_token);
  const ref = React.useRef<FireworksHandlers>(null);

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
