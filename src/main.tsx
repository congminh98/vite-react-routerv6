import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
// import './App.scss'
import './index.css'
import 'aos/dist/aos.css';
import router from "./routes"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AOS from 'aos';
import queryClient from "@/utils/commons";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

AOS.init({
  disable: 'mobile',
  once: false,
  mirror: false,
  throttleDelay: 99
});
// 
const Loading = lazy(() => import("@/shared/Loading"));

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<Loading />}>
        <RouterProvider router={router} />
      </Suspense>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>,
);
