import Button from '@/components/atoms/button'
import React from 'react'

const Contact = () => {
  return (
    <section className='section-main '>
      <div className='grid grid-cols-1 gap-6 md:grid-cols-2 mb-10 md:mb-[60px] lg:mb-14 bg-black rounded-[10px] md:py-14 md:px-[75px] lg:py-20 lg:px-[65px] py-12 px-6'>
      <div className='flex flex-col items-center justify-center gap-6'>
        <h1 className='heading-xs md:heading-sm lg:heading-md text-white' >Book a call with me</h1>
        <p className='text-main text-white text-center'>I’d love to have a chat to see how I can help you. The best first step is for us to discuss your project during a free consultation. Then we can move forward from there.</p>
      </div>
      <div className='flex justify-center items-center lg:justify-end'>
      <Button className='bg-light-red hover:bg-summer-yellow text-white' >Free Consultation</Button>
      </div>
      </div>
     
    </section>
  )
}

export default Contact