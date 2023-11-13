import Image from 'next/image'
import React from 'react'

const testimony = [
    {
      icon_src: "/icons/quotes.svg",
      description: "Wih pelayanannya keren banget, cepat dan ramah."
    },
    {
      icon_src: "/icons/quotes.svg",
      description: "Memang boleh ada jasa antar seramah ini??"
    },
    {
      icon_src: "/icons/quotes.svg",
      description: "Jasa layanannya bisa antar jauh, ku kira hanya di jabodetabek saja..."
    }
  ]

const TestimonialSection = () => {
  return (
    <div id="testimonial" className='container mx-auto pb-8'>
        <div className='flex flex-col py-8 gap-4'>
            <h1>Testimoni</h1>
        </div>
        <div className='flex flex-col md:flex-row gap-8'>
        {
            testimony.map((val, index)=>(
            <div key={index} className='bg-[#F5F5F5] w-full md:w-3/4 p-12 flex flex-col justify-start items-center gap-8 rounded-2xl'>
                <div className='bg-white rounded-full w-[89px] h-[89px] flex justify-center items-center'>
                <Image 
                    className='w-[45px] h-[45px]'
                    src={val.icon_src} 
                    alt={'logos_icons'} 
                    width={89} 
                    height={89}
                />
                </div>
                <p>{val.description}</p>
            </div>
            ))
        }

        </div>
    </div>  )
}

export default TestimonialSection