import Button from '../../components/Button/Button';
import styles from './HowItWorks.module.css';
import React, { useState } from 'react';

const HowItWorks = () => {
  const [isActive1, setIsActive1] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);
  const [isActive4, setIsActive4] = useState(false);
  const [isActive5, setIsActive5] = useState(false);
  const [isActive6, setIsActive6] = useState(false);

  const handleToggle1 = () => {
    setIsActive1(!isActive1);
  };

  const handleToggle2 = () => {
    setIsActive2(!isActive2);
  };

  const handleToggle3 = () => {
    setIsActive3(!isActive3);
  };

  const handleToggle4 = () => {
    setIsActive4(!isActive4);
  };

  const handleToggle5 = () => {
    setIsActive5(!isActive5);
  };

  const handleToggle6 = () => {
    setIsActive6(!isActive6);
  };
  return (
    <div className={styles.howitworksContainer}>
      {/* First HowItWorks */}

      <div className={styles.firstHowContainer}>
        <div className={styles.topFirst1}>
          <div className={styles.mainFirst1}>
            <div className={styles.rightMain1}>
              <h1 className={styles.text1}>
                A Unique Way
                <br />
              </h1>
              <h2 className={styles.text21}>
                to Increase <br /> Business Revenue
              </h2>
              <div className={styles.parag1}>
                <div className={styles.innerParag1}>
                  {' '}
                  Smatched revolutionizes the way businesses monetize and retain
                  users. We empower businesses to generate revenue from a
                  previously untapped user base - those users with low
                  willingness to pay, which is approximately 90% of all traffic.
                  Below you’ll find our approach to increasing both monetization
                  and retention within your existing user base.
                </div>
              </div>
              <Button />
            </div>
          </div>
        </div>
      </div>

      {/* First HowItWorks mobile responsiveness */}

      <div className={styles.mobileFirstHowContainer}>
        <div className={styles.topFirst1}>
          <div>
            <div className={styles.mobileTopFirstBg1}>
              <div className={styles.mainFirstMobile1}>
                <div className={styles.leftMainMobile1}>
                  <div className={styles.leftImgInfoMobile1}>
                    <img
                      className={styles.leftImgMobile1}
                      src="/images/howitworksPage/rafiki.svg"
                      alt="A person presenting a growing graphic"
                    />
                  </div>
                </div>
                <div className={styles.rightMainMobile1}>
                  <h1 className={styles.textMobile1}>
                    <b>A Unique Way </b>
                  </h1>
                  <h2 className={styles.text2Mobile1}>
                    to Increase <br /> Business Revenue
                  </h2>
                  <div className={styles.paragMobile1}>
                    <div className={styles.innerParagMobile1}>
                      {' '}
                      Smatched revolutionizes the way businesses monetize and
                      retain users. We empower businesses to generate revenue
                      from a previously untapped user base - those users with
                      low willingness to pay, which is approximately 90% of all
                      traffic. Below you’ll find our approach to increasing both
                      monetization and retention within your existing user base.
                    </div>
                  </div>

                  <Button color="gold" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Second HowItWorks */}

      <div className={styles.secondHowContainer}>
        <div className={styles.secondHowContainerBox1}>
          <h3 className={styles.secondLeft}>How it works?</h3>
        </div>

        <div className={styles.secondHowContainerBox2}>
          <div className={styles.secondHowContainerBox2Content}>
            <img
              className={styles.imageSec2}
              src="/images/howitworksPage/number_red_1.svg"
              alt="1"
            />
            <p className={styles.textImgSec2}>
              We customise an offerwall to integrate with your current mobile or
              web-app that integrates seamlessly with your existing paywall and
              user journey.
            </p>
          </div>
          <div className={styles.secondHowContainerBox2Content}>
            <img
              className={styles.imageSec2}
              src="/images/howitworksPage/number_yellow_2.svg"
              alt="2"
            />
            <p className={styles.textImgSec2}>
              We work with you to optimize your conversion rates and improve the
              user experience – the customisation options are endless.
            </p>
          </div>
          <div className={styles.secondHowContainerBox2Content}>
            <img
              className={styles.imageSec2}
              src="/images/howitworksPage/number_blue_3.svg"
              alt="3"
            />
            <p className={styles.textImgSec2}>
              At the point where users decline to pay - or take actions you have
              identified are likely to cause them to churn - they are given the
              option to ‘earn to play’ with Smatched.
            </p>
          </div>
          <div className={styles.secondHowContainerBox2Content}>
            <img
              className={styles.imageSec2}
              src="/images/howitworksPage/number_white_4.svg"
              alt="4"
            />
            <p className={styles.textImgSec2}>
              The user then completes the action on the offer wall which earns
              you money and allows the user to get access to their desired
              features in your mobile or web app.
            </p>
          </div>
        </div>
      </div>

      {/*Second HowItWorks mobile responsiveness*/}

      <div className={styles.mobileSecondHowContainer}>
        <div className={styles.secondHowContainerBox1Mobile}>
          <h3 className={styles.secondLeftMobile}>How it works?</h3>
        </div>

        <div className={styles.secondHowContainerBox2Mobile}>
          <div className={styles.secondHowContainerBox2ContentMobile}>
            <img
              className={styles.imageSec2Mobile}
              src="/images/howitworksPage/number_red_1.svg"
              alt="1"
            />
            <p className={styles.textImgSec2Mobile}>
              We customise an offerwall to integrate with your current mobile or
              web-app that integrates seamlessly with your existing paywall and
              user journey.
            </p>
          </div>

          <div className={styles.secondHowContainerBox2ContentMobile}>
            <img
              className={styles.imageSec2Mobile}
              src="/images/howitworksPage/number_yellow_2.svg"
              alt="2"
            />
            <p className={styles.textImgSec2Mobile}>
              We work with you to optimize your conversion rates and improve the
              user experience – the customisation options are endless.
            </p>
          </div>
          <div className={styles.secondHowContainerBox2ContentMobile}>
            <img
              className={styles.imageSec2Mobile}
              src="/images/howitworksPage/number_blue_3.svg"
              alt="3"
            />
            <p className={styles.textImgSec2Mobile}>
              At the point where users decline to pay - or take actions you have
              identified are likely to cause them to churn - they are given the
              option to ‘earn to play’ with Smatched.
            </p>
          </div>
          <div className={styles.secondHowContainerBox2ContentMobile}>
            <img
              className={styles.imageSec2Mobile}
              src="/images/howitworksPage/number_white_4.svg"
              alt="4"
            />
            <p className={styles.textImgSec2Mobile}>
              The user then completes the action on the offer wall which earns
              you money and allows the user to get access to their desired
              features in your mobile or web app.
            </p>
          </div>
        </div>
      </div>

      {/* Third HowItWorks */}
      <div className={styles.thirdHowContainer3}>
        <div className={styles.thirdHowContainerBox13}>
          <h3 className={styles.thirdLeft3}>Our Presentation </h3>
        </div>
        <div className={styles.thirdHowContainerBox23}>
          <p className={styles.thirdRight3}>Short Video</p>
        </div>

        <div className={styles.imageSec2Bow3}>
          <img src="/images/howitworksPage/shortvideo.svg" alt="Short Video" />
        </div>

        <Button color="gold" />
      </div>

      {/* {/*Third HowItWorks mobile Responsiveness*/}

      <div className={styles.thirdHowContainer3mobile}>
        <div className={styles.thirdHowContainerBox13mobile}>
          <h3 className={styles.thirdLeft3}>Our Presentation </h3>
        </div>
        <div className={styles.thirdHowContainerBox23mobile}>
          <p className={styles.thirdRight3mobile}>Short Video</p>
        </div>

        <div className={styles.imageSec2Bow3mobile}>
          <img src="/images/howitworksPage/shortvideo.svg" alt="Short video" />
        </div>

        <Button />
      </div>

      {/* Fourth HowItWorks */}
      <div className={styles.fourthHowContainer}>
        <div className={styles.fourthTitleContainer}>
          <h1 className={styles.textFourth}> Problems we solve: </h1>
        </div>
        <div className={styles.fourthHowContainerBox}>
          <div className={styles.fourthSectionLeft}>
            <div className={styles.innerFourthSectionLeft}>
              <div className={styles.innerFourthFreeResources}>
                Businesses looking to monetize more of their existing user base:
              </div>
              <div className={styles.innerFourthText}>
                <ul className={styles.spanText}>
                  <li>
                    77% of all players convert to in-app purchases within 14
                    days of using the app or don't convert at all. It is
                    therefore a great opportunity to integrate an offer wall at
                    a point when your users are unlikely to ever pay to play.
                  </li>
                  <li>
                    38% of total ad revenue comes from offerwalls for games that
                    use this feature alongside another monetization strategy. 
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className={styles.fourthSectionRight}>
            <img
              src="/images/howitworksPage/rectangle_7.svg"
              alt="Group of people using notebooks"
            />
          </div>
        </div>
      </div>

      {/* Fourth HowItWorks mobile responsiveness */}

      <div className={styles.fourthHowContainer3mobile}>
        <div className={styles.fourthHowContainerBox13mobile4}>
          <h3 className={styles.fourthLeft34mobile}>Problems we solve: </h3>
        </div>

        <div className={styles.imageSec2Bow3mobile4}>
          <img
            src="/images/howitworksPage/rectangle_7.svg"
            alt="Group of people using notebooks"
          />
        </div>

        <div className={styles.fourthSectionLeftmobile}>
          <div className={styles.innerFourthSectionLeftmobile}>
            <div className={styles.innerFourthTitlemobile}>
              Businesses looking to <br /> monetize more of their <br />{' '}
              existing user base:
            </div>
            <div className={styles.innerFourthTextmobile}>
              <ul className={styles.spanTextmobile}>
                Smatched presents a game-changing solution that empowers
                publishers in the online media space to tap into an entirely new
                audience, by integrating Smatched into their business model,
                newspaper publishers can revolutionize their revenue streams and
                drive growth.
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* fifth HowItWorks */}

      <div className={styles.fifthHowContainer}>
        <div className={styles.fifthHowContainerBox}>
          <h3 className={styles.fifthLeft}>Improved User Experience: </h3>
        </div>
        <div className={styles.fifthHowContainerBox}>
          <p className={styles.fifthRight}>
            A study by App Annie found that games that use a combination of
            monetization models have a 50% higher retention rate than games that
            use only one monetization model. Providing your users with more
            choice improves the user experience.
          </p>
        </div>
      </div>
      {/* {/*fifth HowItWorks mobile Responsiveness*/}

      <div className={styles.fifthHowContainer3mobile}>
        <div className={styles.fifthHowContainerBox13mobile}>
          <h3 className={styles.fifthLeft3mobile}>Improved User Experience:</h3>
        </div>
        <div className={styles.fifthHowContainerBox23mobile}>
          <p className={styles.fifthRight3mobile}>
            A study by App Annie found that games that use a combination of
            monetization models have a 50% higher retention rate than games that
            use only one monetization model. Providing your users with more
            choice improves the user experience.{' '}
          </p>
        </div>
      </div>
      {/* sixth HowItWorks */}

      <div className={styles.sixthHowContainer}>
        <div className={styles.sixthHowContainerBox}>
          <div className={styles.sixthSectionLeft}>
            <div className={styles.innerSixthSectionLeft}>
              <div className={styles.innerSixthTitle}>
                Businesses looking to retain long-term Mobile & Web app users
              </div>
              <div className={styles.innerSixthText}>
                <ul className={styles.spanText6}>
                  There is a clear retention advantage for players that
                  converted on offerwalls. Their likelihood of continuing to
                  play goes up by as much as 5x when looking across day 7 (D7)
                  to day 120 (D120). This is most notable at later stages, like
                  at day 90 (D90) where retention for offerwall converters is
                  14%, while other players are below 3%. 92% of game users say
                  they are more likely to keep playing a game if they have
                  multiple ways to earn in-game currency.
                </ul>
              </div>
            </div>
          </div>

          <div className={styles.SixthSectionRight6}>
            <img
              src="/images/howitworksPage/rectangle_8.svg"
              alt="Finger scrolling a phone"
            />
          </div>
        </div>
      </div>

      {/* sixth HowItWorks mobile responsiveness */}

      <div className={styles.sixthHowContainer3mobile}>
        <div className={styles.imageSec2Bow3mobile46}>
          <img
            src="/images/howitworksPage/rectangle_8.svg"
            alt="Finger scrolliing a phone"
          />
        </div>

        <div className={styles.sixthSectionLeftmobile}>
          <div className={styles.innerSixthSectionLeftmobile}>
            <div className={styles.innerSixthTitlemobile}>
              Businesses looking to <br /> monetize more of their <br />{' '}
              existing user base:
            </div>
            <div className={styles.innerSixthTextmobile}>
              <ul className={styles.spanTextmobile6}>
                Smatched presents a game-changing solution that empowers
                publishers in the online media space to tap into an entirely new
                audience, by integrating Smatched into their business model,
                newspaper publishers can revolutionize their revenue streams and
                drive growth.
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* seventh HowItWorks */}
      <div className={styles.seventhHowContainer}>
        <div className={styles.seventhHowBackground}>
          <div className={styles.seventhHowLeft}>
            <img
              src="/images/howitworksPage/rectangle_9.svg"
              alt="A phone screen"
            />
          </div>
          <div className={styles.seventhHowRight}>
            <div className={styles.innerSeventhHowRight}>
              <div className={styles.seventhHowRightModel}>
                In-app purchases cap revenue potential:
              </div>
              <div className={styles.increase}>
                <div className={styles.smatchIncreaseOnline}>
                  <div>
                    Smatched is proven to increase the percentage of your user
                    base that is currently monetized by 3x.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* seventh HowItWorks mobile */}

      <div className={styles.seventhHowContainer3mobile}>
        <div className={styles.imageSec2Bow3mobile}>
          <img
            src="/images/howitworksPage/rectangle_9.svg"
            alt="A phone screen"
          />
        </div>

        <div className={styles.seventhSectionLeftmobile}>
          <div className={styles.innerSeventhSectionLeftmobile}>
            <div className={styles.innerSeventhTitlemobile}>
              In-app purchases cap revenue potential:
            </div>
            <div className={styles.innerSeventhTextmobile}>
              <ul className={styles.spanTextmobile67}>
                Smatched is proven to increase the percentage of your user base
                that is currently monetized by 3x.
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* eighth section  */}
      <div className={styles.eighthHowContainer}>
        <div className={styles.eighthHowBackground}>
          <div className={styles.innerEighthHowContainer1}>
            <div className={styles.innerEighthRight}>
              <div className={styles.innerEighthMainBox2}>
                <h3 className={styles.secondLeft358}>
                  Frequently asked questions
                </h3>

                {/* Row 1 */}
                <div
                  className={`${styles.tableRow} ${
                    isActive1 ? styles.active : ''
                  }`}
                  onClick={() => setIsActive1(!isActive1)}
                >
                  <div className={styles.rowContent}>What Is Smatched?</div>
                  <div className={styles.arrowButton}>
                    <button className={styles.arrowButton}>&#9662;</button>
                  </div>
                </div>
                {isActive1 && (
                  <div className={styles.additionalContent}>
                    Smatched, as a Germany-based company, provides a unique and
                    customizable approach to user monetization through its
                    independent, modular platform that hosts diverse offerings
                    while ensuring stringent EU regulatory compliance, superior
                    data hosting, and advanced incentivization techniques,
                    thereby delivering a more engaging, reliable, and beneficial
                    solution than many alternatives.
                  </div>
                )}

                {/* Row 2 */}
                <div
                  className={`${styles.tableRow} ${
                    isActive2 ? styles.active : ''
                  }`}
                  onClick={() => setIsActive2(!isActive2)}
                >
                  <div className={styles.rowContent}>
                    What Makes Smatched different?
                  </div>
                  <div className={styles.arrowButton}>
                    <button className={styles.arrowButton}>&#9662;</button>
                  </div>
                </div>
                {isActive2 && (
                  <div className={styles.additionalContent}>
                    Smatched has customised web apps for Gameforge and
                    Pockethost. Our differentiator is that we customise maps for
                    specifically to fit the needs of the customer-base of our
                    partner. With Gameforge, this meant helping to monetize
                    customers who have a lower willingness to pay. We provided
                    an earn-to-play model, helped them to increase the
                    monetization of their user base by 3x and added a
                    considerable MRR without eating into their existing revenue
                    generation efforts.
                  </div>
                )}

                {/* Row 3 */}
                <div
                  className={`${styles.tableRow} ${
                    isActive3 ? styles.active : ''
                  }`}
                  onClick={() => setIsActive3(!isActive3)}
                >
                  <div className={styles.rowContent}>
                    How Much Does Smatched Cost?
                  </div>
                  <div className={styles.arrowButton}>
                    <button className={styles.arrowButton}>&#9662;</button>
                  </div>
                </div>
                {isActive3 && (
                  <div className={styles.additionalContent}>
                    We offer a revenue-sharing model (70-30), we take no money
                    upfront. You can trial Smatched on your mobile or web app to
                    see how effective it is for converting & retaining your
                    audience. This provides our partners with the information
                    they need to see the value we add value to their business
                    and to understand that we don't eat into your existing
                    revenue.
                  </div>
                )}

                {/* Row 4 */}
                <div
                  className={`${styles.tableRow} ${
                    isActive4 ? styles.active : ''
                  }`}
                  onClick={() => setIsActive4(!isActive4)}
                >
                  <div className={styles.rowContent}>
                    Is There A Quality of Work Guarantee?
                  </div>
                  <div className={styles.arrowButton}>
                    <button className={styles.arrowButton}>&#9662;</button>
                  </div>
                </div>
                {isActive4 && (
                  <div className={styles.additionalContent}>
                    Smatched commits to 24/7 customer service for your users &
                    to continuously optimizing the app to improve the user
                    experience and your ability to increase monetization. This
                    is what makes Smatched such a quality partner.
                  </div>
                )}

                {/* Row 5 */}
                <div
                  className={`${styles.tableRow} ${
                    isActive5 ? styles.active : ''
                  }`}
                  onClick={() => setIsActive5(!isActive5)}
                >
                  <div className={styles.rowContent}>
                    Who Are Our Ideal Customers?
                  </div>
                  <div className={styles.arrowButton}>
                    <button className={styles.arrowButton}>&#9662;</button>
                  </div>
                </div>
                {isActive5 && (
                  <div className={styles.additionalContent}>
                    An ideal customer for Smatched would be any company that has
                    a user-base that you need monetized. Typically, this is best
                    achieved with companies that monetize through
                    microtransactions of a few dollars but we also work with
                    companies to understand their users and apply innovative,
                    user-friendly strategies to generate additional revenue
                    through ads, market research, and app testing while also
                    enhancing user engagement and retention by offering
                    redeemable in-game rewards etc.
                  </div>
                )}

                {/* Row 6 */}
                <div
                  className={`${styles.tableRow} ${
                    isActive6 ? styles.active : ''
                  }`}
                  onClick={() => setIsActive6(!isActive6)}
                >
                  <div className={styles.rowContent}>
                    What advantages Does Smatched Provide to European Companies?
                  </div>
                  <div className={styles.arrowButton}>
                    <button className={styles.arrowButton}>&#9662;</button>
                  </div>
                </div>
                {isActive6 && (
                  <div className={styles.additionalContent}>
                    <ul className={styles.additionalContent}>
                      <li>
                        Data Privacy Regulations: As a German-based company,
                        Smatched would be fully compliant with the European
                        Union's General Data Protection Regulation (GDPR), which
                        provides stringent guidelines on data privacy. This
                        would mitigate legal risks for EU companies concerned
                        about data protection;
                      </li>
                      <li>
                        Localized Customer Support: A German-based company like
                        Smatched is likely to have multilingual support
                        including major European languages, offering a better
                        customer service experience for EU clients;
                      </li>
                      <li>
                        Ease of Business: Doing business within the EU tends to
                        be more straightforward due to common laws and business
                        practices, removing the need for understanding and
                        complying with foreign business laws;
                      </li>
                      <li>
                        Same Time Zone: Being in the same or nearby time zone
                        greatly facilitates communication and responsiveness;
                      </li>
                      <li>
                        Economic Area: As Germany is part of the European Single
                        Market, it simplifies business transactions, reducing
                        bureaucratic and tax obstacles related to international
                        trade;
                      </li>
                      <li>
                        Data Hosting: Having all data hosting in Germany not
                        only complies with EU data regulations but may also
                        provide quicker server response times for EU-based
                        companies and their users;
                      </li>
                      <li>
                        Trust and Reputation: Germany has a strong reputation
                        for its engineering and technology products, which could
                        foster trust and confidence in Smatched's services;
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className={styles.bottomBG}></div>
        </div>
      </div>

      {/* eighth mobile section  */}
      <div className={styles.eighthHowContainerMobile}>
        <div className={styles.eighthHowBackgroundMobile}>
          <div className={styles.innerEighthHowContainer1Mobile}>
            <div className={styles.innerEighthRightMobile}>
              <div className={styles.innerEighthMainBox2Mobile}>
                <h3 className={styles.secondLeft358Mobile}>
                  Frequently asked questions
                </h3>

                {/* Row 1 */}
                <div
                  className={`${styles.tableRowMobile} ${
                    isActive1 ? styles.activeMobile : ''
                  }`}
                  onClick={() => setIsActive1(!isActive1)}
                >
                  <div className={styles.rowContentMobile}>
                    What Is Smatched?
                  </div>
                  <div className={styles.arrowButtonMobile}>
                    <button className={styles.arrowButtonMobile}>
                      &#9662;
                    </button>
                  </div>
                </div>
                {isActive1 && (
                  <div className={styles.additionalContentMobile}>
                    Smatched, as a Germany-based company, provides a unique and
                    customizable approach to user monetization through its
                    independent, modular platform that hosts diverse offerings
                    while ensuring stringent EU regulatory compliance, superior
                    data hosting, and advanced incentivization techniques,
                    thereby delivering a more engaging, reliable, and beneficial
                    solution than many alternatives.
                  </div>
                )}

                {/* Row 2 */}
                <div
                  className={`${styles.tableRowMobile} ${
                    isActive2 ? styles.activeMobile : ''
                  }`}
                  onClick={() => setIsActive2(!isActive2)}
                >
                  <div className={styles.rowContentMobile}>
                    What Makes Smatched different?
                  </div>
                  <div className={styles.arrowButtonMobile}>
                    <button className={styles.arrowButtonMobile}>
                      &#9662;
                    </button>
                  </div>
                </div>
                {isActive2 && (
                  <div className={styles.additionalContentMobile}>
                    Smatched has customised web apps for Gameforge and
                    Pockethost. Our differentiator is that we customise maps for
                    specifically to fit the needs of the customer-base of our
                    partner. With Gameforge, this meant helping to monetize
                    customers who have a lower willingness to pay. We provided
                    an earn-to-play model, helped them to increase the
                    monetization of their user base by 3x and added a
                    considerable MRR without eating into their existing revenue
                    generation efforts.
                  </div>
                )}

                {/* Row 3 */}
                <div
                  className={`${styles.tableRowMobile} ${
                    isActive3 ? styles.activeMobile : ''
                  }`}
                  onClick={() => setIsActive3(!isActive3)}
                >
                  <div className={styles.rowContentMobile}>
                    How Much Does Smatched Cost?
                  </div>
                  <div className={styles.arrowButtonMobile}>
                    <button className={styles.arrowButtonMobile}>
                      &#9662;
                    </button>
                  </div>
                </div>
                {isActive3 && (
                  <div className={styles.additionalContentMobile}>
                    We offer a revenue-sharing model (70-30), we take no money
                    upfront. You can trial Smatched on your mobile or web app to
                    see how effective it is for converting & retaining your
                    audience. This provides our partners with the information
                    they need to see the value we add value to their business
                    and to understand that we don't eat into your existing
                    revenue.
                  </div>
                )}

                {/* Row 4 */}
                <div
                  className={`${styles.tableRowMobile} ${
                    isActive4 ? styles.activeMobile : ''
                  }`}
                  onClick={() => setIsActive4(!isActive4)}
                >
                  <div className={styles.rowContentMobile}>
                    Is There A Quality of Work Guarantee?
                  </div>
                  <div className={styles.arrowButtonMobile}>
                    <button className={styles.arrowButtonMobile}>
                      &#9662;
                    </button>
                  </div>
                </div>
                {isActive4 && (
                  <div className={styles.additionalContentMobile}>
                    Smatched commits to 24/7 customer service for your users &
                    to continuously optimizing the app to improve the user
                    experience and your ability to increase monetization. This
                    is what makes Smatched such a quality partner.
                  </div>
                )}

                {/* Row 5 */}
                <div
                  className={`${styles.tableRowMobile} ${
                    isActive5 ? styles.active : ''
                  }`}
                  onClick={() => setIsActive5(!isActive5)}
                >
                  <div className={styles.rowContentMobile}>
                    Who Are Our Ideal Customers?
                  </div>
                  <div className={styles.arrowButtonMobile}>
                    <button className={styles.arrowButtonMobile}>
                      &#9662;
                    </button>
                  </div>
                </div>
                {isActive5 && (
                  <div className={styles.additionalContentMobile}>
                    An ideal customer for Smatched would be any company that has
                    a user-base that you need monetized. Typically, this is best
                    achieved with companies that monetize through
                    microtransactions of a few dollars but we also work with
                    companies to understand their users and apply innovative,
                    user-friendly strategies to generate additional revenue
                    through ads, market research, and app testing while also
                    enhancing user engagement and retention by offering
                    redeemable in-game rewards etc.
                  </div>
                )}

                {/* Row 6 */}
                <div
                  className={`${styles.tableRowMobile} ${
                    isActive6 ? styles.activeMobile : ''
                  }`}
                  onClick={() => setIsActive6(!isActive6)}
                >
                  <div className={styles.rowContentMobile}>
                    What advantages Does Smatched <br /> Provide to European
                    Companies?
                  </div>
                  <div className={styles.arrowButtonMobile}>
                    <button className={styles.arrowButtonMobile}>
                      &#9662;
                    </button>
                  </div>
                </div>
                {isActive6 && (
                  <div className={styles.additionalContentMobile}>
                    <ul className={styles.additionalContentMobile}>
                      <li>
                        Data Privacy Regulations: As a German-based company,
                        Smatched would be fully compliant with the European
                        Union's General Data Protection Regulation (GDPR), which
                        provides stringent guidelines on data privacy. This
                        would mitigate legal risks for EU companies concerned
                        about data protection;
                      </li>
                      <li>
                        Localized Customer Support: A German-based company like
                        Smatched is likely to have multilingual support
                        including major European languages, offering a better
                        customer service experience for EU clients;
                      </li>
                      <li>
                        Ease of Business: Doing business within the EU tends to
                        be more straightforward due to common laws and business
                        practices, removing the need for understanding and
                        complying with foreign business laws;
                      </li>
                      <li>
                        Same Time Zone: Being in the same or nearby time zone
                        greatly facilitates communication and responsiveness;
                      </li>
                      <li>
                        Economic Area: As Germany is part of the European Single
                        Market, it simplifies business transactions, reducing
                        bureaucratic and tax obstacles related to international
                        trade;
                      </li>
                      <li>
                        Data Hosting: Having all data hosting in Germany not
                        only complies with EU data regulations but may also
                        provide quicker server response times for EU-based
                        companies and their users;
                      </li>
                      <li>
                        Trust and Reputation: Germany has a strong reputation
                        for its engineering and technology products, which could
                        foster trust and confidence in Smatched's services;
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className={styles.bottomBGMobile}></div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
