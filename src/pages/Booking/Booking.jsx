import React, { useState, useRef } from 'react';
import styles from './Booking.module.css';
import emailjs from '@emailjs/browser';

const Booking = () => {
    const form = useRef();
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs
            .sendForm(
                'service_kqfam0m',
                'template_0nk7u7r',
                form.current,
                'AuTqDu9UI6pmz293H'
            )
            .then(
                () => {
                    setLoading(false);
                    alert('Thank you. We will get back to you as soon as possible.');
                    form.current.reset();
                },
                (error) => {
                    setLoading(false);
                    alert('Something went wrong.');
                }
            );
    };

    return (
        <div>
            <form ref={form} onSubmit={handleSubmit}>
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
                    <div>
                        <button className={styles.sendGroup} type='submit' id='btnSubmit'>
                            <typography className={styles.sendButtonText} >Book a Demo</typography>
                        </button>
                    </div>

                </div>
            </form>
        </div>
    );
};

export default Booking;