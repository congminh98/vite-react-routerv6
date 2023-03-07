import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import { loader as appLoader } from "./app";
import Team from "@/pages/Team";
import { loader as teamLoader, action as teamAction } from "./team";
import ErrorPage from "@/common/ErrorPage";
import queryClient from "@/utils/commons";
import Login from "@/pages/Login";
import VideoCall from "@/pages/video-call";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // loader: appLoader(queryClient),
    errorElement: <ErrorPage />
  },
  {
    path: "/team",
    element: <Team />,
    // loader: teamLoader,
    // action: teamAction,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage />
  },
  {
    path: "/video-call",
    element: <VideoCall />,
    errorElement: <ErrorPage />
  }
]);

export default router;
