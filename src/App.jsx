import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Root from "./pages/Root"
import HomePage from "./pages/HomePage"
import Cart from "./pages/Cart"
import Products from "./pages/Products"
import ProductDetails from "./pages/ProductDetails"
import Checkout from "./pages/Checkout"
const router = createBrowserRouter([
  { path: "/", 
    element: <Root/> ,
    children: [
      { path: '/', element: <HomePage/> },
      { path: '/products', element: <Products/> },
      { path: '/cart', element: <Cart/> },
      { path: '/product/:id', element: <ProductDetails/> },
      { path: '/checkout', element: <Checkout/>}
    ]
  }
])

export default function App() {
  return <RouterProvider router={router} />
};