
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"

import Layout from "./components/Layout"
import Shop from "./pages/Shop"
import ProductDetails from "./pages/ProductDetails"
import Contact from "./pages/Contact"


let router = createBrowserRouter(createRoutesFromElements(
  <Route element={<Layout/>}>
    <Route  index element={<Home/>}></Route>
    <Route  path="/shop" element={<Shop/>}></Route>
    <Route  path="/shop/:id" element={<ProductDetails/>}></Route>
    <Route  path="/contact" element={<Contact/>}></Route>



  </Route>


))


function App() {

  return (
    <>
    <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
