import React, { Component } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Header from './Components/Header/Header.jsx'
import Analog from './Components/Analog/Analog.jsx'
import Layout from './Components/Clock-layout/Layout.jsx'
import Template from './Components/Template/Template.jsx'
import Digital from './Components/Digital/Digital.jsx'
import Login from './Components/Login/Login.jsx'
import Sign from './Components/Sign/Sign.jsx'
import Projects from './Components/Projects/Projects.jsx'





const router = createBrowserRouter([
    {
      path: "/",
      element: <Template />,
      children:[
        {
          path: "analog",
          element: <Analog />
        },
        {
          path: "custom",
          element: <Layout />
        },
        {
          path: "digital",
          element: <Digital />
        },
        {
          path: "login",
          element: <Login />
        },
        {
          path: "sign-up",
          element: <Sign />
        },
        {
          path: "/projects",
          element: <Projects />
        }
      ]
      
    }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
