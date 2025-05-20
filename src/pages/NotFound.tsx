
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Hospital } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <Hospital className="text-hospital-blue w-16 h-16 mb-4" />
      <h1 className="text-4xl font-bold mb-2 text-hospital-blue">404</h1>
      <p className="text-xl text-gray-600 mb-6">Oops! Page not found</p>
      <p className="text-center text-gray-500 mb-8">
        The page you are looking for might have been removed or is temporarily unavailable.
      </p>
      <Button 
        onClick={() => navigate('/')}
        className="flex items-center"
      >
        <Hospital className="mr-2" size={16} />
        Return to Home
      </Button>
    </div>
  );
};

export default NotFound;
