
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ShurtleLogo } from '@/components/ShurtleLogo';
import {
  ChevronLeft,
  BarChart2,
  Clock,
  Settings,
  HelpCircle,
  BookOpen,
  MessageSquare,
  Layout,
  LogOut,
  Menu,
} from 'lucide-react';

interface SidebarProps {
  className?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname.startsWith(path);
  };
  
  const sidebarItems = [
    {
      title: 'Estadísticas y Seguimiento',
      icon: BarChart2,
      href: '/dashboard/stats',
      submenu: [
        { title: 'Progreso del Usuario', href: '/dashboard/stats/progress' },
        { title: 'Historial de Actividades', href: '/dashboard/stats/history' },
        { title: 'Interpretación de Resultados', href: '/dashboard/stats/results' }
      ]
    },
    {
      title: 'Control Parental',
      icon: Clock,
      href: '/dashboard/parental-control',
      submenu: [
        { title: 'Configuración de Límites', href: '/dashboard/parental-control/limits' }
      ]
    },
    {
      title: 'Estrategias Didácticas',
      icon: BookOpen,
      href: '/dashboard/strategies',
      submenu: []
    },
    {
      title: 'Configuración',
      icon: Settings,
      href: '/dashboard/settings',
      submenu: [
        { title: 'Ajustes', href: '/dashboard/settings/general' },
        { title: 'Preferencias', href: '/dashboard/settings/preferences' }
      ]
    },
    {
      title: 'Información y Soporte',
      icon: HelpCircle,
      href: '/dashboard/support',
      submenu: [
        { title: 'Preguntas Frecuentes', href: '/dashboard/support/faq' },
        { title: 'Tutoriales', href: '/dashboard/support/tutorials' },
        { title: 'Contacto', href: '/dashboard/support/contact' }
      ]
    }
  ];
  
  return (
    <div className={cn(
      'flex flex-col border-r bg-sidebar h-full transition-all duration-300',
      collapsed ? 'w-[70px]' : 'w-[280px]',
      className
    )}>
      <div className="flex h-14 items-center px-4 border-b">
        {!collapsed ? (
          <div className="flex justify-between w-full items-center">
            <ShurtleLogo variant="white" size="sm" showText={!collapsed} />
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-sidebar-foreground hover:bg-sidebar-accent"
              onClick={() => setCollapsed(true)}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
          </div>
        ) : (
          <Button 
            variant="ghost" 
            size="icon" 
            className="mx-auto text-sidebar-foreground hover:bg-sidebar-accent"
            onClick={() => setCollapsed(false)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        )}
      </div>
      
      <ScrollArea className="flex-1 px-3 py-2">
        <div className="space-y-1">
          {sidebarItems.map((item, index) => (
            <div key={item.href} className="mb-2">
              <Link 
                to={item.href}
                className={cn(
                  'flex items-center py-2 px-3 rounded-md text-sidebar-foreground hover:bg-sidebar-accent group',
                  isActive(item.href) && 'bg-sidebar-accent'
                )}
              >
                <item.icon className="h-5 w-5 mr-2 flex-shrink-0" />
                {!collapsed && (
                  <span className="text-sm font-medium">{item.title}</span>
                )}
              </Link>
              
              {!collapsed && item.submenu.length > 0 && (
                <div className="ml-10 mt-1 space-y-1">
                  {item.submenu.map((subitem) => (
                    <Link
                      key={subitem.href}
                      to={subitem.href}
                      className={cn(
                        'block py-1.5 px-3 text-sm rounded-md text-sidebar-foreground/80 hover:bg-sidebar-accent hover:text-sidebar-foreground',
                        isActive(subitem.href) && 'bg-sidebar-accent/50 text-sidebar-foreground font-medium'
                      )}
                    >
                      {subitem.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </ScrollArea>
      
      <div className="p-3 border-t mt-auto">
        <Button 
          variant="ghost" 
          size={collapsed ? "icon" : "default"}
          className="w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent"
          onClick={() => {
            localStorage.removeItem('user');
            window.location.href = '/login';
          }}
        >
          <LogOut className="h-5 w-5 mr-2" />
          {!collapsed && <span>Cerrar sesión</span>}
        </Button>
      </div>
    </div>
  );
};
