import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ClerkProvider } from '@clerk/clerk-react'
import {dark} from '@clerk/themes'//remove for light theme
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Import your publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}
    appearance={{
      baseTheme:undefined 
    }}
    signInUrl='/sign-in'
    signUpUrl='/sign-up'>
    <App />
    <ToastContainer/>
    </ClerkProvider>
  </StrictMode>,
)
