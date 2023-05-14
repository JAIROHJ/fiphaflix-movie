'use client'
import React, { useState } from 'react';
import styles from '@/app/contact/contact.module.css';
import {Mulish} from "next/font/google";

const mulish = Mulish({
    subsets: ['latin'],
    display: 'swap',
    weight: ['300', '400', '500', '600', '700', '800', '900']
})



const ContactForm = () => {
    const [user,setUser] = useState({
        username:"",
        email:"",
        phone:"",
        message:""
    })

    const [status, setStatus] = useState(null);

    const handleChange = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
    
        setUser((prevUser) => ({...prevUser, [name] : value}));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/contact', {
                method:'POST',
                headers:{"Content_Type":"application/json"},
                body: JSON.stringify({
                    username:user.username,
                    email:user.email,
                    phone:user.phone,
                    message:user.message
                })
            })
            // Set the status based on the response from the API route
            if (response.status === 200) {
                setUser({
                    username: "",
                    email: "",
                    phone: "",
                    message: ""
                })
                setStatus('success');
            } else {
                setStatus('error');
            }

        }catch (e) {
            console.log(e)
        }

    }

    


  return (
    <div>
        <form className={styles.contact_form} onSubmit={handleSubmit}>
        <div className={styles.input_field}>
                <label htmlFor="username" className={styles.label}>
                    Enter Your Name
                    <input type="text" name="username" id="username" placeholder='Enter your name' value={user.username} onChange={handleChange} required className='mulish.className' />
                </label>
            </div>
            <div className={styles.input_field}>
                <label htmlFor="email" className={styles.label}>
                    Enter Your Email
                    <input type="email" name="email" id="email" placeholder='Enter your email'value={user.email} onChange={handleChange} required
                           autoComplete="off" className='mulish.className' />
                </label>
            </div>
            <div className={styles.input_field}>
                <label htmlFor="phone" className={styles.label}>
                    Enter Your Phone Number
                    <input type="number" name="phone" id="phone" placeholder='Enter your phone Number'value={user.phone} onChange={handleChange} className='mulish.className' required
                           autoComplete="off" />
                </label>
            </div>
            <div className={styles.input_field}>
                <label htmlFor="message" className={styles.label}>
                    Enter Your Message
                    <textarea  name="message" id="message" rows={5} placeholder='Enter Your Message'value={user.message} onChange={handleChange} className='mulish.className' required
                           autoComplete="off" />
                </label>
            </div>
            <div>
            {status === 'success' && <p className={styles.success_msg}>Thank you for your message!</p>}
                {status === 'error' && <p className={styles.error_msg}>There was an error submitting your message. Please try again.</p>}
            
            <button type="submit" className={mulish.className}>Send Message</button>
            </div>
            
            
        </form>
    </div>
  )
}

export default ContactForm