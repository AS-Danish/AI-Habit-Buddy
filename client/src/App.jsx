import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { useAuth } from '@clerk/clerk-react'; // Clerk useAuth hook
import Dashboard from "./pages/Dashboard";
import LandingPage from "./pages/LandingPage";
import Navbar from "./components/Navbar";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { useEffect } from 'react';

function AppRoutes() {
  const { isSignedIn, isLoaded } = useAuth(); // Get session status and authentication state
  const navigate = useNavigate(); // Navigation hook

  useEffect(() => {
    // Once the auth is loaded, if the user is already signed in, redirect to the dashboard
    if (isLoaded && isSignedIn) {
      navigate('/dashboard'); // Redirect to dashboard if signed in
    }
  }, [isLoaded, isSignedIn, navigate]);

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="login" element={<SignIn />} />
      <Route path="signup" element={<SignUp />} />
      <Route
        path="/dashboard"
        element={isLoaded && isSignedIn ? <Dashboard /> : <Navigate to="/login" />}
      />
    </Routes>
  );
}

function App() {
  const { isSignedIn, isLoaded } = useAuth(); // Get session status

  return (
    <Router>
      {/* Render Navbar only if the user is NOT signed in */}
      {!isSignedIn && <Navbar />}
      
      <AppRoutes /> {/* Keep AppRoutes within the Router */}
    </Router>
  );
}

export default App;
