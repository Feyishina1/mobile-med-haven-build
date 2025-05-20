
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Calendar, Clock, MapPin, Phone, Star } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { BottomNavbar } from '@/components/layout/BottomNavbar';
import { Button } from '@/components/ui/button';
import { Avatar } from '@/components/ui/avatar';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

// Mock doctor data
const doctorsData = [
  {
    id: "1",
    name: "Dr. Sarah Johnson",
    specialty: "Cardiology",
    rating: 4.8,
    imageUrl: "https://i.pravatar.cc/150?img=1",
    education: "Harvard Medical School",
    experience: "10+ years",
    bio: "Dr. Sarah Johnson is a board-certified cardiologist specializing in preventive cardiology and heart disease management. With over 10 years of experience, she has helped thousands of patients improve their heart health and quality of life.",
    address: "MedCare Hospital, Floor 3, Room 305",
    phone: "+1 (123) 456-7890",
    workingHours: "Mon-Fri: 9:00 AM - 5:00 PM"
  },
  {
    id: "2",
    name: "Dr. Michael Chen",
    specialty: "Neurology",
    rating: 4.9,
    imageUrl: "https://i.pravatar.cc/150?img=2",
    education: "Johns Hopkins School of Medicine",
    experience: "15+ years",
    bio: "Dr. Michael Chen is a renowned neurologist specializing in stroke prevention and treatment. With over 15 years of clinical experience and numerous published research papers, he is dedicated to advancing neurological care.",
    address: "MedCare Hospital, Floor 4, Room 412",
    phone: "+1 (123) 456-7891",
    workingHours: "Mon, Wed, Fri: 8:00 AM - 4:00 PM"
  }
];

const DoctorDetailsPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get('id') || "1";
  
  const doctor = doctorsData.find(doc => doc.id === id) || doctorsData[0];
  
  return (
    <div className="min-h-screen bg-gray-50 pb-20 pt-16">
      <Header />
      
      {/* Doctor Info */}
      <div className="bg-white p-4 border-b border-gray-200">
        <div className="flex items-center space-x-4">
          <Avatar className="w-20 h-20">
            <img
              src={doctor.imageUrl}
              alt={doctor.name}
              className="object-cover w-full h-full"
            />
          </Avatar>
          <div>
            <h2 className="text-xl font-semibold">{doctor.name}</h2>
            <p className="text-gray-500">{doctor.specialty}</p>
            <div className="flex items-center mt-1 text-yellow-500">
              <Star size={16} className="fill-current" />
              <span className="ml-1 text-sm">{doctor.rating}</span>
            </div>
          </div>
        </div>
        
        <Button 
          className="w-full mt-4" 
          onClick={() => navigate(`/book-appointment?doctorId=${doctor.id}`)}
        >
          Book Appointment
        </Button>
      </div>
      
      {/* Doctor Details */}
      <div className="p-4">
        <Tabs defaultValue="about">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="schedule">Schedule</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>
          
          <TabsContent value="about" className="mt-4">
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-medium mb-2">Biography</h3>
              <p className="text-sm text-gray-600 mb-4">{doctor.bio}</p>
              
              <div className="space-y-3">
                <div className="flex">
                  <span className="text-sm font-medium w-24">Education:</span>
                  <span className="text-sm text-gray-600">{doctor.education}</span>
                </div>
                <div className="flex">
                  <span className="text-sm font-medium w-24">Experience:</span>
                  <span className="text-sm text-gray-600">{doctor.experience}</span>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-100">
                <h3 className="font-medium mb-3">Contact Information</h3>
                
                <div className="space-y-3">
                  <div className="flex items-start">
                    <MapPin size={16} className="text-gray-400 mt-0.5 mr-2" />
                    <span className="text-sm text-gray-600">{doctor.address}</span>
                  </div>
                  <div className="flex items-start">
                    <Phone size={16} className="text-gray-400 mt-0.5 mr-2" />
                    <span className="text-sm text-gray-600">{doctor.phone}</span>
                  </div>
                  <div className="flex items-start">
                    <Clock size={16} className="text-gray-400 mt-0.5 mr-2" />
                    <span className="text-sm text-gray-600">{doctor.workingHours}</span>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="schedule" className="mt-4">
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-medium mb-3">Working Hours</h3>
              <p className="text-sm text-gray-600 mb-4">{doctor.workingHours}</p>
              
              <h3 className="font-medium mb-3">Available Slots</h3>
              <div className="grid grid-cols-2 gap-2">
                {["9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM"].map((time) => (
                  <button
                    key={time}
                    className="border border-gray-200 rounded py-2 px-3 text-sm hover:bg-gray-50"
                    onClick={() => navigate(`/book-appointment?doctorId=${doctor.id}&time=${time}`)}
                  >
                    {time}
                  </button>
                ))}
              </div>
              
              <Button 
                className="w-full mt-4" 
                onClick={() => navigate(`/book-appointment?doctorId=${doctor.id}`)}
              >
                <Calendar size={16} className="mr-2" />
                View Full Schedule
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="reviews" className="mt-4">
            <div className="bg-white rounded-lg p-4">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-medium">Patient Reviews</h3>
                  <div className="flex items-center mt-1">
                    <div className="flex text-yellow-500">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          size={16}
                          className={`${star <= Math.floor(doctor.rating) ? "fill-current" : ""}`}
                        />
                      ))}
                    </div>
                    <span className="text-sm ml-2">{doctor.rating} out of 5</span>
                  </div>
                </div>
              </div>
              
              {/* Sample Reviews */}
              <div className="space-y-4">
                {[
                  {
                    name: "John D.",
                    date: "May 10, 2025",
                    rating: 5,
                    comment: "Dr. Johnson is amazing! She took her time to explain everything clearly and made me feel at ease."
                  },
                  {
                    name: "Maria S.",
                    date: "April 28, 2025",
                    rating: 4,
                    comment: "Very knowledgeable doctor. Wait time was a bit long but the quality of care made up for it."
                  },
                  {
                    name: "Robert T.",
                    date: "April 15, 2025",
                    rating: 5,
                    comment: "Excellent bedside manner and very thorough examination. Highly recommend!"
                  }
                ].map((review, index) => (
                  <div key={index} className="border-b border-gray-100 pb-3">
                    <div className="flex justify-between">
                      <span className="font-medium">{review.name}</span>
                      <span className="text-sm text-gray-500">{review.date}</span>
                    </div>
                    <div className="flex text-yellow-500 my-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          size={12}
                          className={`${star <= review.rating ? "fill-current" : ""}`}
                        />
                      ))}
                    </div>
                    <p className="text-sm text-gray-600">{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      
      <BottomNavbar />
    </div>
  );
};

export default DoctorDetailsPage;
