import Image from 'next/image'
import React from 'react'

const services = [
    {
      icon_src: "/icons/car.svg",
      title: "Jasa Antar Mobil",
      description: "Mengantar keluarga, jarak jauh, atau pindah rumah."
    },
    {
      icon_src: "/icons/food.svg",
      title: "Jasa Antar Makanan",
      description: "Mengantar makanan segera cepat dan tepat."
    },
    {
      icon_src: "/icons/bicycle.svg",
      title: "Jasa Antar Motor",
      description: "Mengatar / menjemput perorangan cepat dan sigap."
    }
  ]
  
const ServiceSection = () => {
  return (
    <div id="services" className='container mx-auto pb-8'>
    <div className='flex flex-col py-8 gap-4'>
      <h1>Layanan Kami</h1>
      <p>Memberikan pelayanan yang terbaik sesuai kebutuhan cutomer.</p>
    </div>
    <div className='flex flex-col md:flex-row gap-8'>
      {
        services.map((val, index)=>(
          <div key={index} className='bg-[#F5F5F5] w-full md:w-3/4 p-12 flex flex-col justify-start items-center gap-8 rounded-2xl'>
            <div className='bg-white rounded-full w-[89px] h-[89px] flex justify-center items-center'>
              <Image 
                className='w-[70px] h-[70px]'
                src={val.icon_src} 
                alt={'logos_icons'} 
                width={89} 
                height={89}
              />
            </div>
            <h2>{val.title}</h2>
            <p>{val.description}</p>
          </div>
        ))
      }

    </div>
  </div>
  )
}

export default ServiceSection