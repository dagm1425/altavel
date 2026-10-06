import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// The prerendered HTML ships page-specific head tags (marked data-seo) for crawlers and link
// previews. React's <Seo> renders its own once the app starts, so remove the static ones first
// to avoid duplicates.
document.querySelectorAll('[data-seo]').forEach((element) => element.remove())

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
