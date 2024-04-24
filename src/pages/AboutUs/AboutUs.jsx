import React, { useState, useRef } from 'react';
import styles from './AboutUs.module.css';
import { Link } from 'react-router-dom';
import Booking from '../../pages/Booking/Booking.jsx';
import { Card, CardContent, Grid, Typography } from '@mui/material';
import emailjs from '@emailjs/browser';
import Button from '../../components/Button/Button.jsx';

const cards = [
  {
    id: 1,
    color: '#6B96984D',
    title: 'Innovative Solutions',
    content:
      'Reflecting your commitment to pioneering and cutting-edge approaches in offer wall monetization.',
  },
  {
    id: 2,
    color: '#6B96984D',
    title: 'Profitable Partnership',
    content:
      'Signifying your focus on establishing mutually beneficial relationships with clients, ensuring profitability and success for both parties.',
  },
  {
    id: 3,
    color: '#6B96984D',
    title: 'User-Centric Engagement',
    content:
      'Emphasizing your dedication to creating meaningful and user-friendly experiences within offer walls, enhancing customer engagement.',
  },
  {
    id: 4,
    color: '#A4832B4D',
    title: 'Data-Driven Strategies',
    content:
      'Emphasizing how you use data analysis and insights to make good and focused strategies.',
  },
  {
    id: 5,
    color: '#A4832B4D',
    title: 'Reliability and Trust',
    content:
      "Communicating your company's trustworthiness, reliability, and consistency in delivering high-quality offer wall services to clients.",
  },
  {
    id: 6,
    color: '#A4832B4D',
    title: 'Customized Solutions',
    content:
      'Demonstrating your ability to tailor offer wall monetization solutions to meet the unique needs and goals of each client.',
  },
];

const cardsSecThree = [
  {
    id: 1,
    color: '#C3E1E4',
    src: '/images/PocketHost.png',
    width: '240px',
    height: '52.02px',
  },
  {
    id: 2,
    color: '#C3E1E4',
    src: '/images/Experial.png',
    width: '180px',
    height: '40px',
  },
  {
    id: 3,
    color: '#C3E1E4',
    src: '/images/Vector.png',
    width: '240px',
    height: '52.02px',
  },
];

