
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';

//Importar la conexion con FireBase
import { db } from '../../../firebase/firebaseConfig';
//Importar las librerias para usar colecciones y documentos
import { collection, getDocs } from 'firebase/firestore';


//Iconos Insanos del framework Lucide para React
import { Mail, User, Lock, LockOpen, QrCode, Eye, EyeClosed } from 'lucide-react';

export const RegisterForm: React.FC = () => {
  
  //Variables de estado para el formulario 
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [activationCode, setActivationCode] = useState('');

  //Variable para mostrar en el boton que esta cargando y bloquearlo para evitar errores
  const [isLoading, setIsLoading] = useState(false);
  
  //librería para mostrar notificaciones o mensajes emergentes en tu interfaz de usuario
  const { toast } = useToast();
  //Librería estándar para la navegación en aplicaciones de una sola página (SPA)
  const navigate = useNavigate();

  //Variable de estado para mostrar la password
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);


  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    
    //Verificar si ambas contraseñas son identicas
    if (password !== confirmPassword) {
      toast({
        variant: "destructive",
        title: "Error en el registro",
        description: "Las contraseñas no coinciden",
      });
      return;
    }
    //Cambiar el estado de la variable IsLoading
    setIsLoading(true);
    
    // Simular una verificación de código activacion y registro
    setTimeout(async () => {
      //Verificacion del codigo de activacion 
      try{
        //Hacemos un Fech al servidor Back-End
        const codeExist = await fetch(`${import.meta.env.VITE_SHURTLE_SERVER}/api/codeExist?code=${activationCode}`);
        let data = await codeExist.json();

        //Desestruturar la informacion
        let { exist, status_activation_code, ID_activation_code } = data;

        //Verificar que el codigo Exista y valido
        if( exist && status_activation_code ){

        }
      }
      catch(error){
        toast({
          variant: "destructive",
          title: "Error en el registro",
          description : "Error en el servidor"
        });
        setIsLoading(false);
        console.error("Error en la peticion del servidor", error);
      }


      setIsLoading(false);
    }, 1500);
  };

  return (
    <form onSubmit={handleRegister} className="flex flex-col gap-4 w-full">
      <div className="relative">
        <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
        <Input 
          type="email" 
          placeholder="Correo electrónico" 
          className="pl-10" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <p className="text-xs text-gray-500 -mt-2">* Indica un correo eléctronico válido para la verificación</p>
      
      <div className="relative">
        <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
        <Input 
          type="text" 
          placeholder="Nombre de usuario" 
          className="pl-10" 
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      
      <div className="relative">
        <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
        <Input 
          type={showPassword ? 'text' : 'password'} 
          placeholder="Contraseña" 
          className="pl-10" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        
        
        <div className="absolute right-3 top-2 h-5 w-5 text-gray-400 cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
          {!showPassword ? <EyeClosed className='flex justify-self-center items-center'/> : <Eye className='flex justify-self-center'/>}
        </div>

      </div>
      
      <div className="relative">
        <LockOpen className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
        <Input 
          type={showPassword2 ? 'text' : 'password'} 
          placeholder="Confirmar contraseña" 
          className="pl-10" 
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        
        <div className="absolute right-3 top-2 h-5 w-5 text-gray-400 cursor-pointer" onClick={() => setShowPassword2(!showPassword2)}>
          {!showPassword2 ? <EyeClosed className='flex justify-self-center items-center'/> : <Eye className='flex justify-self-center'/>}
        </div>

      </div>
      
      <div className="relative">
        <QrCode className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
        <Input 
          type="text" 
          placeholder="Código de verificación" 
          className="pl-10" 
          value={activationCode}
          onChange={(e) => setActivationCode(e.target.value)}
          required
        />
      </div>
      
      <p className="text-xs text-gray-500 -mt-2">* Indica un código QR válido para verificación</p>
      
      <Button 
        type="submit" 
        className="bg-shurtle-dark hover:bg-opacity-90 text-white w-full mt-2" 
        disabled={isLoading}
      >
        {isLoading ? "Procesando..." : "Siguiente"}
      </Button>

      <div className="flex items-center my-2">
        <div className="flex-grow h-px bg-gray-300"></div>
        <span className="px-4 text-gray-500 text-sm">O</span>
        <div className="flex-grow h-px bg-gray-300"></div>
      </div>

      <Button 
        type="button" 
        variant="outline" 
        className="flex items-center justify-center gap-2"
        onClick={() => toast({
          description: "Función de registro con Google en desarrollo"
        })}
      >
        <svg width="20" height="20" viewBox="0 0 24 24">
          <path
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            fill="#4285F4"
          />
          <path
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            fill="#34A853"
          />
          <path
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            fill="#FBBC05"
          />
          <path
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            fill="#EA4335"
          />
        </svg>
        Google
      </Button>
      
      <div className="text-center mt-4">
        <span className="text-gray-600 font-bold ">¿Ya tienes una cuenta?</span>{' '}
        <a href="/login" className="text-shurtle-primary hover:underline ">
          Iniciar sesión
        </a>
      </div>
      
      <p className="text-xs text-center text-gray-500 mt-4">
        Al registrarse, estás aceptando los {' '}
        <a href="/terms" className="text-shurtle-primary hover:underline">Términos de servicio</a> y {' '}
        <a href="/privacy" className="text-shurtle-primary hover:underline">Política privada</a>
      </p>
    </form>
  );
};
