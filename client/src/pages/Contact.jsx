import React, {useRef, useState} from 'react';
import Lottie from 'lottie-react';
import animation from '../assets/contact.json'

import { motion } from 'framer-motion';

import { styles } from '../styles';
import {fadeIn, textVariant} from '../utils/motion';
import { slideIn } from "../utils/motion";

import { SectionWrapper } from '../hoc';
import emailjs from "@emailjs/browser";

const Contact = () => {
    const formRef = useRef();
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const {target} = e;
        const {name, value} = target;

        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs
        .send(
          'service_8ug5t08',
          'template_89r4q4d',
          {
            from_name: form.name,
            to_name: "Dylan",
            from_email: form.email,
            to_email: "2610dylan@gmail.com",
            message: form.message,
          },
          'i_IFgvR2F8kYMIPmq'
        )
        .then(
          () => {
            setLoading(false);
            alert("Thank you. I will get back to you as soon as possible.");
  
            setForm({
              name: "",
              email: "",
              message: "",
            });
          },
          (error) => {
            setLoading(false);
            console.error(error);
  
            alert("Ahh, something went wrong. Please try again.");
          }
        );
    };
  return (
    <>
    <motion.div variants={textVariant}>
        <p className={styles.sectionSubText}>Get in Touch</p>
        <h2 className={styles.sectionHeadText}>Contact.</h2>
    </motion.div>

    <motion.div variants={slideIn("left", "tween", 0.2, 1)} className="flex justify-center items-center">
        <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex-col gap-8 bg-contact p-10 border-secondary border-4 rounded-lg w-full">
        <label className='flex flex-col'>
            <span className='text-tertiary font-bold mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium mb-4'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-tertiary font-bold mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium mb-4'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-tertiary font-bold mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='Just want to chat? write me a message...'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium mb-4'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>

        <Lottie animationData={animation} />

    </motion.div>

    </>
  )
}

export default SectionWrapper(Contact, 'contact');