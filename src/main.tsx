import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom"
// import './App.scss'
import './index.css'
import 'aos/dist/aos.css';
import router from "./routes"
import AOS from 'aos';
AOS.init();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Suspense fallback={<>Loading</>}>
      <RouterProvider router={router} />
    </Suspense>
  </React.StrictMode>,
);
