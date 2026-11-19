import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import './index.css'
import App from './App.jsx'
import { FavoritProvider } from './FavoritContext.jsx'
import { AuthProvider } from './AuthContext.jsx'

// BrowserRouter membuat seluruh aplikasi bisa membaca alamat di browser.
// FavoritProvider membuat seluruh aplikasi bisa membaca daftar favorit.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <FavoritProvider>
          <App />
        </FavoritProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
