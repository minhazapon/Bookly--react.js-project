import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root';
import Home from './Home';
import About from './about file/About';
import Blogs from './blogs file/Blogs';
import Contact from './contact file/Contact';
import Shop from './Shop files/Shop';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root> ,
    children: [
      {
        path: "/",
        element:  <Home></Home>  ,
      },
      {
        path: "/about",
        element:    <About></About>    ,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs> ,
      },
      {
        path: "/contact",
        element: <Contact></Contact>  ,
      },
      {
        path: "/shop",
        element:   <Shop></Shop>  ,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
