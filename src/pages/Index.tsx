
import React from 'react';
import { Hospital, Calendar, User, Phone, Syringe, Thermometer, Bandage, BriefcaseMedical } from 'lucide-react';
import { ServiceCard } from '@/components/ui/ServiceCard';
import { Header } from '@/components/layout/Header';
import { BottomNavbar } from '@/components/layout/BottomNavbar';

const Index = () => {
  const services = [
    {
      icon: Calendar,
      title: "Book Appointments",
      description: "Schedule a visit with our specialists",
      path: "/appointments",
      color: "text-hospital-blue",
      bgColor: "bg-hospital-light-blue"
    },
    {
      icon: User,
      title: "Find Doctors",
      description: "Find the right specialist for your needs",
      path: "/doctors",
      color: "text-hospital-green",
      bgColor: "bg-hospital-light-green"
    },
    {
      icon: Syringe,
      title: "Vaccinations",
      description: "Stay protected with our vaccination services",
      path: "/vaccinations",
      color: "text-purple-600",
      bgColor: "bg-purple-100"
    },
    {
      icon: Bandage,
      title: "Emergency Care",
      description: "24/7 emergency medical services",
      path: "/emergency",
      color: "text-red-500",
      bgColor: "bg-red-100"
    },
    {
      icon: BriefcaseMedical,
      title: "Medical Records",
      description: "Access your medical history and test results",
      path: "/medical-records",
      color: "text-amber-500",
      bgColor: "bg-amber-100"
    },
    {
      icon: Thermometer,
      title: "Health Checkups",
      description: "Comprehensive health checkup packages",
      path: "/checkups",
      color: "text-teal-500",
      bgColor: "bg-teal-100"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20 pt-20">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-hospital-blue to-blue-600 text-white p-6">
        <h1 className="text-2xl font-bold mb-2">Welcome to MedCare</h1>
        <p className="text-blue-100 mb-4">Your health is our priority</p>
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search for doctors, services..." 
            className="w-full py-2 px-4 pr-10 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <Phone className="absolute right-3 top-2.5 text-gray-400" size={20} />
        </div>
      </div>
      
      {/* Emergency Contact */}
      <div className="bg-red-50 border-l-4 border-red-500 p-4 mx-4 my-4 flex items-center justify-between">
        <div>
          <h3 className="font-medium text-red-700">Emergency?</h3>
          <p className="text-sm text-red-600">Call our 24/7 helpline</p>
        </div>
        <a 
          href="tel:911" 
          className="bg-red-500 text-white px-4 py-2 rounded-lg flex items-center"
        >
          <Phone size={16} className="mr-2" />
          Call Now
        </a>
      </div>
      
      {/* Services Section */}
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-4">Our Services</h2>
        <div className="grid grid-cols-2 gap-4">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              path={service.path}
              color={service.color}
              bgColor={service.bgColor}
            />
          ))}
        </div>
      </div>
      
      <BottomNavbar />
    </div>
  );
};

export default Index;
