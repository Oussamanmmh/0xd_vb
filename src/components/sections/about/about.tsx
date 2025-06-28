"use client" ;
import React from 'react'
import { Award , Heart , Clock , Activity} from 'lucide-react'
import { useLanguage } from '@/context/langage-context'
import { content } from '@/lib/content';

export const AboutSection = () => {
        const {language} = useLanguage();
        const t = content[language].about
  return (
    <div className='bg-[#181A1B] md:h-screen flex flex-col items-center justify-center gap-8 py-12 '>
            <div className='flex flex-col items-center justify-center  gap-4  md:px-20'>
                <h1 className='text-4xl text-[#CCC7C1] text-center font-bold'>{t.title}</h1>
                <p className='text-xl text-[#B0AA9F] text-center'>{t.description}</p>
            </div> 
            <div>   
                    <div className='px-4'>
                            <h1 className='text-2xl text-[#CCC7C1] font-bold mb-6'>{t.whyChoose.title}</h1>
                            <div className='flex flex-col items-start justify-center gap-2 '>
                                    <div className='flex flex-row items-center justify-between gap-4'>
                                        <div className='rounded-full w-fit bg-teal-500/20 p-2'>
                                                <Award className='size-6 text-teal-500' />
                                        </div>
                                        <div>  
                                          
                                                <h2 className='text-lg font-semibold'>{t.whyChoose.reasons[0].title}</h2>
                                                <p className='text-[#B0AA9F] '>{t.whyChoose.reasons[0].description}</p>
                                        </div>

                                    </div>
                                    <div className='flex flex-row items-center justify-between gap-4'>
                                        <div className='rounded-full w-fit bg-teal-500/20 p-2'>
                                                <Activity className='size-6 text-teal-500' />
                                        </div>
                                        <div>
                                                <h2 className='text-lg font-semibold'>{t.whyChoose.reasons[1].title}</h2>
                                                <p className='text-[#B0AA9F] '>{t.whyChoose.reasons[1].description}</p>
                                        </div>
                                    </div>
                                    <div className='flex flex-row items-center justify-between gap-4'>
                                          <div className='rounded-full w-fit bg-teal-500/20 p-2'>
                                                <Clock className='size-6 text-teal-500' />
                                        </div>
                                        <div>
                                                <h2 className='text-lg font-semibold'>{t.whyChoose.reasons[2].title}</h2>
                                                <p className='text-[#B0AA9F] '>{t.whyChoose.reasons[2].description}</p>
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
                        <p className='text-[#B0AA9F] text-lg'>{t.whyChoose.comfort}</p>
                 </div>
            </div>
    </div>
  )
}
