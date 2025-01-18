import { SignIn } from '@clerk/clerk-react'

const SigninPage = () => {
  return (
    <div className='flex items-center justify-center h-screen'>
        <SignIn 
        routing='path'
        path='/sign-in'
        signUpUrl='/sign-up'
        forceRedirectUrl={'/'}
        />
    </div>
  )
}

export default SigninPage