import React from 'react';

import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';
import { styles } from '../styles';
import { Tilt } from 'react-tilt';

import { services } from '../constants';

import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className='bg-black-200 rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img
            src={icon}
            alt='web-development'
            className='w-16 h-16 object-contain'
          />
  
          <h3 className='text-white-100 text-[20px] font-bold text-center'>
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About WealthWise.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-white text-[17px] max-w-3xl leading-[30px]'
      >
        
WealthWise is a user-friendly personal finance tracker that revolutionizes money management. With its intuitive interface and powerful features, WealthWise empowers individuals to take control of their finances. It provides a comprehensive overview of income, expenses, and investments, allowing users to track their financial health effortlessly. By categorizing expenses, setting budgets, and offering real-time notifications, WealthWise helps users make informed decisions and achieve their financial goals. With its intelligent analytics and seamless integration with financial institutions, WealthWise is the perfect tool for anyone looking to optimize savings, increase investments, and build a strong financial foundation.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about");