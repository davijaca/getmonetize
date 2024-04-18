import React, { useState } from "react";
import styles from './Website.module.css';
import { Link } from 'react-router-dom';
import Booking from "../../pages/Booking/Booking.jsx";

const Website = () => {
  const [showBookingForm, setShowBookingForm] = useState(false);
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
              <h1 className={styles.firstLeftTitle1}>Revolutionizing</h1>
              <h2 className={styles.firstLeftTitle2}>
                website
                <br />
                monetization.
              </h2>
            </div>
            <div>
              <p className={styles.firstLeftText}>
                Subscription-based business models have become the standard way
                to drive user-generated revenue.
              </p>
              <p className={styles.firstLeftText}>
                However, implementing a paywall introduces a barrier between
                your product or service and the consumer – with only about 10%
                of users on average willing to pay for what’s behind your wall.
              </p>
            </div>
            <Link className={styles.firstLeftButton} to="">
              <div
                className={styles.firstLeftButtonText}
                onClick={() => setShowBookingForm(true)}
              >
                BOOK A DEMO{" "}
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
          <div className={styles.firstRight}>
            <img
              src='./images/website_sec1.png'
              alt='A monitor and a laptop screen'
            />
          </div>
        </div>
      </div>

      {/* First Website mobile responsiveness */}

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

            <Link className={styles.firstMobileButton} to="">

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

      {/* Second Website */}

      <div className={styles.secondWebsiteContainer}>
        <div className={styles.secondWebsiteContainerBox1}>
          <h3 className={styles.secondLeft}>
            How to monetize Web Traffic more effectively with Smatched?
          </h3>
          <p className={styles.secondRight}>
            Our platform is the answer for users who have low willingness to pay
            upfront, providing them with an opportunity to earn their way to
            valuable content without the need for credit cards while you still
            make money from website traffic.
          </p>
        </div>

        <div className={styles.imageSec2Bow}>
          <img src='./images/website_sec2_bow.svg' alt='' />
        </div>

        <div className={styles.secondWebsiteContainerBox2}>
          <div className={styles.secondWebsiteContainerBox2Content}>
            <img
              className={styles.imageSec2}
              src='./images/website_sec2_icon1.svg'
              alt=''
            />
            <p className={styles.textImgSec2}>
              Smatched offers a solution that empowers users to access your
              premium content by completing surveys and sharing their opinions.
            </p>
          </div>
          <div className={styles.secondWebsiteContainerBox2Content}>
            <img
              className={styles.imageSec2}
              src='./images/website_sec2_icon2.svg'
              alt=''
            />
            <p className={styles.textImgSec2}>
              Users receive rewards, vouchers, tokens and exclusive access to
              your premium content, in return
            </p>
          </div>
        </div>
      </div>

      {/*Second Website mobile responsiveness*/}

      <div className={styles.mobileSecondWebsiteContainer}>
        <div className={styles.secondWebsiteContainerBox1Mobile}>
          <h3 className={styles.secondLeftMobile}>
            How to monetize Web Traffic more effectively with Smatched?
          </h3>
          <p className={styles.secondRightMobile}>
            Our platform is the answer for users who have low willingness to pay
            upfront, providing them with an opportunity to earn their way to
            valuable content without the need for credit cards while you still
            make money from website traffic.
          </p>
        </div>

        <div className={styles.secondWebsiteContainerBox2Mobile}>
          <p>
            Smatched offers a solution that empowers users to access your
            premium content by completing surveys and sharing their opinions.
          </p>
          <p>
            Users receive rewards, vouchers, tokens and exclusive access to your
            premium content, in return.
          </p>
        </div>
      </div>

      {/* Third Website */}

      <div className={styles.thirdWebsiteContainer}>
        <div className={styles.thirdLeft}>
          <div className={styles.thirdLeftBgTop}></div>
          <div className={styles.thirdLeftBgBottom}></div>
          <img src='./images/website_sec3.png' alt='A monitor' />
        </div>
        <div className={styles.thirdRight}>
          <h3 className={styles.titleSec3}>
            Why choose Smatched for Website Monetization?
          </h3>
          <p className={styles.textSec3}>
            We don’t interrupt your existing business model — we complement it.
            Smatched seamlessly integrates with your monetization strategy,
            offering an additional avenue for revenue generation.
            <br />
            <br />
            With our innovative approach, you can engage a broader audience,
            unlock new streams of revenue and enhance user satisfaction.
          </p>
        </div>
      </div>

      {/*Third Website mobile Responsiveness*/}

      <div className={styles.mobileThirdWebsiteContainer}>
        <div className={styles.thirdLeftMobile}>
          <div className={styles.thirdLeftBgTopMobile}></div>
          <div className={styles.thirdLeftBgBottomMobile}></div>
          <img src='./images/website_sec3.png' alt='A monitor' />
        </div>
        <div className={styles.thirdRightMobile}>
          <h3 className={styles.titleSec3Mobile}>
            Why choose Smatched for Website Monetization?
          </h3>
          <p className={styles.textSec3Mobile}>
            We don’t interrupt your existing business model — we complement it.
            Smatched seamlessly integrates with your monetization strategy,
            offering an additional avenue for revenue generation.
            <br />
            <br />
            With our innovative approach, you can engage a broader audience,
            unlock new streams of revenue and enhance user satisfaction.
          </p>
        </div>
      </div>

      {/* Fourth Website */}

      <div className={styles.fourthWebsiteContainer}>
        <div className={styles.containerToMatchDesign}>
          <div className={styles.fourthLeft}>
            <h3 className={styles.titleSec4}>
              Discover the best offerwall Website Solution
            </h3>
            <p className={styles.textSec4}>
              We build custom web-apps for our clients that build directly into
              their website architecture and integrate seamlessly into their
              current monetization approach.
              <br />
              <br />
              You can seamlessly incorporate a way for your users to earn their
              way past your paywalls by answering surveys or testing apps on our
              customized offerwall.
            </p>

            <Link className={styles.buttonSec4} to="">

              <div

                className={styles.buttonSec4Text}

                onClick={() => setShowBookingForm(true)}

              >

                BOOK A DEMO{" "}

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
          <div className={styles.fourthRight}>
            <img
              src='./images/website_sec4.png'
              alt='A graph with an arrow to the top '
            />
          </div>
        </div>
      </div>

      {/*Fourth Website mobile Responsiveness*/}

      <div className={styles.mobileFourthWebsiteContainer}>
        <div className={styles.fourthRightMobile}>
          <img
            src='./images/website_sec4.png'
            alt='A graph with an arrow to the top '
          />
        </div>
        <div className={styles.fourthLeftMobile}>
          <h1 className={styles.titleSec4Mobile}>
            Discover the best offerwall Website Solution
          </h1>
          <p className={styles.textSec4Mobile}>
            We build custom web-apps for our clients that build directly into
            their website architecture and integrate seamlessly into their
            current monetization approach.
            <br />
            <br />
            You can seamlessly incorporate a way for your users to earn their
            way past your paywalls by answering surveys or testing apps on our
            customized offerwall.
          </p>

          <Link className={styles.buttonSec4Mobile} to="">

            <div

              className={styles.buttonSec4MobileText}

              onClick={() => setShowBookingForm(true)}

            >

              BOOK A DEMO{" "}

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
  );
};

export default Website;
