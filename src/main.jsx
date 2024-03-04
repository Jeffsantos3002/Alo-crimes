import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import Navbar from './components/Navbar.jsx'
import MainRoutes from "./routes.jsx"

import {
  BrowserRouter,
  RouterProvider,
} from "react-router-dom";

// const router =  createBrowserRouter([])

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Navbar/>
    <MainRoutes/>
  </BrowserRouter>,
)
