import { SignUp } from "@clerk/clerk-react"


const SignupPage = () => {
  return (
    <div className='flex items-center justify-center h-screen'>
        <SignUp
        routing='path'
        path='/sign-up'
        signInUrl='/sign-in'
        forceRedirectUrl={'/'}
        />
    </div>
  )
}

export default SignupPage