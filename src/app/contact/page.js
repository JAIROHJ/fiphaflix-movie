import React from 'react'
import ContactCard from '../components/ContactCard';
import styles from "./contact.module.css"
import ContactForm from '../components/ContactForm';

const page = () => {
  return (
    <>
    <div className={styles.container}>
      <h1>Contact Us</h1>
      <ContactCard/>

      <section className={styles.contact_section}>
      <h2>We'd love to hear <span> from you </span></h2>
      <ContactForm/>
      </section>
    </div>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111497.07331411503!2d75.67313679745891!3d29.156315708592597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391232d8011d0c37%3A0x1d3f0df105af1178!2sHisar%2C%20Haryana!5e0!3m2!1sen!2sin!4v1683889380945!5m2!1sen!2sin" width={600 }height={450} style={{border:0}} allowfullscreen="" loading="lazy" className={styles.mapping} referrerpolicy="no-referrer-when-downgrade"></iframe>
    </>

    
  )
}

export default page