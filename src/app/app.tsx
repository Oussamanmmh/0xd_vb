"use client"
import DentalLoadingScreen from '@/components/sections/load';
import { useState, useEffect } from 'react';

import React from 'react'

const App = ({children }:{children:React.ReactNode}) => {

    const [progress, setProgress] = useState(0);
      const [isLoading, setIsLoading] = useState(true);
    
      useEffect(() => {
        const interval = setInterval(() => {
          setProgress(prev => {
            if (prev >= 100) {
              clearInterval(interval);
              setTimeout(() => setIsLoading(false), 500);
              return 100;
            }
            return prev + 2;
          });
        }, 40);
    
        return () => clearInterval(interval);
      }, []);
  if (!isLoading) {
    return (
        <div>
         {children}
     </div>
    );
  }    
  return (
     <DentalLoadingScreen progress={progress} isLoading={isLoading} />
  )
}

export default App