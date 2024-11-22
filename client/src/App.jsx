import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import LandingPage from "./pages/LandingPage";
import Navbar from "./components/Navbar";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";


function App() {
  return (
    // Opting into the React Router v7 future flags for startTransition and relativeSplatPath
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Navbar/>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="login" element={<SignIn/>} />
        <Route path="signup" element={<SignUp/>} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
