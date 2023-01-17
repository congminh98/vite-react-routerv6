import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom"
// import './App.scss'
import './index.css'
import 'aos/dist/aos.css';
import router from "./routes"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AOS from 'aos';
AOS.init({
  disable: 'mobile',
  once: false,
  mirror: false,
  throttleDelay: 99
});
// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 10,
      retry: 5
    },
  },
})
const Loading = lazy(() => import("@/shared/Loading"));
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <Suspense fallback={<Loading />}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </Suspense>
  </React.StrictMode>,
);
