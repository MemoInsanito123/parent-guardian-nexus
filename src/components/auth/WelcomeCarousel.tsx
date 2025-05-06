
import React, { useState, useEffect, useCallback } from 'react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { CheckCircle } from "lucide-react";
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
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Monitoreo en tiempo real",
    listItems: [
      "Seguimiento de actividades",
      "Control del tiempo de uso",
      "Reportes personalizados",
      "Alertas automáticas"
    ],
    bgColor: "bg-blue-700"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Estadísticas detalladas",
    listItems: [
      "Gráficos de progreso",
      "Análisis de habilidades",
      "Comparativas semanales",
      "Patrones de aprendizaje"
    ],
    bgColor: "bg-indigo-700"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Herramientas educativas",
    listItems: [
      "Juegos matemáticos",
      "Actividades de aprendizaje",
      "Recursos didácticos",
      "Contenido interactivo"
    ],
    bgColor: "bg-emerald-700"
  }
];

export const WelcomeCarousel: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [bgColor, setBgColor] = useState(slides[0].bgColor);
  
  // Use Embla Carousel hook with correct import
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
    }, 5000); // Change slide every 5 seconds
    
    return () => {
      clearInterval(autoplayInterval);
    };
  }, [scrollNext]);

  return (
    <div className={`transition-colors duration-500 ease-in-out ${bgColor} h-full w-full px-8 pt-16 pb-8 flex flex-col justify-center shurtle-curve`}>
      <div className="max-w-md mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-white">La mejor aplicación de control parental</h1>
        
        <div className="w-full mt-12">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {slides.map((slide) => (
                <div 
                  key={slide.id} 
                  className="flex-[0_0_100%] min-w-0 flex flex-col items-center"
                >
                  <img 
                    src={slide.image} 
                    alt={slide.title} 
                    className="w-48 h-48 object-cover rounded-lg mb-6 shadow-lg"
                  />
                  <h2 className="text-2xl font-semibold mb-4 text-white">{slide.title}</h2>
                  <div className="space-y-3 w-full">
                    {slide.listItems.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-shurtle-primary flex items-center justify-center text-white">
                          <CheckCircle className="w-4 h-4" />
                        </div>
                        <span className="text-white">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center gap-4 mt-6">
            <CarouselPrevious 
              onClick={() => emblaApi?.scrollPrev()} 
              className="relative static left-0 translate-y-0 bg-white/20 hover:bg-white/30 border-white/30" 
            />
            <CarouselNext 
              onClick={() => emblaApi?.scrollNext()} 
              className="relative static right-0 translate-y-0 bg-white/20 hover:bg-white/30 border-white/30" 
            />
          </div>
        </div>
        
        <div className="absolute bottom-8 left-8 text-sm text-white/70">
          © 2024 - 2025 Frognova, México
        </div>
      </div>
    </div>
  );
};
