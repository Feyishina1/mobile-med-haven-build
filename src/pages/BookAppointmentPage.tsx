
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Calendar } from '@/components/ui/calendar';
import { Header } from '@/components/layout/Header';
import { BottomNavbar } from '@/components/layout/BottomNavbar';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

// Mock doctor data
const doctors = [
  {
    id: "1",
    name: "Dr. Sarah Johnson",
    specialty: "Cardiology",
  },
  {
    id: "2",
    name: "Dr. Michael Chen",
    specialty: "Neurology",
  },
  {
    id: "3",
    name: "Dr. James Wilson",
    specialty: "Pediatrics",
  },
  {
    id: "4",
    name: "Dr. Emily Rodriguez",
    specialty: "Dermatology",
  },
  {
    id: "5",
    name: "Dr. David Kim",
    specialty: "Orthopedic",
  },
  {
    id: "6",
    name: "Dr. Jessica Lee",
    specialty: "Gynecology",
  }
];

const timeSlots = [
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM",
  "4:00 PM", "4:30 PM"
];

const BookAppointmentPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const initialDoctorId = searchParams.get('doctorId');
  const initialTimeSlot = searchParams.get('time');
  
  const [selectedDoctor, setSelectedDoctor] = useState(initialDoctorId || "");
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState(initialTimeSlot || "");
  const [reason, setReason] = useState("");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedDoctor || !selectedDate || !selectedTime) {
      toast.error("Please complete all required fields");
      return;
    }
    
    // Here we would normally submit the appointment to an API
    toast.success("Appointment booked successfully!");
    navigate('/appointments');
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20 pt-16">
      <Header />
      
      <div className="p-4">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Doctor Selection */}
          <div className="space-y-2">
            <Label htmlFor="doctor">Select Doctor</Label>
            <Select value={selectedDoctor} onValueChange={setSelectedDoctor}>
              <SelectTrigger id="doctor">
                <SelectValue placeholder="Select a doctor" />
              </SelectTrigger>
              <SelectContent className="bg-white z-20">
                {doctors.map((doctor) => (
                  <SelectItem key={doctor.id} value={doctor.id}>
                    {doctor.name} - {doctor.specialty}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          {/* Date Selection */}
          <div className="space-y-2">
            <Label>Select Date</Label>
            <div className="bg-white border border-gray-200 rounded-lg p-3">
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                disabled={(date) => {
                  // Disable past dates and weekends
                  const today = new Date();
                  today.setHours(0, 0, 0, 0);
                  const day = date.getDay();
                  return date < today || day === 0 || day === 6;
                }}
                className="rounded-md pointer-events-auto"
              />
            </div>
          </div>
          
          {/* Time Selection */}
          <div className="space-y-2">
            <Label htmlFor="time">Select Time Slot</Label>
            <Select value={selectedTime} onValueChange={setSelectedTime}>
              <SelectTrigger id="time">
                <SelectValue placeholder="Select a time slot" />
              </SelectTrigger>
              <SelectContent className="bg-white z-20">
                {timeSlots.map((time) => (
                  <SelectItem key={time} value={time}>{time}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          {/* Reason for Visit */}
          <div className="space-y-2">
            <Label htmlFor="reason">Reason for Visit</Label>
            <Textarea
              id="reason"
              placeholder="Please describe your symptoms or reason for the appointment"
              rows={4}
              value={reason}
              onChange={(e) => setReason(e.target.value)}
            />
          </div>
          
          {/* Submit Button */}
          <Button type="submit" className="w-full">
            Confirm Appointment
          </Button>
        </form>
      </div>
      
      <BottomNavbar />
    </div>
  );
};

export default BookAppointmentPage;
