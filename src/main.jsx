import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route,RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from "./component/Home/Home.jsx";
import Aboutme from "./component/Aboutme/Aboutme.jsx"
import Projects from "./component/Projects/Projects.jsx";
import Github from './component/Githunb/Github.jsx'


const router = createBrowserRouter (
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path="aboutme" element={<Aboutme/>}/>
      <Route path="projects" element={<Projects />} />
      <Route path='github' element={<Github />} />
      
    </Route>
    
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
