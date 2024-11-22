import { SignIn as ClerkSignIn } from '@clerk/clerk-react';
import React from 'react';

const SignIn = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <ClerkSignIn signUpUrl="/signup" forceRedirectUrl="/dashboard" />
    </div>
  );
};

export default SignIn;