const AboutUs = () => {
  const [showBookingForm, setShowBookingForm] = useState(false);
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

  const toggleBookingForm = () => {
    setShowBookingForm(!showBookingForm);
  };

  return (
    <div className={styles.websiteContainer}>
      {/* First Website */}

      <div className={styles.firstWebsiteContainer}>
        <div className={styles.containerToMatchDesign}>
          <div className={styles.firstLeft}>
            <div>
              <h1 className={styles.firstLeftTitle1}>About us</h1>
            </div>
            <div>
              <p className={styles.firstLeftText}>
                Something else something else something else lalala Something
                else something else something else lalalaSomething else
                something else something else lalalaSomething else.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Second Website */}

      <div
        style={{
          display: 'grid',
          placeItems: 'center',
          minHeight: '100vh',
          padding: 130,
        }}
      >
        <div className={styles.secondLeft}>
          <h1 className={styles.secondTitle}>Our Mission</h1>
          <p className={styles.secondSubTitle}>
            We aim to redefine B2B success by providing unparalleled offerwall
            monetization solutions, tailored for maximum revenue and user
            engagement.
          </p>
        </div>
        <div className={styles.root}>
          <Grid container spacing={5}>
            {cards.map((card) => (
              <Grid item xs={12} sm={6} md={4} key={card.id}>
                <Card
                  className={styles.card}
                  style={{ backgroundColor: card.color }}
                >
                  <CardContent>
                    <h3 className={styles.secondCardTitle}>{card.title}</h3>
                    <p className={styles.secondCardContent}>{card.content}</p>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>

      {/* Third Website */}

      <div className={styles.thirdWebsiteContainer}>
        <div className={styles.thirdSectionOne}>
          <h3 className={styles.thirdTitleSecOne}>With our App...</h3>
          <p className={styles.textSec3}>
            With the Monetize mobile app we created the fastest reward network
            on the market which rewards users with an increasing payout for
            their consumption of personalized ads.
          </p>
        </div>

        <div className={styles.thirdSectionTwo}>
          <h3 className={styles.thirdTitleSecTwo}>We are trusted by</h3>
          <div className={styles.rootSecThree}>
            <Grid container spacing={5}>
              {cardsSecThree.map((card) => (
                <Grid item xs={12} sm={6} md={4} key={card.id}>
                  <Card
                    className={styles.cardSecThree}
                    style={{ backgroundColor: card.color }}
                  >
                    <CardContent>
                      <img
                        src={card.src}
                        width={card.width}
                        height={card.height}
                      />
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </div>
        </div>
      </div>

      {/* Fourth Website */}

      <div className={styles.fourthWebsiteContainer}>
        <div className={styles.containerToMatchDesign}>
          <div className={styles.fourthLeft}>
            <h5 className={styles.titleSec4}>The App</h5>
            <h3 className={styles.subTitleSec4}>Try it out</h3>
            <p className={styles.textSec4}>
              Here’s what we've been up to recentlyHere’s what we've been up to
              recently.Here’s what we've been up to recently.
            </p>
            <Grid container>
              <Grid xs={6}>
                <Button
                  text='TRY FOR FREE'
                  color='gold'
                  onClick={() => setShowBookingForm(true)}
                />
              </Grid>
              <Grid xs={6}>
                <Button onClick={() => setShowBookingForm(true)} />
              </Grid>
            </Grid>
            {showBookingForm && (
              <div className={styles.bookingFormPopup}>
                <div className={styles.bookingFormContent}>
                  <span
                    className={styles.closeButton}
                    onClick={toggleBookingForm}
                  >
                    &times;
                  </span>
                  <Booking />
                </div>
              </div>
            )}
          </div>
          <div className={styles.fourthRight}>
            <img
              src='/images/Group 1000004746.png'
              alt='A graph with an arrow to the top '
            />
          </div>
        </div>
      </div>

      {/* Fifth Website */}
      <div className={styles.fifthWebsiteContainer}>
        <div className={styles.fifthContainer}>
          <form ref={form} onSubmit={handleSubmit}>
            <div>
              <h1 className={styles.fifthLeftTitle1}>Get in touch</h1>
            </div>
            <div className={styles.bookingFields}>
              <Grid container>
                <Grid xs={6}>
                  <h1 className={styles.bookingFieldsTitle1}>Your Info</h1>
                  <div className={styles.bookingField}>
                    <input
                      className={styles.dataBox}
                      type='text'
                      placeholder='Name'
                      name='Name'
                      required
                    />
                  </div>
                  <div className={styles.bookingField}>
                    <input
                      className={styles.dataBox}
                      type='text'
                      placeholder='Email'
                      name='Email'
                      required
                    />
                  </div>

                  <div className={styles.bookingField}>
                    <input
                      className={styles.dataBox}
                      type='text'
                      placeholder='Phone Number'
                      name='Phone Number'
                      required
                    />
                  </div>
                </Grid>
                <Grid item xs={6} style={{ paddingLeft: 36 }}>
                  <h1 className={styles.bookingFieldsTitle2}>Your message</h1>
                  <div className={styles.bookingField}>
                    <textarea
                      className={styles.messageBox}
                      name='message'
                      placeholder='Message'
                      required
                    ></textarea>
                  </div>
                </Grid>
                <Grid xs={12}>
                  <Button text='SEND' type='submit' />
                </Grid>
              </Grid>
            </div>
          </form>
        </div>
      </div>

      {/* Fifth Website mobile responsiveness */}
      <div className={styles.mobileFirstWebsiteContainer}>
        <div className={styles.mobileFirstWebsiteContainerBg}>
          <div className={styles.firstMobileTopImg}>
            <img
              className={styles.firstMobileImg}
              src='./images/website_sec1.png'
              alt='A monitor and a laptop screen'
            />
          </div>
          <div className={styles.firstMobileBottomContent}>
            <div>
              <h1 className={styles.firstMobileTitle1}>Revolutionizing</h1>
              <h2 className={styles.firstMobileTitle2}>
                website
                <br />
                monetization.
              </h2>
            </div>
            <div>
              <p className={styles.firstMobileText}>
                Subscription-based business models have become the standard way
                to drive user-generated revenue.
              </p>
              <br />
              <p className={styles.firstMobileText}>
                However, implementing a paywall introduces a barrier between
                your product or service and the consumer – with only about 10%
                of users on average willing to pay for what’s behind your wall.
              </p>
            </div>
            <Link className={styles.firstMobileButton} to=''>
              <div
                className={styles.firstMobileButtonText}
                onClick={() => setShowBookingForm(true)}
              >
                BOOK A DEMO
              </div>
            </Link>
            {showBookingForm && (
              <div className={styles.bookingFormPopup}>
                <div className={styles.bookingFormContent}>
                  <span
                    className={styles.closeButton}
                    onClick={toggleBookingForm}
                  >
                    &times;
                  </span>
                  <Booking />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
