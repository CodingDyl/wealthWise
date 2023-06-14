import React, {useState, useEffect} from 'react'
import { Avatar } from '@mantine/core';
import { wealth } from '../assets';
import LoginModal from './Modals/LoginModal';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleLogin = () => {
    setOpen(!open);
    setAnchorEl(null);
    console.log(open);

    //set login
    
  };

  return (
    <>
    <nav>
      <div className="w-full flex justify-around items-center px-20 py-4 bg-black border-b-2 text-white text-[24px] bg-opacity-20">
        <div className="flex items-center justify-start gap-2">
          <Avatar src={wealth} alt="it's me" radius="50%" />
          <a href="/" className="brand-logo">WealthWise</a>
        </div>
        <ul id="nav-mobile" className="flex gap-6 text-[18px] text-normal">
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><button onClick={handleLogin} className="text-white">
                {loggedIn ? <a>Account</a> : <a>Login</a>}
              </button>
          </li>
        </ul>
      </div>
    </nav>
    <LoginModal opened={open} close={() => setOpen(false)} logged={setLoggedIn}/>
    </>
  )
}

export default Navbar