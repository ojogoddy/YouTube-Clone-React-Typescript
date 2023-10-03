import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { Index } from './routes/AllRoutes'
import GlobalStyles from './assets/GlobalStyles'
import { GlobalProvider } from './services/GlobalContext'
// import App from './App.tsx'
// import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
   <GlobalProvider>
   <GlobalStyles />
    <RouterProvider router={Index} />
   </GlobalProvider>
  </React.StrictMode>,
)
