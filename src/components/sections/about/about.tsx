import React from 'react'
import { Award , Heart , Clock , Activity} from 'lucide-react'

export const AboutSection = () => {
  return (
    <div className='bg-[#181A1B] md:h-screen flex flex-col items-center justify-center gap-8 py-12 '>
            <div className='flex flex-col items-center justify-center  gap-4  md:px-20'>
                <h1 className='text-4xl text-[#CCC7C1] text-center font-bold'>À Propos du Dr. Nemamcha Oussama</h1>
                <p className='text-xl text-[#B0AA9F] text-center'>Le Dr. Oussama Nemamcha s engage à offrir des soins dentaires de qualité supérieure dans un cadre moderne et accueillant.</p>
            </div> 
            <div>   
                    <div className='px-4'>
                            <h1 className='text-2xl text-[#CCC7C1] font-bold mb-6'>Pourquoi Choisir le Cabinet Dentaire du Dr Nemamcha Oussama</h1>
                            <div className='flex flex-col items-start justify-center gap-2 '>
                                    <div className='flex flex-row items-center justify-between gap-4'>
                                        <div className='rounded-full w-fit bg-teal-500/20 p-2'>
                                                <Award className='size-6 text-teal-500' />
                                        </div>
                                        <div>  
                                          
                                                <h2 className='text-lg font-semibold'>Soins d&lsquo;Expert</h2>
                                                <p className='text-[#B0AA9F] '>Le Dr. Oussama Nemamcha est un expert en dentisterie.</p>
                                        </div>

                                    </div>
                                    <div className='flex flex-row items-center justify-between gap-4'>
                                        <div className='rounded-full w-fit bg-teal-500/20 p-2'>
                                                <Activity className='size-6 text-teal-500' />
                                        </div>
                                        <div>
                                                <h2 className='text-lg font-semibold'>Technologie Avancée</h2>
                                                <p className='text-[#B0AA9F] '>Notre cabinet est équipé des dernières technologies dentaires.</p>
                                        </div>
                                    </div>
                                    <div className='flex flex-row items-center justify-between gap-4'>
                                          <div className='rounded-full w-fit bg-teal-500/20 p-2'>
                                                <Clock className='size-6 text-teal-500' />
                                        </div>
                                        <div>
                                                <h2 className='text-lg font-semibold'>Approche Personnalisée</h2>
                                                <p className='text-[#B0AA9F] '>Chaque patient est unique, et nous adaptons nos traitements.</p>
                                        </div>
                                    </div>
                            </div>
                    </div>
            </div>
            <div className='flex flex-col items-center justify-center gap-4'>
                <div className='rounded-full w-fit bg-teal-500/20 p-4 animate-pulse'>
                    <Heart className='size-10 text-teal-500' />
                </div>
                <div className='text-center'>       
                        <h2 className='text-2xl font-bold'>100%</h2>
                        <p className='text-[#B0AA9F] text-lg'>Soins Comfort</p>
                 </div>
            </div>
    </div>
  )
}
