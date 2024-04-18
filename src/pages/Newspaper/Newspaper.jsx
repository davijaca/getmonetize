import React, { useState } from 'react';
import styles from './Newspaper.module.css';
import Booking from '../../pages/Booking/Booking.jsx';

const Newspaper = () => {
  const [showBookingForm, setShowBookingForm] = useState(false);
  const toggleBookingForm = () => {
    setShowBookingForm(!showBookingForm);
  };
  return (
    <div className={styles.newspaperContainer}>
      {/* First News */}

      <div className={styles.firstNewsContainer}>
        <div className={styles.topFirst}>
          <div className={styles.mainFirst}>
            <div className={styles.rightMain}>
              <h1 className={styles.text}>
                Newspaper
                <br />
              </h1>
              <h2 className={styles.text2}>
                Publishing <br /> Industry
              </h2>
              <div className={styles.parag}>
                <div className={styles.innerParag}>
                  {' '}
                  Nowadays the newspaper publishing industry faces numerous
                  challenges that threaten its sustainability. The availability
                  of free online news options, the fragmentation of news types
                  and channels, and the emergence of syndicated news businesses
                  like Medium and Substack all contribute to these pressing
                  issues.
                  <br />
                  <br />
                  What you can do to overcome these challenges and increase
                  revenue?
                </div>
              </div>
              <div className={styles.buttonText}>
                <div
                  className={styles.buttonText1}
                  onClick={() => setShowBookingForm(true)}
                >
                  BOOK A DEMO
                </div>
              </div>
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
              <img
                className={styles.leftImg}
                src='./iPadMini.png'
                alt='An iPad with our work'
              />
            </div>
          </div>
        </div>
      </div>

      {/* First News mobile responsiveness */}

      <div className={styles.mobileFirstNewsContainer}>
        <div className={styles.topFirst}>
          <div className={styles.mobileTopFirstBg}>
            <div className={styles.mainFirstMobile}>
              <div className={styles.leftMainMobile}>
                <div className={styles.leftImgInfoMobile}>
                  <img
                    className={styles.leftImgMobile}
                    src='./iPadMini.png'
                    alt='An iPhone with an offerwall'
                  />
                </div>
              </div>
              <div className={styles.rightMainMobile}>
                <h1 className={styles.textMobile}>Newspaper</h1>
                <h2 className={styles.text2Mobile}>
                  Publishing <br />
                  Industry
                </h2>
                <div className={styles.paragMobile}>
                  <div className={styles.innerParagMobile}>
                    {' '}
                    Nowadays the newspaper publishing industry faces numerous
                    challenges that threaten its sustainability. The
                    availability of free online news options, the fragmentation
                    of news types and channels, and the emergence of syndicated
                    news businesses like Medium and Substack all contribute to
                    these pressing issues.
                    <br />
                    <br />
                    What you can do to overcome these challenges and increase
                    revenue?
                  </div>
                </div>
                <div className={styles.buttonTextMobile}>
                  <div
                    className={styles.buttonText1Mobile}
                    onClick={() => setShowBookingForm(true)}
                  >
                    BOOK A DEMO
                  </div>
                </div>
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
      </div>

      {/* Second News */}

      <div className={styles.secondNewsContainer}>
        <div className={styles.SubSecondNewsContainer}>
          <div className={styles.secondNewsBox1}>
            <div>Smatched can help you</div>
          </div>

          <div className={styles.secondNewsBox2}>
            <div className={styles.secondBox2Container}>
              <div className={styles.second13}>
                <div className={styles.second13One}>
                  <div className={styles.innerOne}>
                    <img
                      className={styles.stepOneImg}
                      src='./people.svg'
                      alt=' of a number one'
                    />
                    <h1>
                      Empowering publishers: <br />
                      unlocking new audiences
                    </h1>
                    <div className={styles.second13Integration}>
                      Smatched presents a game-changing solution that empowers
                      publishers in the online media space to tap into an
                      entirely new audience. By integrating Smatched into their
                      business model, newspaper publishers can revolutionize
                      their revenue streams and drive growth.
                    </div>
                  </div>
                </div>
                <div className={styles.second13Two}>
                  <div className={styles.innerThree}>
                    <img
                      className={styles.stepThreeImg}
                      src='./lock_open_right.svg'
                      alt=' of a number three'
                    />
                    <h1>
                      Unlock the power of offerwalls: <br />
                      monetize and engage
                    </h1>
                    <div className={styles.second13Integration}>
                      Offerwalls are a proven strategy for monetizing online
                      content. By leveraging Smatched’s offerwall solution,
                      publishers can increase their revenue and attract new
                      readers. This approach allows publishers to monetize their
                      content in a way that is more accessible and appealing to
                      readers, fostering increased engagement and loyalty.
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.second24}>
                <div className={styles.second24One}>
                  <div className={styles.innerTwo}>
                    <img
                      className={styles.stepTwoImg}
                      src='./hand.svg'
                      alt='A of a number two'
                    />
                    <h1>
                      Expanding revenue streams: <br />
                      give readers more choice
                    </h1>
                    <div className={styles.second13Integration}>
                      Only around 10% of readers are willing to pay for online
                      news subscriptions. This untapped market represents a
                      significant opportunity for the industry, to capture this
                      potential revenue, publishers must provide readers with
                      alternatives to traditional subscription models. Smatched
                      offers a compelling solution.
                    </div>
                  </div>
                </div>
                <div className={styles.second24Two}>
                  <div className={styles.innerFour}>
                    <img
                      className={styles.stepFourImg}
                      src='./grapharrow.svg'
                      alt='A of a number four'
                    />
                    <h1>
                      Boosting subscription rates <br />
                      3x higher
                    </h1>
                    <div className={styles.second13Integration}>
                      Smatched is a platform designed to increase subscription
                      rates in the online news industry. By incorporating an
                      offerwall into their subscription model, publishers can
                      offer readers the opportunity to earn their subscription
                      by completing offers or surveys. This not only provides an
                      alternative to paying for a subscription but also fosters
                      a sense of engagement and ownership among readers.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*Second News mobile responsiveness*/}

      <div className={styles.mobileSecondNewsContainer}>
        <div className={styles.subMobileSecondNewsContainer}>
          <div className={styles.mobileSecondNewsBox1}>
            <div>Smatched can help you</div>
          </div>

          <div className={styles.mobileSecondNewsBox2}>
            <div className={styles.mobileSecondBox2Container}>
              <div className={styles.mobileSecond1234}>
                <div className={styles.mobileSecondOne}>
                  <div className={styles.mobileSecondInner12}>
                    <img
                      className={styles.mobileSecondStepOneImg}
                      src='./people.svg'
                      alt=' of a number one'
                    />
                    <h1>
                      Empowering publishers: <br />
                      unlocking new audiences
                    </h1>
                    <div className={styles.mobileSecond12Integration}>
                      Smatched presents a game-changing solution that empowers
                      publishers in the online media space to tap into an
                      entirely new audience. By integrating Smatched into their
                      business model, newspaper publishers can revolutionize
                      their revenue streams and drive growth.
                    </div>
                  </div>
                </div>

                <div className={styles.mobileSecondTwo}>
                  <div className={styles.mobileSecondInner12}>
                    <img
                      className={styles.mobileSecondStepTwoImg}
                      src='./hand.svg'
                      alt='A of a number two'
                    />
                    <h1>
                      Expanding revenue streams: <br />
                      give readers more choice
                    </h1>
                    <div className={styles.mobileSecond12Integration}>
                      Only around 10% of readers are willing to pay for online
                      news subscriptions. This untapped market represents a
                      significant opportunity for the industry, to capture this
                      potential revenue, publishers must provide readers with
                      alternatives to traditional subscription models. Smatched
                      offers a compelling solution.
                    </div>
                  </div>
                </div>

                <div className={styles.mobileSecondThree}>
                  <div className={styles.mobileSecondInner34}>
                    <img
                      className={styles.mobileSecondStepThreeImg}
                      src='./lock_open_right.svg'
                      alt=' of a number three'
                    />
                    <h1>
                      Unlock the power of offerwalls: <br />
                      monetize and engage
                    </h1>
                    <div className={styles.mobileSecond12Integration}>
                      Offerwalls are a proven strategy for monetizing online
                      content. By leveraging Smatched’s offerwall solution,
                      publishers can increase their revenue and attract new
                      readers. This approach allows publishers to monetize their
                      content in a way that is more accessible and appealing to
                      readers, fostering increased engagement and loyalty.
                    </div>
                  </div>
                </div>

                <div className={styles.mobileSecondFour}>
                  <div className={styles.mobileSecondInner34}>
                    <img
                      className={styles.mobileSecondStepFourImg}
                      src='./grapharrow.svg'
                      alt='A of a number four'
                    />
                    <h1>
                      Boosting subscription rates <br />
                      3x higher
                    </h1>
                    <div className={styles.mobileSecond12Integration}>
                      Smatched is a platform designed to increase subscription
                      rates in the online news industry. By incorporating an
                      offerwall into their subscription model, publishers can
                      offer readers the opportunity to earn their subscription
                      by completing offers or surveys. This not only provides an
                      alternative to paying for a subscription but also fosters
                      a sense of engagement and ownership among readers.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Third News */}
      <div className={styles.thirdNewsContainer}>
        <div className={styles.thirdNewsContainerBox}>
          <div className={styles.thirdSectionLeft}>
            <img src='./Groupthird.png' alt='man-using smart phone' />
          </div>

          <div className={styles.thirdSectionRight}>
            <div className={styles.innerThirdSectionRight}>
              <div className={styles.innerThirdAddWalls}>
                Seamless <br /> integration <br />
                with Smatched <br /> Web-App
              </div>
              <div className={styles.parag1}>
                <div className={styles.innerParag1}>
                  {' '}
                  Smatched offers a seamless and user-friendly experience for
                  both publishers and readers. Integrating Smatched into website
                  is effortless for publishers and readers can quickly complete
                  offers or surveys to earn their subscription fee.
                  <br />
                  <br />
                  The platform ensures that offers and surveys are relevant and
                  tailored to each reader’s interests, maximizing completion
                  rates and engagement.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* {/*Third News mobile Responsiveness*/}

      <div className={styles.mobileThirdNewsContainer}>
        <div className={styles.topThird}>
          <div>
            <div className={styles.mobileTopThirdBg}>
              <div className={styles.mainThirdMobile}>
                <div className={styles.leftMainMobile3}>
                  <div className={styles.leftImgInfoMobile3}>
                    <img
                      className={styles.leftImgMobile3}
                      src='./Groupthird.png'
                      alt='An iPhone with an offerwall'
                    />
                  </div>
                </div>
                <div className={styles.rightMainMobile3}>
                  <h1 className={styles.textMobile3}>
                    Smatched provides an alternative Subscription Model
                  </h1>

                  <div className={styles.paragMobile3}>
                    <div className={styles.innerParagMobile3}>
                      {' '}
                      Paywalls are a great revenue option for many businesses
                      but unfortunately, making users pay means your revenue
                      potential is capped. Businesses that offer more than one
                      monetization model retain 50% more users.
                      <br />
                      <br />
                      What if your users could earn their way past a paywall
                      without having to open their wallet?
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fourth News */}

      <div className={styles.fourthNewsContainer}>
        <div className={styles.fourthNewsContainerBox}>
          <div className={styles.fourthSectionRight}>
            <div className={styles.imageFourthNewsContainer}>
              <div className={styles.fourthNewsImage}>
                <img src='./Groupfourth.png' alt='An iPad with our work' />
              </div>
            </div>
          </div>

          <div className={styles.fourthSectionLeft}>
            <>
              <div className={styles.innerFourthSectionLeft}>
                <div className={styles.fourthSectionLeftH1}>
                  Embrace change, <br /> ensure sustainability
                </div>
              </div>

              <div className={styles.fourthSectionLeftH2}>
                <div className={styles.fourthSectionLeftList}>
                  The newspaper publishing industry must provide readers with
                  more choices to drive revenue growth and sustainability. By
                  incorporating an offerwall into their subscription model using
                  Smatched, publishers can unlock new revenue streams, enhance
                  user experiences, and gain valuable data-driven insights.
                  <br />
                  <br />
                  Embracing this strategy enables online news publishers to
                  monetize their content effectively, boost engagement and
                  loyalty, and secure their position in the digital age.
                </div>
              </div>

              <div className={styles.buttonTextGold}>
                <div
                  className={styles.buttonText1Gold}
                  onClick={() => setShowBookingForm(true)}
                >
                  BOOK A DEMO
                </div>
              </div>
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
            </>
          </div>
        </div>
      </div>

      {/* Fourth News mobile responsiveness */}

      <div className={styles.mobileFourthNewsContainer}>
        <div className={styles.mobileFourthSectionLeft}>
          <div className={styles.leftMobileFourthNewsContainer}>
            <div className={styles.mobileFourthNewsImage}>
              <div className={styles.fourthImageResponsive}>
                <img src='./Groupfourth.png' alt='An iPad with our work' />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.mobileFourthSectionLeft}>
          <>
            <div className={styles.innerMobileFourthSectionLeft}>
              <div className={styles.mobileFourthSectionLeftH1}>
                Embrace change, ensure <br />
                sustainability
              </div>
            </div>

            <div className={styles.mobileFourthSectionLeftH2}>
              <div className={styles.mobileFourthSectionLeftList}>
                The newspaper publishing industry must provide readers with more
                choices to drive revenue growth and sustainability. By
                incorporating an offerwall into their subscription model using
                Smatched, publishers can unlock new revenue streams, enhance
                user experiences, and gain valuable data-driven insights.
                <br />
                <br />
                Embracing this strategy enables online news publishers to
                monetize their content effectively, boost engagement and
                loyalty, and secure their position in the digital age.
              </div>
            </div>

            <div className={styles.mobileButtonTextGold}>
              <div
                className={styles.mobileButtonText1Gold}
                onClick={() => setShowBookingForm(true)}
              >
                BOOK A DEMO
              </div>
            </div>
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
          </>
        </div>
      </div>
    </div>
  );
};

export default Newspaper;
