"use client";
import contactStyles from "./contact.module.css";

export default function ContactPage() {
    return (
      <div className={contactStyles.contactContainer}>
        <h1>Contact Us</h1>
        <form className={contactStyles.contactForm}>
          <div className={contactStyles.formGroup}>
            <label className={contactStyles.label} htmlFor="name">Name:</label>
            <input className={contactStyles.input} type="text" id="name" name="name" required />
          </div>
          <div className={contactStyles.formGroup}>
            <label htmlFor="email"className={contactStyles.label}>Email:</label>
            <input  className={contactStyles.input} type="email" id="email" name="email" required />
          </div>
          <div className={contactStyles.formGroup}>
            <label htmlFor="message"className={contactStyles.label}>Message:</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button className={contactStyles.button}  type="submit">Send</button>
        </form>
      </div>
    );
  }
  