
import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { LoginForm } from '@/components/auth/LoginForm';
import { ShurtleLogo } from '@/components/ShurtleLogo';

const Login: React.FC = () => {
  // Comprobar si el usuario ya está autenticado
  const isAuthenticated = localStorage.getItem('user');
  
  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div className="flex min-h-screen">
      <div className="hidden md:flex md:w-1/2 bg-shurtle-dark shurtle-curve p-8 text-white">
        <div className="max-w-md mx-auto mt-16">
          <h1 className="text-4xl font-bold mb-6">La mejor aplicación de control parental</h1>
          
          <div className="mt-12">
            <img src="/placeholder.svg" alt="Estadísticas y Seguimiento" className="mb-4 w-1/2 mx-auto" />
            <h2 className="text-2xl font-semibold mb-6">Estadísticas y Seguimiento</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-shurtle-primary flex items-center justify-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                </div>
                <span>Progreso del usuario</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-shurtle-primary flex items-center justify-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span>Historial de actividades</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-shurtle-primary flex items-center justify-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span>Tiempo invertido</span>
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-8 left-8 text-sm text-white/70">
            © 2024 - 2025 Frognova, México
          </div>
        </div>
      </div>
      
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8">
        <div className="w-full max-w-md">
          <div className="mb-8 text-center">
            <ShurtleLogo size="lg" />
            <h2 className="text-2xl font-semibold mt-6 mb-2">Bienvenido a Shurtle WEB</h2>
          </div>
          
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;
