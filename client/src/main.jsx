import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ClerkProvider } from '@clerk/clerk-react';

const cleark_key = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if(!cleark_key){
  throw new Error("Key was not found!");
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={cleark_key} afterSignOutUrl="/">
      <App />
    </ClerkProvider>
  </StrictMode>,
)
