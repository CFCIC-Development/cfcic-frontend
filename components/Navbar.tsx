import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav className='bg-blue-800'>
        <Image 
        src='/Lo.png'
        height={100}
        width={100}
        alt='lo'
        className=''
        />


    </nav>
  )
}

export default Navbar