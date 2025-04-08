
import { useEffect } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cream-50 px-4">
      <div className="text-center max-w-md">
        <h1 className="text-9xl font-bold text-warm-600 mb-2">404</h1>
        <p className="text-2xl text-gray-700 mb-6">Oops! Page not found</p>
        <p className="text-gray-600 mb-8">
          The page you are looking for might have been removed, had its name changed, 
          or is temporarily unavailable.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button onClick={goBack} className="btn-outline inline-flex items-center justify-center gap-2">
            <ArrowLeft className="h-4 w-4" /> Go Back
          </button>
          <Link to="/" className="btn-primary inline-flex items-center justify-center gap-2">
            <Home className="h-4 w-4" /> Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
