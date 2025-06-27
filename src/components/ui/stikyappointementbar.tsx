"use client";
import { useState, useEffect } from 'react';
import { Calendar, Phone, X } from 'lucide-react';
export default function StickyAppointmentBar() {
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show bar when scrolled down more than 300px
      if (currentScrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      
      // Hide/show based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 300) {
        // Scrolling down
        setIsHidden(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up
        setIsHidden(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed bottom-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out
     border-t-[2px] border-emerald-500/50  ${
        isHidden ? 'translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className=" bg-[#1C1F20]  px-4 py-3 shadow-lg">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          {/* Left side - Book Appointment text with icon */}
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
            <span className="text-white font-medium">Book Appointment</span>
          </div>
          
          {/* Right side - Buttons and close */}
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 font-medium">
              <Calendar size={16} />
              Book Appointment
            </button>
            
            <button className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg transition-colors duration-200 font-medium">
              <Phone size={16} />
              Call Now
            </button>
            
            <button 
              onClick={handleClose}
              className="text-slate-400 hover:text-white transition-colors duration-200 p-1"
            >
              <X size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}