
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Hospital, Calendar, User, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';

export const BottomNavbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const navItems = [
    { icon: Hospital, label: 'Home', path: '/' },
    { icon: Calendar, label: 'Appointments', path: '/appointments' },
    { icon: User, label: 'Doctors', path: '/doctors' },
    { icon: Phone, label: 'Contact', path: '/contact' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 h-16 bg-white border-t border-gray-200 flex items-center justify-around z-10">
      {navItems.map((item) => {
        const isActive = location.pathname === item.path;
        return (
          <button
            key={item.label}
            onClick={() => navigate(item.path)}
            className={cn(
              "flex flex-col items-center justify-center w-full h-full",
              isActive ? "text-hospital-blue" : "text-gray-500"
            )}
          >
            <item.icon size={20} />
            <span className="text-xs mt-1">{item.label}</span>
          </button>
        );
      })}
    </div>
  );
};
