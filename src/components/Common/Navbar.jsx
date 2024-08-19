import React from 'react'
import logo from '../../assets/PNG/Logo.png'
import { Link } from 'react-router-dom'
  

const Navbar = () => {
  return (
    <>
      <header className='flex w-full bg-opacity-20 fixed z-20 justify-around  text-white h-[12vh] items-center shadow-sm  shadow-black'>
        <div className='ml-[-100px] w-36'>
          <img src={logo} alt="" />
        </div>

          <div className='flex w-[30%] justify-between'>
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/services">Services</Link>
            <Link to="/portfolio">Portfolio</Link>
          </div>

        <div>
          <button><Link to="/contact">Contact Us</Link></button>
        </div>
      </header>
    </>
  )
}

export default Navbar