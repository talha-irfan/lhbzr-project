import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import App from './App.jsx'
import About from './about.jsx'
import Work from './work'
import Inwork from './inswork.jsx'



const router = createBrowserRouter([
    {
        path: "/", 
        element: <App /> 
    },
    
    {
        path: "/about", 
        element: <About />
    },

    {
        path: "/work", 
        element: <Work />
    },

    {
        path: "/inswork", 
        element: <Inwork />
    },
])

createRoot(document.getElementById('root')).render(

    <StrictMode>
    
        <RouterProvider router={router} />
    

    </StrictMode>
)

