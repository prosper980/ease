import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { routes } from './routes'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { googleClientId } from '../secrets';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <GoogleOAuthProvider clientId={`${googleClientId}`}>
      <React.StrictMode>
        <RouterProvider router={routes} />
      </React.StrictMode>
  </GoogleOAuthProvider>  
)

