import Button from '@/components/atoms/button'
import Image from 'next/image'
import React from 'react'

const Profile = () => {
  return (
    <section className='section-main flex md:flex-row justify-between items-center mt-[136px] flex-col gap-10  md:gap-[69px] lg:gap-[125px] sm:-ml-20 lg:ml-auto ' >
        <Image width={445} height={445} src={'/assets/image-amy.webp'} className='aspect-square w-[300px] h-[300px] sm:w-[364px] sm:h-[364px] lg:w-[445px] lg:h-[445px]' alt='prifle' />
        <div className='flex flex-col gap-6 lg:gap-8 text-center items-center md:text-left md:items-start' >
          <h1 className='heading-xs lg:heading-md sm:heading-sm'>I’m Amy, and I’d love to work on your next project</h1>
          <p className='font-[500] text-[18px]'>I love working with others to create beautiful design solutions. I’ve designed everything from brand illustrations to complete mobile apps. I’m also handy with a camera!</p>
          <Button className='bg-light-red text-white hover:bg-summer-yellow'>Free Consultation</Button>
        </div>
    </section>
  )
}

export default Profile