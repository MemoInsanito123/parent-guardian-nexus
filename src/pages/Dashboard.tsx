
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BarChart3, Clock, Rocket, Settings } from 'lucide-react';

const Dashboard: React.FC = () => {
  const [user, setUser] = useState<{ name?: string } | null>(null);
  
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);
  
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-semibold">Dashboard</h1>
          <p className="text-muted-foreground">Bienvenido de nuevo, {user?.name || 'Usuario'}</p>
        </div>
        <Button variant="outline" size="sm">
          <Settings className="mr-2 h-4 w-4" /> Configuración
        </Button>
      </div>
      
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Progreso del Usuario</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">65%</div>
            <p className="text-xs text-muted-foreground">+12% desde la semana pasada</p>
            <div className="mt-4 space-y-2">
              <div className="flex items-center">
                <span className="text-sm">Matemáticas</span>
                <div className="ml-auto">75%</div>
              </div>
              <div className="h-2 w-full bg-primary/20 rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full" style={{ width: '75%' }}></div>
              </div>
              <div className="flex items-center">
                <span className="text-sm">Geometría</span>
                <div className="ml-auto">45%</div>
              </div>
              <div className="h-2 w-full bg-primary/20 rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full" style={{ width: '45%' }}></div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Tiempo de Actividad</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3h 45m</div>
            <p className="text-xs text-muted-foreground">Este mes</p>
            <div className="mt-4 space-y-2">
              <div className="flex items-center">
                <span className="text-sm">Hoy</span>
                <div className="ml-auto">45 min</div>
              </div>
              <div className="h-2 w-full bg-primary/20 rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full" style={{ width: '45%' }}></div>
              </div>
              <div className="flex items-center">
                <span className="text-sm">Ayer</span>
                <div className="ml-auto">1h 15m</div>
              </div>
              <div className="h-2 w-full bg-primary/20 rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full" style={{ width: '75%' }}></div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Logros</CardTitle>
            <Rocket className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12/20</div>
            <p className="text-xs text-muted-foreground">Logros obtenidos</p>
            <div className="mt-4 space-y-2">
              <div className="flex items-center">
                <span className="text-sm">Ágil</span>
                <div className="ml-auto">3/5</div>
              </div>
              <div className="h-2 w-full bg-primary/20 rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full" style={{ width: '60%' }}></div>
              </div>
              <div className="flex items-center">
                <span className="text-sm">Creativo</span>
                <div className="ml-auto">4/5</div>
              </div>
              <div className="h-2 w-full bg-primary/20 rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full" style={{ width: '80%' }}></div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="mt-6">
        <h2 className="text-lg font-semibold mb-4">Actividad Reciente</h2>
        <div className="bg-card p-4 rounded-lg border">
          <div className="space-y-4">
            <div className="flex items-start gap-4 border-b pb-4">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <Rocket className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium">Nuevo logro obtenido</h3>
                <p className="text-muted-foreground text-sm">Tu hijo ha obtenido el logro "Matemático nivel 2"</p>
                <p className="text-xs text-muted-foreground mt-1">Hoy, 15:30</p>
              </div>
            </div>
            <div className="flex items-start gap-4 border-b pb-4">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium">Límite de tiempo alcanzado</h3>
                <p className="text-muted-foreground text-sm">Se ha alcanzado el límite de tiempo diario (2 horas)</p>
                <p className="text-xs text-muted-foreground mt-1">Ayer, 18:45</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <BarChart3 className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium">Progreso destacado</h3>
                <p className="text-muted-foreground text-sm">Has mejorado un 15% en geometría esta semana</p>
                <p className="text-xs text-muted-foreground mt-1">3 días atrás</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
