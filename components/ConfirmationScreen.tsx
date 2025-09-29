
import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import CheckCircleIcon from './icons/CheckCircleIcon';

const ConfirmationScreen: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!location.state?.name) {
      navigate('/');
    }
  }, [location.state, navigate]);

  if (!location.state?.name) {
    return null;
  }
  
  return (
    <div className="bg-white p-8 rounded-lg shadow-md text-center animate-fade-in">
      <div className="flex justify-center mb-4">
        <div className="bg-green-100 p-4 rounded-full">
            <CheckCircleIcon className="text-green-600 h-12 w-12" />
        </div>
      </div>
      <h2 className="text-3xl font-bold mb-2 text-slate-900">Thank You, {location.state.name}!</h2>
      <p className="text-slate-600 max-w-md mx-auto">
        Your photos have been successfully submitted to Secure Home Insurance. We will review them and be in touch shortly if any further information is needed.
      </p>
    </div>
  );
};

export default ConfirmationScreen;
