import React from 'react'
import SercicesComponents from './sercicesComponents'
import DentalFAQSection from './questions'

export const ServivesSection = () => {
  return (
    <div className='bg-[#1C1F20]  flex flex-col items-center justify-center gap-8 py-12'>
        <div className='flex flex-col items-center justify-center gap-8 '>
                <div className='flex flex-col items-center justify-center  gap-4  px-20 mt-12 '>
                        <h1 className='text-4xl font-bold text-[#CCC7C1]'>Nos Services Dentaires</h1>
                        <p className='text-xl text-[#B0AA9F] text-center'>
                            Le Dr. Nemamcha Oussama offre une gamme complète de services dentaires pour répondre à tous vos besoins de santé bucco-dentaire
                        </p>

                </div>
                <SercicesComponents/>
                <DentalFAQSection/>
        </div>
    </div>
  )
}
