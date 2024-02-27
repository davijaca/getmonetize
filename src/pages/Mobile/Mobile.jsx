import React from 'react';
import styles from './Mobile.module.css';
import { Link } from 'react-router-dom';

const Mobile = () => {
  return (
    <div className={styles.pageMobileContainer}>
      {/* First section */}
      <div className={styles.firstSection}>
        <div className={styles.firstSectionImage}>
          <img
            srcset='./images/mobile_sec1_mobile.png 260w, ./images/mobile_sec1_web.png 600w'
            sizes='(max-width: 1130px) 260px,
         600px'
            src='./images/mobile_sec1_web.png'
            alt='Two smartphones'
          />
        </div>
        <div className={styles.firstSectionContent}>
          <h1 className={styles.titleAllSections}>
            <span>Mobile app</span>
            <br />
            monetization.
          </h1>
          <p className={styles.paragraphAllSections}>
            Only around 10% of users remain active 1 week after installation,
            offering users more choice is crucial for generating revenue.
          </p>
          <p className={styles.paragraphAllSections}>
            One popular approach is leveraging mobile offerwalls, which provide
            present users with a variety of offers, surveys or app testing
            opportunities in exchange for access to premium content, vouchers or
            rewards.
          </p>
          <Link className={styles.button} to=''>
            <div className={styles.buttonText}>BOOK A DEMO</div>
          </Link>
        </div>
      </div>

      {/* Second section */}
      <div className={styles.secondSection}>
        <div className={styles.secondSectionImage}>
          <img
            src='./images/mobile_sec2_mobile.png'
            alt='A box shaped as a smartphone with coins inside'
          />
        </div>
        <div className={styles.secondSectionContent}>
          <h2 className={styles.titleAllSections}>
            How to monetize your Mobile App?
          </h2>
          <p className={styles.paragraphAllSections}>
            You can increase consumers willingness to pay for your app by
            offering value-added services or content that align with user needs.
          </p>
          <p className={styles.paragraphAllSections}>
            <span>
              How you can enhance user satisfaction while generating revenue for
              your app?
            </span>
          </p>
          <p className={styles.paragraphAllSections}>
            Integrate Smatched — is a platform that utilizes the decoy effect to
            influence users perception of value. By incentivizing users to
            complete surveys or participate in app testing, Smatched enables
            them to gain access to premium content, vouchers or rewards. It
            enhances user satisfaction while generating revenue for your app.
          </p>
        </div>
      </div>

      {/* Third section */}
      <div className={styles.thirdSection}>
        <div className={styles.thirdSectionImage}>
          <img
            src='./images/mobile_sec3_mobile.png'
            alt='Hands handle a smartphones'
          />
        </div>
        <div className={styles.thirdSectionContent}>
          <h2 className={styles.titleAllSections}>
            Unleash the potential of mobile game monetization models
          </h2>
          <p className={styles.paragraphAllSections}>
            Smatched presents a game-changing solution that empowers publishers
            in the online media space to tap into an entirely new audience, by
            integrating Smatched into their business model, newspaper publishers
            can revolutionize their revenue streams and drive growth.
          </p>
        </div>
      </div>

      {/* Fourth section */}
      <div className={styles.fourthSection}>
        <div className={styles.fourthSectionContent}>
          <h2 className={styles.titleAllSections}>
            Monetize your app with a proven Revenue Generation Method
          </h2>
          <p className={styles.paragraphAllSections}>
            By optimizing your website and app for mobile devices, specifically
            iOS and Android, you enhance user acquisition and retention.
            Effectively monetizing your mobile app requires a combination of
            strategies, such as:
          </p>
          <ul>
            <li>
              <img src='./images/mobile_sec4_icon.svg' alt='A bullet point' />
              Leveraging mobile offerwalls
            </li>
            <li>
              <img src='./images/mobile_sec4_icon.svg' alt='A bullet point' />
              Optimizing for both Android and iOS
            </li>
            <li>
              <img src='./images/mobile_sec4_icon.svg' alt='A bullet point' />
              Understanding game monetization models
            </li>
            <li>
              <img src='./images/mobile_sec4_icon.svg' alt='A bullet point' />
              Providing valuable content or services
            </li>
          </ul>
          <Link className={styles.button} to=''>
            <div className={styles.buttonText}>BOOK A DEMO</div>
          </Link>
        </div>
        <div className={styles.fourthSectionImageMobile}>
          <img src='./images/mobile_sec4_phone2_mobile.png' alt='Smartphones' />
          <div className={styles.bottomBand}>
            <img
              src='./images/mobile_sec4_phone1_mobile.png'
              alt='Smartphone'
            />
          </div>
        </div>

        {/* <div className={styles.fourthSectionImageDesktop}>
          <img src='./images/mobile_sec4_phone_group_desktop.png' alt='Smartphones' />
          <div className={styles.bottomBand}>
            <img src='./images/mobile_sec4_phone2_desktop.png' alt='Smartphone' />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Mobile;