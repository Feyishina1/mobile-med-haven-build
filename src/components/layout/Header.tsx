
import React from 'react';
import { useLocation } from 'react-router-dom';

export const Header = () => {
  const location = useLocation();
  
  // Set page title based on current route
  const getPageTitle = () => {
    switch (location.pathname) {
      case '/':
        return 'MedCare Hospital';
      case '/appointments':
        return 'Appointments';
      case '/doctors':
        return 'Find Doctors';
      case '/contact':
        return 'Contact Us';
      case '/medical-records':
        return 'Medical Records';
      case '/doctor-details':
        return 'Doctor Profile';
      case '/book-appointment':
        return 'Book Appointment';
      case '/video-consultation':
        return 'Video Consultation';
      case '/chat':
        return 'Secure Chat';
      default:
        return 'MedCare Hospital';
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-200 flex items-center justify-center z-10">
      <h1 className="text-xl font-semibold text-hospital-blue">{getPageTitle()}</h1>
    </div>
  );
};
