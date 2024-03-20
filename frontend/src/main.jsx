import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import MainRoutes from "./routes.jsx"

import {
  BrowserRouter,
  RouterProvider,
} from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter class="">
    <Navbar/>
    <MainRoutes/>
    <Footer/>
  </BrowserRouter>,
)
