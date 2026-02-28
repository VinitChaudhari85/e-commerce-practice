import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Root from "./pages/Root"
import HomePage from "./pages/HomePage"
import Cart from "./pages/Cart"
import Products from "./pages/Products"
//STEP 1: ROUTE THINGS UP
//import createBrowserRouter and RouterProvider for creating and providing router/routes
const router = createBrowserRouter([
  { path: "/", 
    element: <Root/> ,
    children: [
      { path: '/', element: <HomePage/> },
      { path: '/products', element: <Products/> },
      { path: '/cart', element: <Cart/> },
    ]
    
  }
])

export default function App() {
  return <RouterProvider router={router} />
};