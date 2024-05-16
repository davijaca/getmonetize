import React, { useState } from 'react';
import styles from './Imprint.module.css';
import { Helmet } from 'react-helmet';
import { helmetJsonLdProp } from 'react-schemaorg';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga';
import Booking from '../Booking/Booking.jsx';

const Imprint = () => {
  // CONTACT FORM POPUP

  const [showBookingForm, setShowBookingForm] = useState(false);
  const location = useLocation();

  useEffect(() => {
    ReactGA.pageview(location.pathname + location.search);
  }, [location]);

  const toggleBookingForm = () => {
    setShowBookingForm(!showBookingForm);
  };

  {
    /* SEO SECTION - DO NOT TOUCH */
  }

  const articleStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Structured data for you',
    description: 'This is an article that demonstrates structured data.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/40/JSON-LD.svg',
    datePublished: new Date('2021-09-04T09:25:01.340Z').toISOString(),
    author: {
      '@type': 'Person',
      name: 'John Reilly',
      url: 'https://johnnyreilly.com/about',
    },
  };

  {
    /* END OF SEO SECTION */
  }

  return (
    <div className={styles.homeContainer}>
      {/* SEO SECTION - DO NOT TOUCH */}
      <Helmet>
        <meta charSet="utf-8" />
        <title>HOME PAGE</title>
        <link rel="canonical" href="https://www.smatched.io/" />
        <link rel="canonical" href="https://www.offerwallmonetization.com/" />
      </Helmet>

      <div style={{ display: 'none' }}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(articleStructuredData),
          }}
        />

        <h1>{articleStructuredData.headline}</h1>
        <h3>
          by{' '}
          <a href={articleStructuredData.author.url}>
            {articleStructuredData.author.name}
          </a>{' '}
          on {articleStructuredData.datePublished}
        </h3>

        <img
          style={{ width: '5em' }}
          alt="https://json-ld.org/ - Website content released under a Creative Commons CC0 Public Domain Dedication except where an alternate is specified., CC0, via Wikimedia Commons"
          src={articleStructuredData.image}
        />

        <p>{articleStructuredData.description}</p>

        <p>Take a look at the source of this page and find the JSON-LD!</p>
      </div>

      {/* END OF SEO SECTION */}

      {/* First Home */}

      <div className={styles.firstHomeContainer}>
        <div className={styles.topFirst}>
          <div className={styles.mainFirst}>
            <div className={styles.rightMain}>
              <h1 className={styles.text}>Imprint</h1>
              <h2 className={styles.text2}>Smatched</h2>
              <div className={styles.parag}>
                <div className={styles.innerParag}>
                  {' '}
                  A brand of Rissland Marketing UG (limited liability) <br />
                  Seat of the company: Kurfürsten Anlage 52, 69115 Heidelberg
                  <br />
                  Germany
                  <br />
                  <br />
                  Mannheim Local Court: HRB 728803
                  <br />
                  Managing Director: Alexander Rißland
                  <br />
                  Umsatzsteuer ID-Nr.: DE283249761523
                  <br />
                  Email: hello@smatched.de
                  <br />
                  Tel: +49 1525 780 5326
                  <br />
                </div>
              </div>
            </div>
            <div className={styles.leftMain}>
              <div className={styles.leftImgInfo}>
                <img
                  className={styles.leftImg}
                  src="/images/logo/smatchedlogo.png"
                  alt="The smatched logo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* First Home mobile responsiveness */}

      <div className={styles.mobileFirstHomeContainer}>
        <div className={styles.topFirst}>
          <div className={styles.mobileTopFirstBg}>
            <div className={styles.mainFirstMobile}>
              <div className={styles.leftMainMobile}>
                <div className={styles.leftImgInfoMobile}>
                  <img
                    className={styles.leftImgMobile}
                    src="/images/logo/smatchedlogo.png"
                    alt="The smatched logo"
                  />
                </div>
              </div>
              <div className={styles.rightMainMobile}>
                <h1 className={styles.textMobile}>Imprint</h1>
                <h2 className={styles.text2Mobile}>Smatched</h2>
                <div className={styles.paragMobile}>
                  <div className={styles.innerParagMobile}>
                    A brand of Rissland Marketing UG (limited liability) <br />
                    Seat of the company: Kurfürsten Anlage 52, 69115 Heidelberg
                    <br />
                    Germany
                    <br />
                    <br />
                    Mannheim Local Court: HRB 728803
                    <br />
                    Managing Director: Alexander Rißland
                    <br />
                    Umsatzsteuer ID-Nr.: DE283249761523
                    <br />
                    Email: hello@smatched.de
                    <br />
                    Tel: +49 1525 780 5326
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Imprint;
