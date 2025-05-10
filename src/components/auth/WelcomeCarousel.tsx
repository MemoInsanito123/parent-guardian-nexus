
import React, { useState, useEffect, useCallback } from 'react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";

import { CheckCircle, ChartLine, Info, AlertTriangle, User, Clock, Lock, Pause, TrendingUp, BarChart, ListChecks, Lightbulb, Bug, Phone, CircleHelp, SlidersHorizontal } from "lucide-react";

import * as Embla from 'embla-carousel-react';

type CarouselSlide = {
  id: number;
  image: string;
  title: string;
  listItems: string[];
  bgColor: string;
};

const slides: CarouselSlide[] = [
  {
    id: 1,
    image: "./../../../public/img/controlParental.png",
    title: "Control Parental",
    listItems: [
      "Restricción de tiempo",
      "Configuración de límites",
      "Bloqueo de aplicación",
    ],
    bgColor: "bg-[#33009A]"
  },
  {
    id: 2,
    image: "./../../../public/img/grafica02.png",
    title: "Estadísticas y Seguimiento",
    listItems: [
      "Progreso de usuario",
      "Tiempo invertido",
      "Historial de actividades"
    ],
    bgColor: "bg-[#00563E]"
  },
  {
    id: 3,
    image: "./../../../public/img/rueda.png",
    title: "Control Parental",
    listItems: [
      "Preguntas frecuentes",
      "Reporte de problemas",
      "Contacto con nosotros"
    ],
    bgColor: "bg-[#1A1E29]" 
  }
];

const getItemIcon = (item: string, index: number) => {
  const lowerCaseItem = item.toLowerCase();
  switch (lowerCaseItem) {
    case 'restricción de tiempo':
      return <Clock className="w-7 h-7" color='#00CED1' strokeWidth={2.5}/>;
    case 'configuración de límites':
      return <SlidersHorizontal className="w-7 h-7" color='#FFD700' strokeWidth={2.5}/>; // Using SlidersHorizontal for 'limits'
    case 'bloqueo de aplicación':
      return <Lock className="w-7 h-7" color='#FF7F50' strokeWidth={2.5}/>;
    case 'pausas y descansos':
      return <Pause className="w-7 h-7" color='#eab308' strokeWidth={2.5}/>;
    case 'progreso de usuario':
      return <TrendingUp className="w-7 h-7" color='#3b82f6' strokeWidth={2.5}/>;
    case 'tiempo invertido':
      return <BarChart className="w-7 h-7" color='#8b5cf6' strokeWidth={2.5}/>;
    case 'historial de actividades':
      return <ListChecks className="w-7 h-7" color='#10b981' strokeWidth={2.5}/>;
    case 'preguntas frecuentes':
      return <CircleHelp  className="w-7 h-7" color='#6495ED' strokeWidth={2.5}/>;
    case 'intrucciones':
      return <Lightbulb className="w-7 h-7" color='#facc15' strokeWidth={2.5}/>; // Assuming 'intrucciones' is a typo for 'instrucciones'
    case 'reporte de problemas':
      return <Bug className="w-7 h-7" color='#CC5500' strokeWidth={2.5}/>;
    case 'contacto con nosotros':
      return <Phone className="w-7 h-7" color='#C0C0C0' strokeWidth={2.5}/>;
    default:
      return <span>{index + 1}</span>; // Fallback to index if no match
  }
};

export const WelcomeCarousel: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [bgColor, setBgColor] = useState(slides[0].bgColor);
  
  // Use Embla Carousel hook with proper import
  const [emblaRef, emblaApi] = Embla.default({ loop: true });

  // Function to go to next slide
  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  // Handle slide change
  const handleSlideChange = useCallback(() => {
    if (!emblaApi) return;
    const currentIndex = emblaApi.selectedScrollSnap();
    setActiveSlide(currentIndex);
    setBgColor(slides[currentIndex].bgColor);
  }, [emblaApi]);

  // Set up the event listeners when emblaApi changes
  useEffect(() => {
    if (!emblaApi) return;
    
    // Add event listeners
    emblaApi.on('select', handleSlideChange);
    
    // Initial slide setup
    handleSlideChange();
    
    // Clean up
    return () => {
      emblaApi.off('select', handleSlideChange);
    };
  }, [emblaApi, handleSlideChange]);

  // Set up auto rotation
  useEffect(() => {
    const autoplayInterval = setInterval(() => {
      scrollNext();
    }, 3000); // Change slide every 5 seconds
    
    return () => {
      clearInterval(autoplayInterval);
    };
  }, [scrollNext]);

  return (
    <div className={`transition-colors duration-500 ease-in-out ${bgColor} h-full w-full px-8 pt-16 pb-8 flex flex-col justify-center shurtle-curve`}>
      <div className="max-w-md mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-white text-center">La mejor aplicación de</h1>
        
        <div className="w-full mt-12">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {slides.map((slide) => (
                <div 
                  key={slide.id} 
                  className="flex-[0_0_100%] min-w-0 flex flex-col  items-center"
                >
                  <img 
                    src={slide.image} 
                    alt={slide.title} 
                    className="p-5 justify-center items-center"
                  />
                  <h2 className="text-2xl font-semibold mb-2 text-white p-4">{slide.title}</h2>
                  <div className="space-y-6 w-full">
                    {slide.listItems.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full flex items-center justify-center text-white">
                        {
                        //Llamamos la funcion para que asigne el icono dependiendo de el item y su indicie[]
                        }
                        {getItemIcon(item, idx)}
                        </div>
                        <span className="text-white">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-4 text-sm text-white/70">
          © 2024 - 2025 Frognova, México
        </div>
      </div>
    </div>
  );
};
