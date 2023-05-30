import React, { useState } from 'react'
import { logoWhite, logoBlack, menu, close } from '../assets'
import { navLinks } from '../constants'
import { IoIosLogOut } from 'react-icons/io'
import { persistor } from '../store'

function Navbar() {
  const [toggle, setToggle] = useState(false)
  const [isShow, setIsShow] = useState(false)

  const handleLogOut = ()=>{
    persistor.purge()
    setIsShow(false)
    window.location.href = '/login'
  }

  return (
    <>
    
    <nav className={`px-6 w-full flex items-center py-5 top-0 z-20 bg-primary`}>
      <div className='w-full flex justify-between items-center max-w-7x1 mx-auto'>
        <div
          className='flex items-center gap-2'
          onClick={() => {
            window.scrollTo(0, 0)
          }}
        >
          <img src={logoWhite} alt="logo" className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer'>Job Applications</p>
        </div>
        <ul className='list-none hidden sm:flex flex-row items-center gap-10 mr-10'>
          {navLinks.map(link =>
            <li
              key={link.id}
              className='hover:text-black text-[18px] font-medium cursor-pointer'
              onClick={() => setActive(link.title)}
            >
              <a href={`${link.link}`} target="_blank">{link.title}</a>
            </li>
          )}
          <li className='hover:text-black text-4xl cursor-pointer'>
            <IoIosLogOut 
              onClick={()=>setIsShow(true)}
            />
          </li>
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt="menu"
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)}
          />

          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className='list-none flex justify-end items-start flex-col gap-4'>
              {navLinks.map(link =>
                <li
                  key={link.id}
                  className='font-poppins font-medium cursor-pointer text-[16px]'
                  onClick={() => {
                    setActive(link.title)
                    setToggle(!toggle)
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              )}
              <li>
                <IoIosLogOut 
                  onClick={handleLogOut}
                />
              </li>
            </ul>
          </div>
        </div>

      </div>
    </nav>

    {isShow?<Modal handleCancel={()=>setIsShow(false)} handleLogOut={handleLogOut} />:<></>}
    </>
  )
}


const Modal = ({handleCancel,handleLogOut}) => {
  return (
      <div className='fixed inset-0 flex items-start justify-center mt-10'>    
          <div className='bg-white text-black rounded-lg shadow-lg p-6 transform transition-transform duration-300 ease-in-out'>
              <h2 className='text-lg font-bold mb-4'>Confirm Log Out</h2>
              <p className='mb-4'>Are you sure you want to log out?</p>

              <div className='flex justify-center'>
                  <button 
                      className='px-4 py-2 bg-red-500 text-white rounded mr-2'
                      onClick={handleLogOut}
                  >Log Out</button>
                  <button 
                      className='px-4 py-2 bg-gray-400 text-white rounded'
                      onClick={handleCancel}
                  >Cancel</button>
              </div>
          </div>
      </div>
  )
}

export default Navbar