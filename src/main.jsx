import React from 'react'
import ReactDOM from 'react-dom/client'
import { createRoutesFromElements, Route, RouterProvider, createBrowserRouter } from "react-router-dom";
import App from './App.jsx'
import './index.css'
import Home from './Screen/Home.jsx';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<App />} path='/'>
      <Route element={<Home />} index={true} path='/' />
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
