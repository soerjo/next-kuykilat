'use client'

import React from 'react'
import Image from 'next/image'

const Navbar = () => {
    const [state, setstate] = React.useState(false)
  return (
    <nav className='flex justify-between items-center py-2 container mx-auto px-4'>
        <a href="#home">
            <Image src={'/kuykilat_logo.svg'} alt={'logo_kuykilat'} width={136} height={56}/>
        </a>
        <ul className='hidden md:flex flex-col md:flex-row gap-8 absolute md:relative bg-white z-50 left-0 top-0 md:w-auto w-full md:py-0 py-8'>
            <li className='flex md:hidden self-end px-8' onClick={()=> setstate(false)}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 6L6 18" stroke="#000A1F" strokeLinecap="square" strokeLinejoin="round"/>
                    <path d="M6 6L18 18" stroke="#000A1F" strokeLinecap="square" strokeLinejoin="round"/>
                </svg>
            </li>

            <li className='mx-auto'><a href="#home" onClick={()=> setstate(false)}>Home</a></li>
            <li className='mx-auto'><a href="#services" onClick={()=> setstate(false)}>Layanan</a></li>
            <li className='mx-auto'><a href="#about-us" onClick={()=> setstate(false)}>About Us</a></li>
            <li className='mx-auto'><a href="#testimonial" onClick={()=> setstate(false)}>Testimonial</a></li>
            <li className='flex md:hidden mx-auto'>        
                <a 
                className='bg-[#437FF2] px-4 py-2 rounded-full text-white'
                target='_blank'
                href={`https://api.whatsapp.com/send?phone=${process.env.NEXT_PUBLIC_PHONE_NUMBER}`}
                >
                    Hubungi Kami
                </a>
            </li>
        </ul>
        {state && (
        <ul className='md:hidden flex flex-col md:flex-row gap-8 absolute md:relative bg-white z-50 left-0 top-0 md:w-auto w-full md:py-0 py-8'>
            <li className='flex md:hidden self-end px-8' onClick={()=> setstate(false)}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 6L6 18" stroke="#000A1F" strokeLinecap="square" strokeLinejoin="round"/>
                    <path d="M6 6L18 18" stroke="#000A1F" strokeLinecap="square" strokeLinejoin="round"/>
                </svg>
            </li>

            <li className='mx-auto'><a href="#home" onClick={()=> setstate(false)}>Home</a></li>
            <li className='mx-auto'><a href="#services" onClick={()=> setstate(false)}>Layanan</a></li>
            <li className='mx-auto'><a href="#about-us" onClick={()=> setstate(false)}>About Us</a></li>
            <li className='mx-auto'><a href="#testimonial" onClick={()=> setstate(false)}>Testimonial</a></li>
            <li className='flex md:hidden mx-auto'>        
                <a 
                className='bg-[#437FF2] px-4 py-2 rounded-full text-white'
                target='_blank'
                href={`https://api.whatsapp.com/send?phone=${process.env.NEXT_PUBLIC_PHONE_NUMBER}`}
                >
                    Hubungi Kami
                </a>
            </li>
        </ul>
        )}
        <div className='flex md:hidden' onClick={()=> setstate(!state)}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 7H19" stroke="#000A1F" strokeWidth="2" strokeLinecap="round"/>
                <path d="M5 12H15" stroke="#000A1F" strokeWidth="2" strokeLinecap="round"/>
                <path d="M5 17H11" stroke="#000A1F" strokeWidth="2" strokeLinecap="round"/>
            </svg>
        </div>

        <a 
        className='bg-[#437FF2] px-4 py-2 rounded-full text-white md:flex hidden'
        target='_blank'
        href={`https://api.whatsapp.com/send?phone=${process.env.NEXT_PUBLIC_PHONE_NUMBER}`}
        >
            Hubungi Kami
        </a>
  </nav>
  )
}

export default Navbar