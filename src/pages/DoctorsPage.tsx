
import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { BottomNavbar } from '@/components/layout/BottomNavbar';
import { DoctorCard } from '@/components/ui/DoctorCard';

const specialties = [
  "All",
  "Cardiology",
  "Neurology",
  "Pediatrics",
  "Dermatology",
  "Orthopedic",
  "Gynecology",
  "Ophthalmology"
];

// Mock doctor data
const doctors = [
  {
    id: "1",
    name: "Dr. Sarah Johnson",
    specialty: "Cardiology",
    rating: 4.8,
    imageUrl: "https://i.pravatar.cc/150?img=1"
  },
  {
    id: "2",
    name: "Dr. Michael Chen",
    specialty: "Neurology",
    rating: 4.9,
    imageUrl: "https://i.pravatar.cc/150?img=2"
  },
  {
    id: "3",
    name: "Dr. James Wilson",
    specialty: "Pediatrics",
    rating: 4.7,
    imageUrl: "https://i.pravatar.cc/150?img=3"
  },
  {
    id: "4",
    name: "Dr. Emily Rodriguez",
    specialty: "Dermatology",
    rating: 4.5,
    imageUrl: "https://i.pravatar.cc/150?img=4"
  },
  {
    id: "5",
    name: "Dr. David Kim",
    specialty: "Orthopedic",
    rating: 4.6,
    imageUrl: "https://i.pravatar.cc/150?img=5"
  },
  {
    id: "6",
    name: "Dr. Jessica Lee",
    specialty: "Gynecology",
    rating: 4.9,
    imageUrl: "https://i.pravatar.cc/150?img=6"
  }
];

const DoctorsPage = () => {
  const [activeSpecialty, setActiveSpecialty] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  
  // Filter doctors based on specialty and search query
  const filteredDoctors = doctors.filter(doctor => {
    const matchesSpecialty = activeSpecialty === "All" || doctor.specialty === activeSpecialty;
    const matchesSearch = doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSpecialty && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 pb-20 pt-20">
      <Header />
      
      {/* Search Bar */}
      <div className="p-4 bg-white sticky top-16 z-5">
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search doctors by name or specialty..." 
            className="w-full py-2 px-4 pl-10 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-hospital-blue"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
        </div>
      </div>
      
      {/* Specialties Filter */}
      <div className="px-4 py-3">
        <div className="flex space-x-2 overflow-x-auto pb-2 scrollbar-hide">
          {specialties.map((specialty) => (
            <button
              key={specialty}
              onClick={() => setActiveSpecialty(specialty)}
              className={`px-4 py-1.5 rounded-full whitespace-nowrap text-sm ${
                activeSpecialty === specialty
                  ? "bg-hospital-blue text-white"
                  : "bg-white text-gray-700 border border-gray-200"
              }`}
            >
              {specialty}
            </button>
          ))}
        </div>
      </div>
      
      {/* Doctors List */}
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-4">
          {activeSpecialty === "All" ? "All Doctors" : activeSpecialty + " Specialists"}
        </h2>
        
        <div className="space-y-4">
          {filteredDoctors.length > 0 ? (
            filteredDoctors.map((doctor) => (
              <DoctorCard
                key={doctor.id}
                id={doctor.id}
                name={doctor.name}
                specialty={doctor.specialty}
                rating={doctor.rating}
                imageUrl={doctor.imageUrl}
              />
            ))
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-500">No doctors found matching your criteria</p>
            </div>
          )}
        </div>
      </div>
      
      <BottomNavbar />
    </div>
  );
};

export default DoctorsPage;
