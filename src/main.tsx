import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeProvider } from "./components/theme-provider"
import { CustomToaster } from './components/elements/Toaster.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <App />
      <CustomToaster/>
    </ThemeProvider>
  </React.StrictMode>,
)
