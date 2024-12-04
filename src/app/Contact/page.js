"use client";
import Image from 'next/image';
import contactStyles from './Contact.module.css';

export default function ContactPage() {
  return (
    <div>
      <div className={contactStyles.heroContainer}>
        <Image
          src="/old_japan_2.jpg"
          width={1500} // Adjusted width for a larger image
          height={900} // Adjusted height to keep the image proportional
          className={contactStyles.heroImage}
          alt="Japan Mountain"
        />
        <h1 className={contactStyles.heroHeading}>Contact Us</h1>
      </div>


      <div className={contactStyles.infoContainer}>
  <h2 className={contactStyles.infoHeading}>We Love to Hear From You!</h2>
  <p className={contactStyles.infoText}>
    At japan Fly, we are dedicated to creating meaningful connections and fostering a strong community. If you have any questions, comments, or suggestions, feel free to reach out to us. Our team is always here to assist you, whether it regarding our content, services, or anything else you need help with. Your feedback is incredibly valuable to us, and we appreciate your time and support!
  </p>
  <p className={contactStyles.infoText}>
    Please use the form above to send us a message, and we will get back to you as soon as possible. We look forward to hearing from you!
  </p>
</div>

      <div className={contactStyles.contactContainer}>
        <form className={contactStyles.contactForm}>
          <div className={contactStyles.formGroup}>
            <label className={contactStyles.label} htmlFor="name">Name:</label>
            <input className={contactStyles.input} type="text" id="name" name="name" required />
          </div>
          <div className={contactStyles.formGroup}>
            <label className={contactStyles.label} htmlFor="email">Email:</label>
            <input className={contactStyles.input} type="email" id="email" name="email" required />
          </div>
          <div className={contactStyles.formGroup}>
            <label className={contactStyles.label} htmlFor="message">Message:</label>
            <textarea className={contactStyles.textarea} id="message" name="message" rows="5" required></textarea>
          </div>
          <button className={contactStyles.button} type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}
