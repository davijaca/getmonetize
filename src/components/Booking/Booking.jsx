import React, { useState, useRef } from 'react';
import styles from './Booking.module.css';
import emailjs from '@emailjs/browser';
import Button from '../Button/Button.jsx';

const Booking = () => {
  const form = useRef();
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(form.current);
    console.log([...formData.entries()]);

    try {
      const response = await emailjs.sendForm(
        'service_91gprvc',
        'template_fo30bjf',
        form.current,
        'OO0_XYfpfwU6LG-0W'
      );

      console.log('Email sent successfully:', response.text);
      setIsSuccess(true);
    } catch (error) {
      console.log('Error sending email:', error);
    }

    form.current.reset();
  };

  return (
    <div>
      <form ref={form} onSubmit={onSubmit}>
        {isSuccess ? (
          <div className={styles.successMessage}>
            Demo booked successfully! We'll contact you soon.
          </div>
        ) : (
          <div className={styles.bookingForm}>
            <div className={styles.formHeader}>
              <h2 className={styles.formTitle}>Let’s keep in touch!</h2>
            </div>

            <div className={styles.inlineFields}>
              <div className={styles.bookingField}>
                <label className={styles.bookingLabel}>First Name</label>
                <input
                  className={`${styles.dataBox} ${styles.firstNameInput}`}
                  type='text'
                  name='firstName'
                  required
                />
              </div>
              <div className={styles.bookingField}>
                <label className={styles.bookingLabel}>Last Name</label>
                <input
                  className={styles.dataBox}
                  type='text'
                  name='lastName'
                  required
                />
              </div>
            </div>
            <div className={styles.inlineFields}>
              <div className={styles.bookingField}>
                <label className={styles.bookingLabel}>Company</label>
                <input
                  className={styles.dataBox}
                  type='text'
                  name='company'
                  required
                />
              </div>
              <div className={styles.bookingField}>
                <label className={styles.bookingLabel}>Email Address</label>
                <input
                  className={styles.dataBox}
                  type='email'
                  name='email'
                  required
                />
              </div>
            </div>
            <div className={styles.bookingField}>
              <label className={styles.bookingLabel}>Message</label>
              <textarea
                className={styles.messageBox}
                name='message'
                required
              ></textarea>
            </div>
            <Button color='black' type='submit' />
          </div>
        )}
      </form>
    </div>
  );
};

export default Booking;
