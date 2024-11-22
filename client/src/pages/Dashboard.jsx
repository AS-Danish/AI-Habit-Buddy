import React, { useState, useEffect } from 'react';
import OnBoardingModel from '../components/OnBoardingModel';

const Dashboard = () => {
  const [showModal, setShowModal] = useState(false);

  // Show the modal when the user navigates to the dashboard
  useEffect(() => {
    setShowModal(true); // Trigger modal when the component mounts
  }, []);

  return (
    <div>
      <h1>Welcome to the Dashboard</h1>

      {/* Modal component, only visible if showModal is true */}
      <OnBoardingModel isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
};

export default Dashboard;
