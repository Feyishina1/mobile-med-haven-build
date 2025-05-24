
import React, { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { BottomNavbar } from '@/components/layout/BottomNavbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Video, Mic, MicOff, VideoOff, Phone, MessageSquare } from 'lucide-react';
import { toast } from 'sonner';

const VideoConsultationPage = () => {
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [isAudioOn, setIsAudioOn] = useState(true);
  const [isConnecting, setIsConnecting] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  
  const toggleVideo = () => setIsVideoOn(!isVideoOn);
  const toggleAudio = () => setIsAudioOn(!isAudioOn);
  
  const connectToCall = () => {
    setIsConnecting(true);
    toast.info("Connecting to doctor...");
    
    // Simulate connection delay
    setTimeout(() => {
      setIsConnecting(false);
      setIsConnected(true);
      toast.success("Connected to Dr. Sarah Johnson");
    }, 2000);
  };
  
  const endCall = () => {
    setIsConnected(false);
    toast.info("Call ended");
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20 pt-16">
      <Header />
      
      <div className="p-4">
        <div className="bg-black rounded-lg aspect-video relative overflow-hidden mb-4">
          {isConnected ? (
            <div className="absolute inset-0 flex items-center justify-center">
              <img 
                src="https://i.pravatar.cc/300?img=1" 
                alt="Doctor" 
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-white">
                {isConnecting ? "Connecting..." : "Waiting to start consultation"}
              </div>
            </div>
          )}
          
          {/* Self video preview */}
          <div className="absolute bottom-4 right-4 w-1/4 aspect-video bg-gray-700 rounded-lg overflow-hidden border-2 border-white">
            {isVideoOn && (
              <img 
                src="https://i.pravatar.cc/150?img=5" 
                alt="You" 
                className="w-full h-full object-cover"
              />
            )}
          </div>
        </div>
        
        {/* Controls */}
        <div className="flex justify-center space-x-4 mb-6">
          <Button
            variant="outline"
            size="icon"
            className={`rounded-full h-12 w-12 ${!isAudioOn ? 'bg-red-100' : ''}`}
            onClick={toggleAudio}
          >
            {isAudioOn ? <Mic /> : <MicOff className="text-red-500" />}
          </Button>
          
          <Button
            variant="outline" 
            size="icon"
            className={`rounded-full h-12 w-12 ${!isVideoOn ? 'bg-red-100' : ''}`}
            onClick={toggleVideo}
          >
            {isVideoOn ? <Video /> : <VideoOff className="text-red-500" />}
          </Button>
          
          {isConnected ? (
            <Button
              variant="destructive"
              size="icon"
              className="rounded-full h-12 w-12"
              onClick={endCall}
            >
              <Phone className="rotate-135" />
            </Button>
          ) : (
            <Button
              variant="default"
              size="icon"
              className="rounded-full h-12 w-12 bg-green-500 hover:bg-green-600"
              onClick={connectToCall}
              disabled={isConnecting}
            >
              <Phone />
            </Button>
          )}
          
          <Button
            variant="outline"
            size="icon"
            className="rounded-full h-12 w-12"
          >
            <MessageSquare />
          </Button>
        </div>
        
        {!isConnected && (
          <Card>
            <CardContent className="p-4">
              <h3 className="font-medium mb-2">Upcoming Consultation</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Doctor:</span>
                  <span className="text-sm font-medium">Dr. Sarah Johnson</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Date:</span>
                  <span className="text-sm font-medium">May 25, 2025</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Time:</span>
                  <span className="text-sm font-medium">10:30 AM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Status:</span>
                  <span className="text-sm font-medium text-green-500">Ready to join</span>
                </div>
              </div>
              
              <Button 
                className="w-full mt-4" 
                onClick={connectToCall}
                disabled={isConnecting}
              >
                Join Consultation
              </Button>
              
              <p className="text-xs text-gray-500 mt-3 text-center">
                This video consultation is end-to-end encrypted and HIPAA compliant
              </p>
            </CardContent>
          </Card>
        )}
      </div>
      
      <BottomNavbar />
    </div>
  );
};

export default VideoConsultationPage;
