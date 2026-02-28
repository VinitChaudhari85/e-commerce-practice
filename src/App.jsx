import { createBrowserRouter, RouterProvider } from "react-router-dom"
import HomePage from "./pages/HomePage"
//STEP 1: ROUTE THINGS UP
//import createBrowserRouter and RouterProvider for creating and providing router/routes
const router = createBrowserRouter([
  { path: "/", element: <HomePage/> }
])

export default function App() {
  return <RouterProvider router={router} />
};