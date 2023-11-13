import Image from 'next/image'
import React from 'react'

const FooterSection = () => {
  return (
    <>
    <div className='bg-[#000A1F] py-16'>
        <div className='container mx-auto px-4'>
          <div className='flex flex-col gap-2'>
        <Image 
            src={'/icons/kuykilat_white.svg'} 
            alt={'logos_icons'} 
            width={167} 
            height={69}
        />
        <p className='text-white text-lg text-left text-opacity-90'>Memberikan pelayanan yang terbaik dengan harga yang paling masuk akal.</p>
          </div>

        </div>
      </div>
      <div className='bg-[#F5F5F5] py-1'>
        <div className='container mx-auto flex flex-col-reverse  gap-4 md:gap-0 md:flex-row justify-between items-center'>
          <p className='text-base'>{`© Copyright ${new Date().getFullYear()}`}</p>
          <div className='flex md:flex-row flex-col gap-2 md:gap-8 justify-center items-center'>
            <a target="_blank" href={`https://api.whatsapp.com/send?phone=${process.env.NEXT_PUBLIC_PHONE_NUMBER}`} className='flex flex-row gap-2'>
              <Image 
              src={'/icons/whatsapp.svg'} 
              alt={'logos_wa'} 
              width={24} 
              height={24}
              />
              <p className='text-[#000A1F] text-left text-opacity-90 text-base'>+{process.env.NEXT_PUBLIC_PHONE_NUMBER}</p>
            </a>
            <a target="_blank" href={`https://www.instagram.com/${process.env.NEXT_PUBLIC_INSTAGRAM}`} className='flex flex-row gap-2'>
              <Image 
              src={'/icons/instagram.svg'} 
              alt={'logos_wa'} 
              width={24} 
              height={24}
              />
              <p className='text-[#000A1F] text-left text-opacity-90 text-base'>@{process.env.NEXT_PUBLIC_INSTAGRAM}</p>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default FooterSection