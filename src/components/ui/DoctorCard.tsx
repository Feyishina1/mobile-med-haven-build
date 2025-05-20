
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Avatar } from '@/components/ui/avatar';

interface DoctorCardProps {
  id: string;
  name: string;
  specialty: string;
  rating: number;
  imageUrl?: string;
}

export const DoctorCard = ({ id, name, specialty, rating, imageUrl }: DoctorCardProps) => {
  const navigate = useNavigate();
  
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex items-center space-x-4">
      <Avatar className="w-16 h-16">
        <img
          src={imageUrl || 'https://i.pravatar.cc/150?img=' + id}
          alt={name}
          className="rounded-full object-cover w-full h-full"
        />
      </Avatar>
      <div className="flex-1">
        <h3 className="font-medium">{name}</h3>
        <p className="text-sm text-gray-500">{specialty}</p>
        <div className="flex items-center mt-1">
          {Array(5).fill(0).map((_, i) => (
            <svg 
              key={i} 
              className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-200'}`} 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      </div>
      <Button 
        size="sm" 
        onClick={() => navigate(`/doctor-details?id=${id}`)}
      >
        View
      </Button>
    </div>
  );
};
