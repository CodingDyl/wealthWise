import React from 'react'
import Lottie from 'lottie-react';
import animationData from '../assets/finance_4.json';
import { Navbar } from '../components';
import { styles } from '../styles';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <Navbar />
      <div className="mx-auto flex my-auto justify-around items-center">
      <div className="flex flex-col justify-around gap-2 px-2 py-4 bg-black bg-opacity-40 rounded-md max-w-[50%]">
          <h1 className={styles.heroHeadText}>Welcome to <span className="text-[#ec8c5c]">WealthWise</span></h1>
          <p className={styles.heroSubText}>Start your financial journey today!</p>
        </div>

        <Lottie animationData={animationData} className="w-[500px] h-[500px]" loop={true} />
      </div>
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-white-100 flex justify-center items-start p-2">
            <motion.div animate={{y: [0, 24, 0]}} transition={{duration: 1.5, repeat: Infinity, repeatType: 'loop' }} className="w-3 h-3 rounded-full bg-secondary mb-1"/>
          </div>
        </a>
      </div>
    </section>
    
  )
}

export default Hero