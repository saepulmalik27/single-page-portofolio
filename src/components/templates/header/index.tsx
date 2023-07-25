import React from 'react'
import Logo from '@/components/atoms/logo'
import Button from '@/components/atoms/button'

const Header = () => {
  return (
    <div className='flex justify-between items-center gap-5 section-main'>
        <Logo/>
        <Button className='bg-black text-light-cream hover:bg-galactic-blue'>Free Consultation</Button>
    </div>
  )
}

export default Header