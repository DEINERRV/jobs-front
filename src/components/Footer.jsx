import React from 'react'
import { logoWhite, logoBlack, menu, close } from '../assets'

function Footer() {
  return (

    <footer className='bg-primary text-white mt-15 w-full'>
      <div className='w-full max-w-screen-xl mx-auto p-4 md:py-8'>
        <div className='sm:flex sm:items-center sm:justify-between'>
          <a href='#' className='flex items-center mb-4 sm:mb-0'>
            <img src={logoWhite} className='h-8 mr-3' alt='Logo' />
            <span className='self-center text-2xl font-semibold whitespace-nowrap'>Job Aplications™</span>
          </a>
          <ul className='flex flex-wrap items-center mb-6 text-sm font-medium sm:mb-0'>
            <li>
              <a href='#' className='mr-4 hover:underline md:mr-6 '>About</a>
            </li>
            <li>
              <a href='#' className='mr-4 hover:underline md:mr-6'>Privacy Policy</a>
            </li>
            <li>
              <a href='#' className='mr-4 hover:underline md:mr-6 '>Licensing</a>
            </li>
            <li>
              <a href='#' className='hover:underline'>Contact</a>
            </li>
          </ul>
        </div>
        <hr className='my-6 border-gray-200 sm:mx-auto lg:my-8' />
        <span className='block text-sm sm:text-center'>© 2023 <a href='#' className='hover:underline'>Deiner Rodriguez</a>. All Rights Reserved.</span>
      </div>
    </footer>


  )
}

export default Footer