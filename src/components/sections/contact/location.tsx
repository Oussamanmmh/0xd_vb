"use client" ;
import { useState, useEffect } from "react";
import { MapPin, Phone, Navigation, Clock } from "lucide-react";

export default function DentalLocationMapSection() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [pulseActive, setPulseActive] = useState(true);

  useEffect(() => {
    const pulseInterval = setInterval(() => {
      setPulseActive(!pulseActive);
    }, 2000);

    return () => clearInterval(pulseInterval);
  }, [pulseActive]);

  const handleGetDirections = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 600);
    
    const address = "Dr. Chaabani Amine Dental Clinic, Thala, Kasserine, Tunisia";
    const encodedAddress = encodeURIComponent(address);
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`, "_blank");
  };

  const handleCallNow = () => {
    window.open("tel:29404409", "_self");
  };

  return (
    <section className="py-20 px-4">
      <div className="w-full mx-auto">
        {/* Header */}
        <div className="text-center mb-12 z-50">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-emerald-500 rounded-full mb-6 shadow-lg shadow-emerald-500/25">
            <MapPin className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Notre Emplacement
          </h2>
          <p className="text-xl text-slate-400">
            Dr. Chaabani Amine Dental Clinic
          </p>
        </div>

        {/* Interactive Map Container */}
        <div className="bg-slate-800 rounded-3xl p-8 border border-slate-700 mb-8 relative overflow-hidden">
          {/* Decorative dots */}
          <div className="absolute top-4 left-4 w-3 h-3 bg-emerald-400 rounded-full opacity-60"></div>
          <div className="absolute top-4 right-4 w-3 h-3 bg-orange-400 rounded-full opacity-60"></div>
          
          {/* Location Tag */}
          <div className="absolute z-50 top-12 right-12 bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-sm font-medium border border-emerald-500/30">
             Guelma , Hadj Mubarek 
          </div>

          {/* Stylized Map */}
          <div className="relative h-64 bg-slate-700 rounded-2xl border border-slate-600 overflow-hidden">
            {/* Map Grid */}
            <div className="absolute inset-0 opacity-20">
              {/* Vertical lines */}
              {[...Array(6)].map((_, i) => (
                <div
                  key={`v-${i}`}
                  className="absolute top-0 bottom-0 w-px bg-slate-500"
                  style={{ left: `${(i + 1) * 16.67}%` }}
                />
              ))}
              {/* Horizontal lines */}
              {[...Array(4)].map((_, i) => (
                <div
                  key={`h-${i}`}
                  className="absolute left-0 right-0 h-px bg-slate-500"
                  style={{ top: `${(i + 1) * 20}%` }}
                />
              ))}
            </div>

            {/* Stylized Buildings */}
            <div className="absolute bottom-4 left-8 w-8 h-12 bg-slate-600 rounded-t-sm"></div>
            <div className="absolute bottom-4 left-20 w-6 h-16 bg-slate-600 rounded-t-sm"></div>
            <div className="absolute bottom-4 right-12 w-10 h-10 bg-slate-600 rounded-t-sm"></div>
            <div className="absolute bottom-4 right-28 w-7 h-14 bg-slate-600 rounded-t-sm"></div>

            {/* Main Location Marker */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              {/* Pulsing Circle */}
              <div 
                className={`absolute inset-0 w-16 h-16 bg-red-500 rounded-full opacity-30 transition-all duration-700 ${
                  pulseActive ? 'scale-150' : 'scale-100'
                }`}
              ></div>
              
              {/* Main Marker */}
              <div className="relative w-16 h-16 bg-red-500 rounded-full flex items-center justify-center shadow-lg shadow-red-500/50 border-4 border-white">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              
              {/* Clinic Label */}
              <div className="absolute top-20 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white px-3 py-2 rounded-lg text-sm font-medium border border-slate-600 whitespace-nowrap">
                <div className="text-emerald-400 font-semibold">Dr.</div>
                <div>Nemamcha</div>
                {/* Arrow pointing up */}
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-slate-800"></div>
              </div>
            </div>

            {/* Animated path */}
            <div className="absolute top-1/2 left-4 right-1/2 h-0.5 bg-emerald-400 opacity-60 rounded-full">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse absolute -top-0.5 right-0"></div>
            </div>
          </div>
        </div>

        {/* Contact Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Address Card */}
          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-emerald-500/50 transition-all duration-300">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center">
                <MapPin className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Adresse</h3>
                <p className="text-slate-400">Guelma , Algerie</p>
              </div>
            </div>
          </div>

          {/* Phone Card */}
          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-emerald-500/50 transition-all duration-300">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center">
                <Phone className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <h4 className="text-white font-semibold mb-2" > Téléphone </h4>
                <p className="text-slate-400">29 404 409</p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <button
            onClick={handleGetDirections}
            className={`flex-1 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/25 flex items-center justify-center space-x-3 ${
              isAnimating ? 'scale-95' : 'hover:scale-105'
            }`}
          >
            <Navigation className="w-5 h-5" />
            <span>Obtenir l&apos;Itinéraire</span>
          </button>
          
          <button
            onClick={handleCallNow}
            className="flex-1 bg-slate-700 hover:bg-slate-600 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-lg border border-slate-600 hover:border-emerald-500/50 flex items-center justify-center space-x-3"
          >
            <Phone className="w-5 h-5" />
            <span>Appeler maintenant</span>
          </button>
        </div>

        {/* Hours Information */}
        <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
          <div className="flex items-center space-x-4">
            <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
            <div className="flex items-center space-x-3 text-slate-300">
              <Clock className="w-5 h-5 text-emerald-400" />
              <span className="font-medium">Lun-Ven: 8h-18h | Sam: 9h-16h</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}