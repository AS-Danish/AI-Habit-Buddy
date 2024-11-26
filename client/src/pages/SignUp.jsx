import { SignUp as ClerkSignUp, useAuth } from '@clerk/clerk-react';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const { isSignedIn } = useAuth(); // Hook to check authentication status
  const navigate = useNavigate();

  useEffect(() => {
    if (isSignedIn) {
      navigate('/dashboard'); // Redirect if already signed in
    }
  }, [isSignedIn, navigate]);

  return (
    <div className="flex items-center justify-center h-screen pt-20">
      <ClerkSignUp signInUrl="/login" forceRedirectUrl="/dashboard" />
    </div>
  );
};

export default SignUp;
