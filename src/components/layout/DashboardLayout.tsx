
import React, { useState, useEffect } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { Sidebar } from './Sidebar';

export const DashboardLayout: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  
  useEffect(() => {
    // Comprobar si hay un usuario en localStorage
    const user = localStorage.getItem('user');
    setIsAuthenticated(!!user);
  }, []);
  
  // Mostrar loading mientras verificamos la autenticación
  if (isAuthenticated === null) {
    return <div className="flex h-screen items-center justify-center">Cargando...</div>;
  }
  
  // Redireccionar a login si no está autenticado
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex-1 overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};
