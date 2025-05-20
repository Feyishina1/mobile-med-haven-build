
import React from 'react';
import { Phone, Mail, MapPin, Clock, Smartphone } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { BottomNavbar } from '@/components/layout/BottomNavbar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const ContactPage = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully! We'll get back to you soon.");
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20 pt-20">
      <Header />
      
      {/* Emergency Contact */}
      <div className="bg-red-50 border-l-4 border-red-500 p-4 mx-4 my-4 flex items-center justify-between">
        <div>
          <h3 className="font-medium text-red-700">Emergency Helpline</h3>
          <p className="text-sm text-red-600">Available 24/7</p>
        </div>
        <a 
          href="tel:911" 
          className="bg-red-500 text-white px-4 py-2 rounded-lg flex items-center"
        >
          <Phone size={16} className="mr-2" />
          911
        </a>
      </div>
      
      {/* Contact Information */}
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
        
        <div className="bg-white rounded-lg shadow-sm p-4 space-y-4">
          <div className="flex items-start">
            <Smartphone className="text-hospital-blue mr-3 mt-1" size={20} />
            <div>
              <h3 className="font-medium">Phone</h3>
              <a href="tel:+11234567890" className="text-hospital-blue">+1 (123) 456-7890</a>
            </div>
          </div>
          
          <div className="flex items-start">
            <Mail className="text-hospital-blue mr-3 mt-1" size={20} />
            <div>
              <h3 className="font-medium">Email</h3>
              <a href="mailto:contact@medcare.com" className="text-hospital-blue">contact@medcare.com</a>
            </div>
          </div>
          
          <div className="flex items-start">
            <MapPin className="text-hospital-blue mr-3 mt-1" size={20} />
            <div>
              <h3 className="font-medium">Address</h3>
              <p className="text-gray-600">123 Medical Center Drive, Healthcare City, HC 12345</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <Clock className="text-hospital-blue mr-3 mt-1" size={20} />
            <div>
              <h3 className="font-medium">Working Hours</h3>
              <p className="text-gray-600">Mon - Fri: 8:00 AM - 8:00 PM</p>
              <p className="text-gray-600">Sat - Sun: 9:00 AM - 5:00 PM</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Contact Form */}
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-4">Send us a Message</h2>
        
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-sm p-4 space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <Input id="name" placeholder="Your name" required />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <Input id="email" type="email" placeholder="Your email" required />
          </div>
          
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
              Subject
            </label>
            <Input id="subject" placeholder="Subject" required />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <Textarea id="message" placeholder="Your message" rows={4} required />
          </div>
          
          <Button type="submit" className="w-full">Send Message</Button>
        </form>
      </div>
      
      <BottomNavbar />
    </div>
  );
};

export default ContactPage;
