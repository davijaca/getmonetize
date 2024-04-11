import React, { useState } from 'react';
import styles from './Footer.module.css';
import { db } from '../../firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';

const Footer = ({ showFormFooter }) => {
  const [input, setInput] = useState('');
  const [message, setMessage] = useState('');

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (input) {
      //add to firebase
      await addDoc(collection(db, 'emails'), {
        email: input,
        time: serverTimestamp()
      });
      setInput('');
      setMessage('Thank you for signing up to our news');
      setTimeout(() => {
        setMessage('');
      }, 3000);
    }
  };

  return (
    <>
      <div className={styles.footerContainer}>
        <div className={styles.footerLeft}>
          {showFormFooter && (
            <div className={styles.topLeft}>
              <span className={styles.spanJoin}>Join Our Newsletter </span>
            </div>
          )}
          <div className={styles.bottomLeft}>
            <div className={styles.logo}>
              <img src='./logo.svg' alt='' />
              <div className={styles.monetize}>
                <span className={styles.spanMonetize}>
                  Monetize – Unleash your data’s value{' '}
                </span>
              </div>
            </div>

            <div className={styles.social}>
              <img src='./facebook.svg' alt='' />
              <img src='./instagram.svg' alt='' />
              <img src='./linkedin.svg' alt='' />
              <img src='./tiktok.svg' alt='' />
              <img src='./youtube.svg' alt='' />
            </div>
            <div className={styles.copyright}>
              <span className={styles.spanCopy}>
                Copyright 2023 Smatched. All Rights Reserved.{' '}
              </span>
            </div>
          </div>
        </div>
        <div className={styles.footerRight}>
          <div className={styles.topRight}>
            <div className={styles.subscribe}>
              {showFormFooter && (
                <form onSubmit={submitHandler} className={styles.form}>
                  <div className={styles.subscribeBox}>
                    <input
                      className={styles.inputE}
                      type='email'
                      onChange={inputHandler}
                      placeholder='Enter your email..'
                      value={input}
                    />
                  </div>
                  <div className={styles.submit}>
                    <button type='submit' className={styles.submitButton}>
                      subscribe
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
          {message && <div className={styles.alertMessage}> {message} </div>}
          <div className={styles.bottomRight}>
            <div className={styles.supportedBy}>
              <span className={styles.spanTitleBottom}>Supported by </span>
              <img src='./srh.svg' alt='' />
              <img src='./innowerft.svg' alt='' />
              <img src='./startUp.svg' alt='' />
            </div>
            <div className={styles.company}>
              <a className={styles.spanTitleBottom}>Company </a>
              <a href='/aboutus' className={styles.spanTextBottom}>Our mission </a>
            </div>
            <div className={styles.services}>
              <a className={styles.spanTitleBottom}>Services </a>
              <a className={styles.spanTextBottom}>Product </a>
              <a className={styles.spanTextBottom}>For influencer </a>
              <a className={styles.spanTextBottom}>For Business </a>
            </div>
            <div className={styles.legal}>
              <a className={styles.spanTitleBottom}>Legal </a>
              <a href='/imprint' className={styles.spanTextBottom}>Imprint </a>
              <a href='/dataprivacy' className={styles.spanTextBottom}>Data Security </a>
              <a href='/toc' className={styles.spanTextBottom}>ToC </a>
              {/* <a className={styles.spanTextBottom}>Cookies</a> */}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footerContainerMobile}>
        {showFormFooter && (
          <div className={styles.topMobile}>
            <span className={styles.spanJoinMobile}>Join Our Newsletter </span>

            <form onSubmit={submitHandler} className={styles.formMobile}>
              <div className={styles.subscribeBoxMobile}>
                <input
                  className={styles.inputEMobile}
                  type='email'
                  onChange={inputHandler}
                  placeholder='Enter your email..'
                  value={input}
                />
              </div>
              <div className={styles.submitMobile}>
                <button type='submit' className={styles.submitButtonMobile}>
                  subscribe
                </button>
              </div>
            </form>
          </div>
        )}
        {message && <div className={styles.alertMessage}> {message} </div>}

        <div className={styles.bottomMobile}>
          <div className={styles.topBottomMobile}>
            <img src='./logo.svg' alt='' />
            <div className={styles.monetizeMobile}>
              <span className={styles.spanMonetizeMobile}>
                Monetize – Unleash your data’s value{' '}
              </span>
            </div>
            <div className={styles.socialMobile}>
              <img src='./facebook.svg' alt='' />
              <img src='./instagram.svg' alt='' />
              <img src='./linkedin.svg' alt='' />
              <img src='./tiktok.svg' alt='' />
              <img src='./youtube.svg' alt='' />
            </div>
          </div>
          <div className={styles.bottomDivMobile}>
            <div className={styles.supportedByMobile}>
              <span className={styles.spanTitleBottomMobile}>
                Supported by{' '}
              </span>
              <img src='./srh.svg' alt='' />
              <img src='./innowerft.svg' alt='' />
              <img src='./startUp.svg' alt='' />
            </div>
            <div className={styles.companyMobile}>
              <a className={styles.spanTitleBottomMobile}>Company </a>
              <a href='/aboutus' className={styles.spanTextBottomMobile}>Our mission </a>
            </div>
            <div className={styles.legalMobile}>
              <a className={styles.spanTitleBottomMobile}>Legal </a>
              <a href='/imprint' className={styles.spanTextBottomMobile}>Imprint </a>
              <a href='/dataprivacy' className={styles.spanTextBottomMobile}>
                Data Security{' '}
              </a>
              <a href='/toc' className={styles.spanTextBottomMobile}>ToC </a>
              {/* <a href='/imprint' className={styles.spanTextBottomMobile}>Cookies</a> */}
            </div>
            <div className={styles.servicesMobile}>
              <a className={styles.spanTitleBottomMobile}>Services </a>
              <a className={styles.spanTextBottomMobile}>Product </a>
              <a className={styles.spanTextBottomMobile}>
                For influencer{' '}
              </a>
              <a className={styles.spanTextBottomMobile}>For Business </a>
            </div>
          </div>
          <div className={styles.footerDivider}>
            {' '}
            <br />
          </div>
          <div className={styles.copyrightMobile}>
            <span className={styles.spanCopyMobile}>
              Copyright 2023 Smatched. All Rights Reserved.{' '}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
