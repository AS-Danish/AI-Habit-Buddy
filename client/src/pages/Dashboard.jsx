import React, { useState, useEffect } from 'react';
import OnBoardingModel from '../components/OnBoardingModel';
import { useUser, UserButton, SignOutButton } from '@clerk/clerk-react'; // Import SignOutButton
import axios from 'axios';
import logo from '../assets/sample.webp'

// Import FontAwesome components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faGauge, faTableColumns, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const Dashboard = () => {
  const [showModal, setShowModal] = useState(false);
  const { user } = useUser();
  const userId = user ? String(user.id) : null;

  useEffect(() => {
    if (userId) {
      axios.post('http://localhost:5000/api/userId', { userId })
        .then(response => {
          if (response.data.isFirstLogin) {
            setShowModal(true);
          }
        })
        .catch(error => {
          console.error('Error Sending UserID to Backend: ', error);
        });
    }
  }, [userId]);

  return (
    <>
      <OnBoardingModel isOpen={showModal} onClose={() => setShowModal(false)} />
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              <button
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              >
                <span className="sr-only">Open sidebar</span>
                {/* Replace SVG with FontAwesomeIcon */}
                <FontAwesomeIcon icon={faBars} className="w-6 h-6" />
              </button>
              <a href="/dashboard" className="flex ms-2 md:me-24">
                <img src={logo} className="h-8 me-3" alt="FlowBite Logo" />
                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap">AI Habit Buddy</span>
              </a>
            </div>
            <div className="flex items-center">
              <div className="flex items-center ms-3">
                <UserButton />
              </div>
            </div>
          </div>
        </div>
      </nav>

      <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0" aria-label="Sidebar">
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white">
          <ul className="space-y-2 font-medium">
            <li>
              <a href="/dashboard" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                {/* Replace SVG with FontAwesomeIcon */}
                <FontAwesomeIcon icon={faGauge} className="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" />
                <span className="ms-3">Dashboard</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                {/* Replace SVG with FontAwesomeIcon */}
                <FontAwesomeIcon icon={faTableColumns} className="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" />
                <span className="flex-1 ms-3 whitespace-nowrap">Analytics</span>
              </a>
            </li>
            <li>
              <div className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group cursor-pointer">
                {/* Replace SVG with FontAwesomeIcon */}
                <FontAwesomeIcon icon={faSignOutAlt} className="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" />
                <SignOutButton>
                <span className="flex-1 ms-3 whitespace-nowrap">Sign Out</span>
                </SignOutButton>
              </div>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Dashboard;
