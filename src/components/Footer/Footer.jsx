/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styles from './Footer.module.css';
import { useHandleSubscriptionNewsletter } from '../../common/useHandleSubscriptionNewsletter';
import Button from '../Button/Button';

// import { db } from '../../firebase';
// import { addDoc, collection, serverTimestamp } from 'firebase/firestore';

const Footer = ({ showFormFooter }) => {
  //Subscription logic extracted from footer component and saaved on a custom hook at the folder 'common'
  const { handleInputChange, inputValue, submit, message } =
    useHandleSubscriptionNewsletter();

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
              <img src="/images/logo/logo.svg" alt="" />
              <div className={styles.monetize}>
                <span className={styles.spanMonetize}>
                  Monetize – Unleash your data’s value{' '}
                </span>
              </div>
            </div>

            <div className={styles.social}>
              <img src="/images/socialMedia/facebook.svg" alt="" />
              <img src="/images/socialMedia/instagram.svg" alt="" />
              <img src="/images/socialMedia/linkedin.svg" alt="" />
              <img src="/images/socialMedia/tiktok.svg" alt="" />
              <img src="/images/socialMedia/youtube.svg" alt="" />
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
                <form onSubmit={submit} className={styles.form}>
                  <div className={styles.subscribeBox}>
                    <input
                      className={styles.inputE}
                      type="email"
                      onChange={handleInputChange}
                      placeholder="Enter your email.."
                      value={inputValue}
                    />
                  </div>
                  <div className={styles.submit}>
                    <Button text="SUBSCRIBE" type="sumit" />
                  </div>
                </form>
              )}
            </div>
          </div>
          {message && <div className={styles.alertMessage}> {message} </div>}
          <div className={styles.bottomRight}>
            <div className={styles.supportedBy}>
              <span className={styles.spanTitleBottom}>Supported by </span>
              <img src="/images/supportedLogos/srh.svg" alt="" />
              <img src="/images/supportedLogos/innowerft.svg" alt="" />
              <img src="/images/supportedLogos/startUp.svg" alt="" />
            </div>
            <div className={styles.company}>
              <a className={styles.spanTitleBottom}>Company </a>
              <a  className={styles.spanTextBottom}>
                Our mission{' '}
              </a>
            </div>
            <div className={styles.services}>
              <a className={styles.spanTitleBottom}>Services </a>
              <a className={styles.spanTextBottom}>Product </a>
              <a className={styles.spanTextBottom}>For influencer </a>
              <a className={styles.spanTextBottom}>For Business </a>
            </div>
            <div className={styles.legal}>
              <a className={styles.spanTitleBottom}>Legal </a>
              <a  className={styles.spanTextBottom}>
                Imprint{' '}
              </a>
              <a  className={styles.spanTextBottom}>
                Data Security{' '}
              </a>
              <a  className={styles.spanTextBottom}>
                ToC{' '}
              </a>
              {/* <a className={styles.spanTextBottom}>Cookies</a> */}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footerContainerMobile}>
        {showFormFooter && (
          <div className={styles.topMobile}>
            <span className={styles.spanJoinMobile}>Join Our Newsletter </span>

            <form onSubmit={submit} className={styles.formMobile}>
              <div className={styles.subscribeBoxMobile}>
                <input
                  className={styles.inputEMobile}
                  type="email"
                  onChange={handleInputChange}
                  placeholder="Enter your email.."
                  value={inputValue}
                />
              </div>
              <div className={styles.submitMobile}>
                <Button text="SUBSCRIBE" type="sumit" />
              </div>
            </form>
          </div>
        )}
        {message && <div className={styles.alertMessage}> {message} </div>}

        <div className={styles.bottomMobile}>
          <div className={styles.topBottomMobile}>
            <img src="/images/logo/logo.svg" alt="" />
            <div className={styles.monetizeMobile}>
              <span className={styles.spanMonetizeMobile}>
                Monetize – Unleash your data’s value{' '}
              </span>
            </div>
            <div className={styles.socialMobile}>
              <img src="images/socialMedia/facebook.svg" alt="" />
              <img src="images/socialMedia/instagram.svg" alt="" />
              <img src="images/socialMedia/linkedin.svg" alt="" />
              <img src="images/socialMedia/tiktok.svg" alt="" />
              <img src="images/socialMedia/youtube.svg" alt="" />
            </div>
          </div>
          <div className={styles.bottomDivMobile}>
            <div className={styles.supportedByMobile}>
              <span className={styles.spanTitleBottomMobile}>
                Supported by{' '}
              </span>
              <img src="/images/supportedLogos/srh.svg" alt="" />
              <img src="/images/supportedLogos/innowerft.svg" alt="" />
              <img src="/images/supportedLogos/startUp.svg" alt="" />
            </div>
            <div className={styles.companyMobile}>
              <a className={styles.spanTitleBottomMobile}>Company </a>
              <a  className={styles.spanTextBottomMobile}>
                Our mission{' '}
              </a>
            </div>
            <div className={styles.legalMobile}>
              <a className={styles.spanTitleBottomMobile}>Legal </a>
              <a  className={styles.spanTextBottomMobile}>
                Imprint{' '}
              </a>
              <a  className={styles.spanTextBottomMobile}>
                Data Security{' '}
              </a>
              <a  className={styles.spanTextBottomMobile}>
                ToC{' '}
              </a>

            </div>
            <div className={styles.servicesMobile}>
              <a className={styles.spanTitleBottomMobile}>Services </a>
              <a className={styles.spanTextBottomMobile}>Product </a>
              <a className={styles.spanTextBottomMobile}>For influencer </a>
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
