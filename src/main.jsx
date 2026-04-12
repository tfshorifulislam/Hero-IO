import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { route } from './Router/Router'
import InstalledAppsContext from './Context/InstalledAppsContext'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <InstalledAppsContext>
      <RouterProvider router={route} />
    </InstalledAppsContext>
  </StrictMode>,
)
