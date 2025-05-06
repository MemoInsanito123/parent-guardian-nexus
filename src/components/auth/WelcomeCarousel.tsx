
import React, { useState } from 'react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { CheckCircle } from "lucide-react";

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
  
  const handleSlideChange = (index: number) => {
    setActiveSlide(index);
    setBgColor(slides[index].bgColor);
  };

  return (
    <div className={`transition-colors duration-500 ease-in-out ${bgColor} h-full w-full px-8 pt-16 pb-8 flex flex-col justify-center shurtle-curve`}>
      <div className="max-w-md mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-white">La mejor aplicación de control parental</h1>
        
        <Carousel
          opts={{ loop: true }}
          className="w-full mt-12"
          onSlideChange={(index) => handleSlideChange(index)}
        >
          <CarouselContent>
            {slides.map((slide, index) => (
              <CarouselItem key={slide.id} className="flex flex-col items-center">
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
              </CarouselItem>
            ))}
          </CarouselContent>
          
          <div className="flex justify-center gap-4 mt-6">
            <CarouselPrevious className="relative static left-0 translate-y-0 bg-white/20 hover:bg-white/30 border-white/30" />
            <CarouselNext className="relative static right-0 translate-y-0 bg-white/20 hover:bg-white/30 border-white/30" />
          </div>
        </Carousel>
        
        <div className="absolute bottom-8 left-8 text-sm text-white/70">
          © 2024 - 2025 Frognova, México
        </div>
      </div>
    </div>
  );
};
