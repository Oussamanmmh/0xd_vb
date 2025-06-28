
import tooth from "../../../public/tooth_smile.png"
import Image from 'next/image';

export default function DentalLoadingScreen( { progress } : { progress: number }) {
  
  return (
    <div className="min-h-screen bg-gradient-to-br bg-[#1C1F20]  relative overflow-hidden flex items-center justify-center">
      {/* Floating Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Circles */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-teal-400 rounded-full animate-bounce" style={{animationDelay: '0s', animationDuration: '3s'}}></div>
        <div className="absolute top-32 right-32 w-3 h-3 bg-yellow-400 rounded-full animate-bounce" style={{animationDelay: '1s', animationDuration: '4s'}}></div>
        <div className="absolute bottom-40 left-16 w-5 h-5 bg-teal-300 rounded-full animate-bounce" style={{animationDelay: '2s', animationDuration: '3.5s'}}></div>
        <div className="absolute bottom-20 right-20 w-4 h-4 bg-yellow-300 rounded-full animate-bounce" style={{animationDelay: '0.5s', animationDuration: '4.5s'}}></div>
        
        {/* Floating Stars */}
        <div className="absolute top-40 left-1/4 animate-pulse">
          <div className="w-6 h-6 text-yellow-400">✨</div>
        </div>
        <div className="absolute bottom-1/3 right-1/4 animate-pulse" style={{animationDelay: '1.5s'}}>
          <div className="w-6 h-6 text-yellow-300">✨</div>
        </div>
        
        {/* Floating Hearts */}
        <div className="absolute top-16 right-1/3 animate-pulse">
          <div className="w-6 h-6 text-red-400">❤️</div>
        </div>
        
        {/* Floating Dental Elements */}
        <div className="absolute top-1/3 left-12 animate-bounce" style={{animationDelay: '3s', animationDuration: '5s'}}>
          <div className="w-8 h-8 text-blue-300">🦷</div>
        </div>
        <div className="absolute bottom-1/4 right-12 animate-bounce" style={{animationDelay: '1.5s', animationDuration: '4s'}}>
          <div className="w-6 h-6 text-green-300">🪥</div>
        </div>
      </div>

      {/* Main Content */}
      <div className="text-center z-10 max-w-2xl mx-auto px-6">
        <Image 
            src={tooth}
            alt="Smiling Tooth Mascot"
            className="w-48 h-48 mx-auto mb-8 animate-tooth-bounce"
            priority
            sizes="(max-width: 640px) 192px, (max-width: 768px) 256px, 320px"
        />

        {/* Text Content */}
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in">
          Dr. Nemamcha Oussama
        </h1>
        
        <p className="text-xl md:text-2xl text-teal-300 mb-8 animate-fade-in font-bold" style={{animationDelay: '0.5s'}}>
          Dentiste d&lsquo;excellence à Guelma, Algérie
        </p>
        
        <p className="text-lg text-slate-300 mb-12 animate-fade-in" style={{animationDelay: '1s'}}>
          BienVenue Chez Dr. Nemamcha&lsquo;s clinic!
        </p>

        {/* Progress Bar */}
        <div className="w-full max-w-md mx-auto">
          <div className="bg-teal-600 rounded-full h-3 overflow-hidden shadow-inner">
            <div 
              className="h-full bg-teal-400 rounded-full transition-all duration-300 ease-out relative"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-white opacity-30 animate-pulse"></div>
            </div>
          </div>
          <div className="text-center mt-4">
            <span className="text-2xl font-bold text-white">{progress}%</span>
          </div>
        </div>
      </div>

      {/* Additional Floating Elements */}
      
    </div>
    )}