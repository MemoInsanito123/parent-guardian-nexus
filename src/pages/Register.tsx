
import React from 'react';
import { Navigate } from 'react-router-dom';
import { RegisterForm } from '@/components/auth/RegisterForm';
import { ShurtleLogo } from '@/components/ShurtleLogo';
import { WelcomeCarousel } from '@/components/auth/WelcomeCarousel';

const Register: React.FC = () => {
  // Comprobar si el usuario ya está autenticado
  const isAuthenticated = localStorage.getItem('user');
  
  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div className="flex min-h-screen">
      <div className="hidden md:flex md:w-1/2 overflow-hidden">
        <WelcomeCarousel />
      </div>
      
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8">
        <div className="w-full max-w-md">
          <div className="mb-8 text-center">
            <ShurtleLogo size="lg" />
            <h2 className="text-2xl font-semibold mt-6 mb-2">Crea una cuenta</h2>
          </div>
          
          <RegisterForm />
        </div>
      </div>
    </div>
  );
};

export default Register;
