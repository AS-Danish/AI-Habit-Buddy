import React from 'react';
import HEROBG from '../assets/Hero-BG.jpeg'; // Correct path based on your file structure
import Features from '../components/Features';
import AboutUs from '../components/AboutUs';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';

const LandingPage = () => {
  return (
    <>
    <div
      className="h-screen w-full bg-cover bg-center mt-10 p-20 flex items-center justify-center" // Added flex, items-center, and justify-center
      style={{ backgroundImage: `url(${HEROBG})` }} // Dynamically set the background image
    >
      <button 
        type="button" 
        className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-md px-5 py-3 me-2 mb-5 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
      >
        Start Your Habits Journey Now
      </button>
    </div>
    <Features/>
    <AboutUs/>
    <ContactForm/>
    <Footer/>

    </>
  );
};

export default LandingPage;
