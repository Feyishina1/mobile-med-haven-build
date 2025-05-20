
import React from 'react';
import { Calendar, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface AppointmentCardProps {
  id: string;
  doctorName: string;
  specialty: string;
  date: string;
  time: string;
  status: 'upcoming' | 'completed' | 'cancelled';
  onCancel?: (id: string) => void;
  onReschedule?: (id: string) => void;
}

export const AppointmentCard = ({
  id,
  doctorName,
  specialty,
  date,
  time,
  status,
  onCancel,
  onReschedule
}: AppointmentCardProps) => {
  const statusColors = {
    upcoming: 'text-hospital-blue',
    completed: 'text-hospital-green',
    cancelled: 'text-red-500'
  };
  
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-medium">{doctorName}</h3>
          <p className="text-sm text-gray-500">{specialty}</p>
        </div>
        <span className={`text-sm font-medium ${statusColors[status]}`}>
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </span>
      </div>
      
      <div className="mt-3 flex flex-col space-y-2">
        <div className="flex items-center space-x-2">
          <Calendar size={16} className="text-gray-400" />
          <span className="text-sm">{date}</span>
        </div>
        <div className="flex items-center space-x-2">
          <Clock size={16} className="text-gray-400" />
          <span className="text-sm">{time}</span>
        </div>
      </div>
      
      {status === 'upcoming' && (
        <div className="mt-4 flex space-x-2">
          <Button 
            variant="outline" 
            size="sm" 
            className="flex-1" 
            onClick={() => onReschedule?.(id)}
          >
            Reschedule
          </Button>
          <Button 
            variant="destructive" 
            size="sm" 
            className="flex-1" 
            onClick={() => onCancel?.(id)}
          >
            Cancel
          </Button>
        </div>
      )}
    </div>
  );
};
