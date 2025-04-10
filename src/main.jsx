import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import SearchProvider from './context/searchProvider.jsx'
createRoot(document.getElementById('root')).render(
  <SearchProvider>
    <App />
  </SearchProvider>,
)
