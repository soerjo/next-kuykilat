import Image from 'next/image'
import React from 'react'

const HomeSection = () => {
  return (
    <div id='home' className='container mx-auto pb-8 relative flex justify-center items-center w-full'>
    <Image 
      className='rounded-tr-2xl rounded-tl-2xl h-[500px] md:h-[553px] w-auto md:w-full object-cover bg-slate-500'
      src={'/images/pexels-kindel-media-6868618.png'} 
      alt={'kuykilat_banner'} 
      width={1144} 
      height={553}
    />
    <div className='absolute flex flex-col gap-4 bottom-[50px] md:w-[651px] bg-white bg-opacity-80 p-8 rounded-xl mx-4'>
      <h1 className='font-bold text-center text-2xl'>Mengantar barang/makanan menjadi lebih mudah dan cepat dengan pelayanan kami</h1>
      <p className='text-center opacity-70'>Memberikan pelayanan yang terbaik  dimana saja, kemana saja, dan kapan saja dengan harga masuk akal tentunya.</p>
    </div>
  </div>
  )
}

export default HomeSection