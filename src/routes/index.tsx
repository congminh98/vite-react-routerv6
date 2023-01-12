import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import { loader as appLoader } from "./app";
import Team from "@/pages/Team";
import { loader as teamLoader, action as teamAction } from "./team";
import ErrorPage from "@/error-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: appLoader,
    errorElement: <ErrorPage />
  },
  {
    path: "/team",
    element: <Team />,
    // loader: teamLoader,
    // action: teamAction,
    errorElement: <ErrorPage />,
    children: [
      {
        // path: "team",
        // element: ,
        // loader: teamLoader,
      },
    ],
  }
]);

export default router;
