import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import router from './Routes/router'
import { Toaster } from 'sonner'
import { Provider as ReduxProvider } from 'react-redux'
import { store } from './Redux/store'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ReduxProvider store={store}>
      <RouterProvider router={router} />,
      <Toaster position="top-center" richColors />
    </ReduxProvider>
  </StrictMode>,
)
