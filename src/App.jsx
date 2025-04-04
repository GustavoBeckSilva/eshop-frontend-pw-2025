import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import '@popperjs/core/dist/cjs/popper.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Menu from './componentes/telas/menu';
import Home from './componentes/telas/home';
import Sobre from './componentes/telas/sobre';
import Categoria from './componentes/telas/categoria/Categoria';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Menu />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/sobre",
        element: <Sobre />,
      }     
      ,
      {
        path: "/categorias",
        element: <Categoria />,
      }         
    ]
  }

]);

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
