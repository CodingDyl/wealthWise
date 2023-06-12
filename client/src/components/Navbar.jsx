import React from 'react'
import { Avatar } from '@mantine/core';
import { wealth } from '../assets';

const Navbar = () => {
  return (
    <nav>
      <div className="w-full flex justify-around items-center px-20 py-4 bg-black border-b-2 text-white text-[24px] bg-opacity-20">
        <div className="flex items-center justify-start gap-2">
          <Avatar src={wealth} alt="it's me" radius="50%" />
          <a href="/" className="brand-logo">WealthWise</a>
        </div>
        <ul id="nav-mobile" className="flex gap-6 text-[18px] text-normal">
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="/">Login</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar