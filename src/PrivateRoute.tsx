import { RedirectToSignIn, SignedIn, SignedOut } from '@clerk/clerk-react'
import { Outlet } from 'react-router-dom'

const PrivateRoute = () => {
  return (
    <>
    <SignedIn>
        <Outlet />
        </SignedIn>
    <SignedOut>
        <RedirectToSignIn/>
    </SignedOut>
    </>
  )
}

export default PrivateRoute