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
  mirror: false
});
// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 10,
    },
  },
})
const Loading = lazy(() => import("@/shared/Loading"));

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<Loading />}>
        <RouterProvider router={router} />
      </Suspense>
    </QueryClientProvider>
  </React.StrictMode>,
);
