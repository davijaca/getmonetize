import React, { useState } from 'react';
import styles from './NonProfit.module.css';
import Booking from '../../pages/Booking/Booking.jsx';
import Button from '../../components/Button/Button.jsx';

const NonProfit = () => {
  const [showBookingForm, setShowBookingForm] = useState(false);
  const toggleBookingForm = () => {
    setShowBookingForm(!showBookingForm);
  };

  return (
    <div className={styles.nonprofitContainer}>
      {/* FIRST NONPROFIT CONTAINER */}

      <div className={styles.firstNonprofitContainer}>
        <div className={styles.topFirst}>
          <div className={styles.mainFirst}>
            <div className={styles.rightMain}>
              <h1 className={styles.text}>
                Creative Revenue
                <br />
                Streams
                <span className={styles.text2}> for</span>
              </h1>
              <h2 className={styles.text2}>Nonprofits</h2>
              <div className={styles.parag}>
                <div className={styles.innerParag}>
                  {' '}
                  The nonprofit industry is faced with the challenge of
                  converting potential supporters into paying donors. By
                  exploring creative revenue streams, you can differentiate your
                  organization and motivate people to donate in impactful ways.
                  Diversifying your donation options can significantly increase
                  engagement and donor acquisition rates.
                </div>
              </div>
              <Button onClick={toggleBookingForm} />
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
            <div className={styles.leftMain}>
              <div className={styles.leftImgInfo}>
                <img
                  className={styles.leftImg}
                  src="/images/nonprofitPage/nonprofitHero.svg"
                  alt="to represent a revenue"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE FIRST NONPROFIT CONTAINER */}

      <div className={styles.mobileFirstNonprofitContainer}>
        <div className={styles.mobileTopFirst}>
          <div className={styles.mobileMainFirst}>
            <div className={styles.mobileTopMain}>
              <div className={styles.mobileImgInfo}>
                <img
                  className={styles.mobileImg}
                  src="./images/nonprofitPage/nonprofitHero_mobile.png"
                  alt="Three people donating"
                />
              </div>
            </div>
            <div className={styles.mobileBottomMain}>
              <h1 className={styles.text}>
                Creative <br />
                Revenue Streams
              </h1>
              <h2 className={styles.text2}> for Nonprofits</h2>
              <div className={styles.parag}>
                <div className={styles.innerParag}>
                  {' '}
                  The nonprofit industry is faced with the challenge of
                  converting potential supporters into paying donors. By
                  exploring creative revenue streams, you can differentiate your
                  organization and motivate people to donate in impactful ways.
                  <br />
                  <br />
                  Diversifying your donation options can significantly increase
                  engagement and donor acquisition rates.
                </div>
              </div>
              <Button onClick={toggleBookingForm} />
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

      {/* SECOND NONPROFIT CONTAINER */}

      <div className={styles.secondNonprofitContainer}>
        <div className={styles.secondNonprofitTopContainer}>
          <div className={styles.secondNonprofitContainerBox1}>
            <div className={styles.whatOffer}>
              <div className={styles.secondLeft}>
                Motivating people to donate. Strategies that make a difference.
              </div>
            </div>

            <div className={styles.secondRight}>
              We have found that implementing alternative monetary donor
              acquisition strategies increases donor conversion by 3x.
            </div>
          </div>
        </div>

        <div className={styles.secondNonprofitBottomContainer}>
          <div className={styles.secondNonprofitContainerBox2}>
            <div className={styles.secondBottomLeft}>
              <img
                className={styles.bottomEmote}
                src="/images/nonprofitPage/emoteSad.svg"
                alt="Emoji negative smile"
              />
              <div className={styles.secondBottomTextContainer}>
                <span className={styles.spanBottom}>
                  One of the reasons why potential <br />
                  donors may not give monetarily is that they{' '}
                  <b>may not have the financial means</b> to give.
                </span>
              </div>
            </div>
            <img
              className={styles.arrow}
              src="/images/nonprofitPage/nonprofit_sec2_arrow.svg"
              alt="A arrow pointing to the right"
            />
            <div className={styles.secondBottomRight}>
              <img
                className={styles.bottomEmote}
                src="/images/nonprofitPage/emoteHappy.svg"
                alt="Emoji positive smile"
              />
              <div className={styles.secondBottomTextContainer}>
                <span className={styles.spanBottom}>
                  Supporters may be willing to{' '}
                  <b>
                    donate <br />
                    their time, skills or knowledge{' '}
                  </b>
                  instead of or in addition to a monetary donation.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*MOBILE SECOND NONPROFIT CONTAINER*/}

      <div className={styles.mobileSecondNonprofitContainer}>
        <div className={styles.mobileSecondNonprofitTopContainer}>
          <div className={styles.mobileSecondNonprofitContainerBox1}>
            <div className={styles.whatOffer}>
              <div className={styles.secondLeft}>
                Motivating people to donate. Strategies that make a difference.
              </div>
            </div>

            <div className={styles.secondRight}>
              We have found that implementing alternative monetary donor
              acquisition strategies increases donor conversion by 3x.
            </div>
          </div>
        </div>

        <div className={styles.mobileSecondNonprofitBottomContainer}>
          <div className={styles.mobileSecondNonprofitContainerBox2}>
            <div className={styles.mobileSecondBottomLeft}>
              <img
                className={styles.bottomEmote}
                src="/images/nonprofitPage/emoteSad.svg"
                alt="Emoji negative smile"
              />
              <div className={styles.mobileSecondBottomTextContainer}>
                <p className={styles.spanBottom}>
                  One of the reasons why potential donors may not give
                  monetarily is that they{' '}
                  <span>may not have the financial means</span> to give.
                </p>
              </div>
            </div>
            <div className={styles.mobileSecondBottomMiddle}>
              <img className={styles.arrowEmote} src="./elipse.svg" alt="" />
            </div>
            <div className={styles.mobileSecondBottomRight}>
              <img
                className={styles.bottomEmote}
                src="/images/nonprofitPage/emoteHappy.svg"
                alt="Emoji positive smile"
              />
              <div className={styles.mobileSecondBottomTextContainer}>
                <p className={styles.spanBottom}>
                  Supporters may be willing to{' '}
                  <span>donate their time, skills or knowledge </span>instead of
                  or in addition to a monetary donation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* THIRD NONPROFIT CONTAINER */}

      <div className={styles.thirdNonprofitContainer}>
        <div className={styles.thirdSectionLeft}>
          <div className={styles.imageThirdNonprofitContainer}>
            <img
              src="/images/nonprofitPage/thirdNonprofitImg.png"
              alt="A post with arrows to different directions"
            />
          </div>
        </div>

        <div className={styles.thirdSectionRight}>
          <div className={styles.innerThirdSectionRight}>
            <div className={styles.thirdSectionRightH1}>
              Donor Retention
              <br />
              Strategies
            </div>

            <div className={styles.thirdSectionRightP}>
              Effective donor retention strategies are based on providing more
              choices to your supporters. To foster lasting relationships with
              your supporters, give them the option to earn your organization
              donations by carrying out surveys via your weekly or monthly
              newsletter – rather than just encouraging them to give with their
              own money.
            </div>
          </div>
        </div>
      </div>

      {/*MOBILE THIRD NONPROFIT CONTAINER*/}

      <div className={styles.mobileThirdNonprofitContainer}>
        <div className={styles.thirdNonprofitContainerBox}>
          <div className={styles.thirdSectionLeft}>
            <div className={styles.imageThirdNonprofitContainer}>
              <img
                src="/images/nonprofitPage/mobileThirdNonprofitImg.svg"
                alt="A post with arrows to different directions"
              />
            </div>
          </div>

          <div className={styles.thirdSectionRight}>
            <>
              <div className={styles.innerThirdSectionRight}>
                <div className={styles.thirdSectionRightH1}>
                  Donor Retention Strategies
                </div>

                <div className={styles.thirdSectionRightP}>
                  Effective donor retention strategies are based on providing
                  more choices to your supporters. To foster lasting
                  relationships with your supporters, give them the option to
                  earn your organization donations by carrying out surveys via
                  your weekly or monthly newsletter – rather than just
                  encouraging them to give with their own money.
                </div>
              </div>
            </>
          </div>
        </div>
      </div>

      {/* FOURTH NONPROFIT CONTAINER */}

      <div className={styles.fourthNonprofitContainer}>
        <div className={styles.fourthNonprofitContainerBox}>
          <div className={styles.fourthSectionLeft}>
            <div className={styles.innerFourthSectionLeft}>
              <div className={styles.innerFourthFreeResources}>
                Unlocking free resources for Nonprofits
              </div>
              <div className={styles.innerFourthText}>
                <p>
                  Smatched provides free resources for nonprofits looking to
                  increase monetization for their organization and a
                  comprehensive offer wall web-app solution customized for each
                  nonprofit with a simple technical integration that is
                  absolutely free.
                  <br />
                  <br />
                  Unlock with Smatched a completely new donor audience – the{' '}
                  <span>77% of supporters</span> who don’t donate monetarily.
                  Just by offering alternative ways to contribute, nonprofits
                  can engage more supporters and increase the impact of their
                  mission.
                </p>
              </div>
              <Button onClick={toggleBookingForm} />
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

          <div className={styles.fourthSectionRight}>
            <img
              src="/images/nonprofitPage/fourthNonprofitImg.png"
              alt="Women using a smartphone"
            />
          </div>
        </div>
      </div>

      {/*MOBILE FOURTH NONPROFIT CONTAINER*/}

      <div className={styles.mobileFourthNonprofitContainer}>
        <div className={styles.mobileFourthNonprofitContainerBox}>
          <div className={styles.mobileFourthSectionLeft}>
            <div className={styles.imageMobileFourthNonprofitContainer}>
              <div className={styles.mobileFourthNonprofitImage}>
                <img
                  src="/images/nonprofitPage/fourthNonprofitImgMobile.png"
                  alt="Women using a smartphone"
                />
              </div>
            </div>
          </div>

          <div className={styles.mobileFourthSectionRight}>
            <div className={styles.mobileFourthSectionRightH1}>
              Unlocking free resources for Nonprofits
            </div>

            <div className={styles.bottomFourthMobile}>
              <p>
                Smatched provides free resources for nonprofits looking to
                increase monetization for their organization and a comprehensive
                offer wall web-app solution customized for each nonprofit with a
                simple technical integration that is absolutely free.
                <br />
                <br />
                Unlock with Smatched a completely new donor audience – the
                <span>77% of supporters</span> who don’t donate monetarily. Just
                by offering alternative ways to contribute, nonprofits can
                engage more supporters and increase the impact of their mission.
              </p>
            </div>
            <Button onClick={toggleBookingForm} />
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

export default NonProfit;
