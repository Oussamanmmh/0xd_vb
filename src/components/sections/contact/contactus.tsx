import React from 'react'
import DentalContactSection from './contact'
import DentalLocationMapSection from './location'
import { MapPin, Phone } from 'lucide-react'

export const ContactUs = () => {
  return (
    <div className='bg-[#1C1F20]  flex flex-col items-center justify-center gap-8 '>
            <div className='flex flex-col items-center justify-center  gap-4  px-20 mt-12 '>
                        <h1 className='text-4xl font-bold text-[#CCC7C1]'>Contactez le Dr. Nemamcha Oussama</h1>
                        <p className='text-xl text-[#B0AA9F] text-center'>
                           Prêt à planifier votre rendez-vous? Contactez-nous aujourd'hui
                        </p>
                </div>
                <div className=''>
                     <DentalLocationMapSection/>
                </div>
        <div className="px-6 py-16 bg-gradient-to-br  w-full">
            <div className='w-full  h-0.5 bg-white mb-6'></div>
            <div className="max-w-2xl mx-auto text-center ">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                Dr. Nemamcha Oussama
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-slate-300 mb-8 ">
                <div className="flex items-center gap-2">
                <MapPin size={18} className="text-teal-400" />
                <span>Guelma , Hadj mbarek</span>
                </div>
                
                <div className="flex items-center gap-2">
                <Phone size={18} className="text-teal-400" />
                <span>29 404 409</span>
                </div>
            </div>
            
            <button className="flex items-center gap-3 bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-full transition-colors duration-200 font-semibold mx-auto">
                <Phone size={20} />
                Call
            </button>
            </div>
        </div>
    </div>
  )
}
