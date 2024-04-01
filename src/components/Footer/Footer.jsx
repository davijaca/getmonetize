import React, { useState } from 'react';
import styles from './Footer.module.css';
import { db } from '../../firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';

const Footer = () => {
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
              <span className={styles.spanTitleBottom}>Company </span>
              <span className={styles.spanTextBottom}>Our mission </span>
            </div>
            <div className={styles.services}>
              <span className={styles.spanTitleBottom}>Services </span>
              <span className={styles.spanTextBottom}>Product </span>
              <span className={styles.spanTextBottom}>For influencer </span>
              <span className={styles.spanTextBottom}>For Business </span>
            </div>
            <div className={styles.legal}>
              <span className={styles.spanTitleBottom}>Legal </span>
              <span className={styles.spanTextBottom}>Imprint </span>
              <span className={styles.spanTextBottom}>Data Security </span>
              <span className={styles.spanTextBottom}>ToC </span>
              <span className={styles.spanTextBottom}>Cookies</span>
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
              <span className={styles.spanTitleBottomMobile}>Company </span>
              <span className={styles.spanTextBottomMobile}>Our mission </span>
            </div>
            <div className={styles.legalMobile}>
              <span className={styles.spanTitleBottomMobile}>Legal </span>
              <span className={styles.spanTextBottomMobile}>Imprint </span>
              <span className={styles.spanTextBottomMobile}>
                Data Security{' '}
              </span>
              <span className={styles.spanTextBottomMobile}>ToC </span>
              <span className={styles.spanTextBottomMobile}>Cookies</span>
            </div>
            <div className={styles.servicesMobile}>
              <span className={styles.spanTitleBottomMobile}>Services </span>
              <span className={styles.spanTextBottomMobile}>Product </span>
              <span className={styles.spanTextBottomMobile}>
                For influencer{' '}
              </span>
              <span className={styles.spanTextBottomMobile}>For Business </span>
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
