
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  path: string;
  color?: string;
  bgColor?: string;
}

export const ServiceCard = ({ 
  icon: Icon, 
  title, 
  description, 
  path,
  color = "text-hospital-blue",
  bgColor = "bg-hospital-light-blue"
}: ServiceCardProps) => {
  const navigate = useNavigate();
  
  return (
    <div 
      className="rounded-lg p-4 cursor-pointer shadow-sm transition-transform hover:scale-105 bg-white border border-gray-100"
      onClick={() => navigate(path)}
    >
      <div className="flex items-start space-x-4">
        <div className={cn("p-3 rounded-lg", bgColor)}>
          <Icon size={24} className={color} />
        </div>
        <div className="flex-1">
          <h3 className="font-medium mb-1">{title}</h3>
          <p className="text-sm text-gray-500 line-clamp-2">{description}</p>
        </div>
      </div>
    </div>
  );
};
