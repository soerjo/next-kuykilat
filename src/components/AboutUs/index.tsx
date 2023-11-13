import Image from 'next/image'
import React from 'react'

const AboutUsSection = () => {
  return (
    <div id='about-us' className='bg-[#A7B3C0] bg-opacity-20 py-12'>
    <div className='flex flex-col md:flex-row gap-8 container mx-auto px-4'>
      <Image 
        className='rounded-2xl object-contain'
        src={'/images/pexels-tima-miroshnichenko-6169662.png'} 
        alt={'logos_icons'} 
        width={465} 
        height={569}
      />
      <div className='w-full md:w-5/12 flex flex-col gap-4'>
        <h1 className='text-left'>Tentang Kami</h1>
        <p className='text-left'>Kami memberikan layanan jasa mengantar barang, makanan, ataupun orang. Dimana saja, kemana saja, apa saja dan kapan saja, kami siap memberikan layanan kami.</p>
        <p className='text-left'>Harga yang masuk akal dan tentu saja memberikan jaminan barang atau layanan kami sampai sesuai tujuan.</p>
      </div>
    </div>
  </div>
  )
}

export default AboutUsSection