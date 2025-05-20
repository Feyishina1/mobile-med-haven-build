
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { BottomNavbar } from '@/components/layout/BottomNavbar';
import { AppointmentCard } from '@/components/ui/AppointmentCard';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

// Mock appointment data
const mockAppointments = {
  upcoming: [
    {
      id: "1",
      doctorName: "Dr. Sarah Johnson",
      specialty: "Cardiology",
      date: "May 25, 2025",
      time: "10:30 AM",
      status: "upcoming" as const
    },
    {
      id: "2",
      doctorName: "Dr. Michael Chen",
      specialty: "Neurology",
      date: "June 3, 2025",
      time: "2:15 PM",
      status: "upcoming" as const
    }
  ],
  past: [
    {
      id: "3",
      doctorName: "Dr. Emily Rodriguez",
      specialty: "Dermatology",
      date: "April 15, 2025",
      time: "9:00 AM",
      status: "completed" as const
    },
    {
      id: "4",
      doctorName: "Dr. James Wilson",
      specialty: "Pediatrics",
      date: "March 29, 2025",
      time: "11:45 AM",
      status: "completed" as const
    },
    {
      id: "5",
      doctorName: "Dr. David Kim",
      specialty: "Orthopedic",
      date: "March 10, 2025",
      time: "3:30 PM",
      status: "cancelled" as const
    }
  ]
};

const AppointmentsPage = () => {
  const navigate = useNavigate();
  const [appointments, setAppointments] = useState(mockAppointments);

  const handleCancel = (id: string) => {
    setAppointments(prev => ({
      ...prev,
      upcoming: prev.upcoming.filter(app => app.id !== id),
      past: [...prev.past, {
        ...prev.upcoming.find(app => app.id === id)!,
        status: "cancelled" as const
      }]
    }));
    
    toast.success("Appointment cancelled successfully");
  };

  const handleReschedule = (id: string) => {
    navigate(`/book-appointment?rescheduleId=${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20 pt-20">
      <Header />
      
      {/* Book New Appointment Button */}
      <div className="p-4 bg-white border-b border-gray-200 sticky top-16 z-5 flex">
        <Button className="w-full" onClick={() => navigate('/book-appointment')}>
          <Plus size={16} className="mr-2" />
          Book New Appointment
        </Button>
      </div>
      
      {/* Appointments Tabs */}
      <div className="p-4">
        <Tabs defaultValue="upcoming">
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="past">Past</TabsTrigger>
          </TabsList>
          
          <TabsContent value="upcoming" className="space-y-4">
            {appointments.upcoming.length > 0 ? (
              appointments.upcoming.map(appointment => (
                <AppointmentCard
                  key={appointment.id}
                  {...appointment}
                  onCancel={handleCancel}
                  onReschedule={handleReschedule}
                />
              ))
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-500">No upcoming appointments</p>
                <Button 
                  variant="link" 
                  onClick={() => navigate('/book-appointment')}
                  className="mt-2"
                >
                  Book an appointment
                </Button>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="past" className="space-y-4">
            {appointments.past.length > 0 ? (
              appointments.past.map(appointment => (
                <AppointmentCard
                  key={appointment.id}
                  {...appointment}
                />
              ))
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-500">No past appointments</p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
      
      <BottomNavbar />
    </div>
  );
};

export default AppointmentsPage;
