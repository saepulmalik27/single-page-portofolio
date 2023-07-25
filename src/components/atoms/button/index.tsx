"use client"
import React from 'react'
import { twMerge } from 'tailwind-merge'

type ButtonProps = {
    children: React.ReactNode
    onClick?: () => void
    className?: string
}

const Button : React.FC<ButtonProps> = ({children, className, onClick}) => {
  return (
    <button className={twMerge('w-fit px-7 py-2 md:px-[45px] md:py-[14px] rounded-full font-bold text-center leading-7 text-sm md:text-base  ', className)} onClick={onClick} >{children}</button>
  )
}

export default Button