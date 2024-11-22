import { SignUp as ClerkSignUp } from '@clerk/clerk-react'
import React from 'react'

const SignUp = () => {
  return (
    <div className="flex items-center justify-center h-screen pt-20">
        <ClerkSignUp signInUrl="/login" forceRedirectUrl={"/dashboard"}/>
    </div>
  )
}

export default SignUp