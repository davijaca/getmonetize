import React, { useState } from "react";
import styles from "./Home.module.css";
import { Helmet } from "react-helmet";
import { helmetJsonLdProp } from "react-schemaorg";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga';
import Booking from '../../pages/Booking/Booking.jsx';

const Home = () => {

    // CONTACT FORM POPUP

    const [showBookingForm, setShowBookingForm] = useState(false);
    const location = useLocation();

    useEffect(() => {
        ReactGA.pageview(location.pathname + location.search);
    }, [location]);

    const toggleBookingForm = () => {
        setShowBookingForm(!showBookingForm);
    };


    {/* SEO SECTION - DO NOT TOUCH */}

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

    {/* END OF SEO SECTION */}

    return (

        <div className={styles.homeContainer}>


            {/* SEO SECTION - DO NOT TOUCH */}
            <Helmet>
                <meta charSet="utf-8" />
                <title>HOME PAGE</title>
                <link rel="canonical" href="https://www.smatched.io/" />
                <link rel="canonical" href="https://www.offerwallmonetization.com/" />

            </Helmet>

            
            <div style={{display: 'none'}}>
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
                            <h1 className={styles.text}>
                                Boost
                                <br />
                                Monetization.
                            </h1>
                            <h2 className={styles.text2}>
                                Retain Users.
                            </h2>
                            <div className={styles.parag}>
                                <div className={styles.innerParag}> Metered paywalls have an average
                                    {' '}
                                    Metered paywalls have an average conversion rate of just
                                    0.36%. Smatched builds customized ‘earn to play’ offerwalls
                                    that <span>boost monetization</span> on your mobile app or
                                    website and helps you <span>retain users</span> by offering
                                    more choice.
                                </div>
                            </div>
                            <div className={styles.buttonText}>
                                <div className={styles.buttonText1} onClick={toggleBookingForm}>BOOK A DEMO</div>
                            </div>
                            {showBookingForm && (
                                <div className={styles.bookingFormPopup}>
                                    <div className={styles.bookingFormContent}>
                                        <span className={styles.closeButton} onClick={toggleBookingForm}>&times;</span>
                                        <Booking />
                                    </div>
                                </div>
                            )}
                            <div className={styles.bottomHero}>
                                <h1 className={styles.bottomHero1}>+50%</h1>
                                <h2>Sales increase <br /> hrough existing users</h2>
                                <h1 className={styles.bottomHero2}>1000+</h1>
                                <h2>New <br /> subscriptions</h2>
                            </div>
                        </div>
                        <div className={styles.leftMain}>
                            <div className={styles.leftImgInfo}>
                                <img className={styles.leftImg} src="./heroImage.png" alt='An iPhone with an offerwall' />
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
                            src='./heroImage.png'
                            alt='An iPhone with an offerwall'
                        />
                        </div>
                    </div>
                    <div className={styles.rightMainMobile}>
                        <h1 className={styles.textMobile}>
                        Boost
                        <br />
                        Monetization.
                        </h1>
                        <h2 className={styles.text2Mobile}>Retain Users.</h2>
                        <div className={styles.paragMobile}>
                        <div className={styles.innerParagMobile}>
                            {' '}
                            Metered paywalls have an average conversion rate of just
                            0.36%. Smatched builds customized ‘earn to play’ offerwalls
                            that <span>boost monetization</span> on your mobile app or
                            website and helps you <span>retain users</span> by offering
                            more choice.
                        </div>
                        </div>
                        <div className={styles.bottomHeroMobile}>
                        <div className={styles.bottomHeroRightMobile}>
                            <h1 className={styles.bottomHero1Mobile}>+50%</h1>
                            <h2>
                            Sales increase
                            <br />
                            through existing users
                            </h2>
                        </div>
                        <div className={styles.bottomHeroLeftMobile}>
                            <h1 className={styles.bottomHero2Mobile}>1000+</h1>
                            <h2>New subscriptions</h2>
                        </div>
                        </div>
                        <div className={styles.buttonTextMobile}>
                        <div
                            className={styles.buttonText1Mobile}
                            onClick={toggleBookingForm}
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

            {/* Second Home */}

            <div className={styles.secondHomeContainer}>
                <div style={{ display: "flex", flexDirection: "row", alignItems: "flex-start", marginTop: '40px' }}>
                    <div className={styles.secondHomeContainerBox1}>
                        <div className={styles.whatOffer}>
                            <div className={styles.secondLeft}>
                                Monetize provides <br />
                                an alternative Subscription Model{' '}
                            </div>
                        </div>

                        <div className={styles.secondRight}>
                            <div className={styles.innerAnOfferwall}>
                                <div className={styles.anOfferwallParag}>
                                    Paywalls are a great revenue option for many businesses but
                                    unfortunately, making users pay means your revenue potential
                                    is capped. Businesses that offer more than one monetization
                                    model retain <span>50% more users</span>.
                                    <br />
                                    <br />
                                    What if your users could earn their way past a paywall without
                                    having to open their wallet?
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div 
                    style={{ 
                        height: "200px", 
                        display: "flex", 
                        flexDirection: "row", 
                        marginTop: '124px' 
                    }}>
                    <div className={styles.secondHomeContainerBox3}>
                        <div className={styles.firstImg} />
                        <div className={styles.secondImg} />
                        <div className={styles.thirdImg} />
                        <div className={styles.fourthImg} />
                    </div>
                </div>

                <div style={{ display: "flex", flexDirection: "row", alignItems: "flex-start" }}>
                    <div className={styles.secondHomeContainerBox4}>
                        <div className={styles.firstImgText}>Optimized Offerwall </div>
                        <div className={styles.secondImgText}>Users earn rewards </div>
                        <div className={styles.thirdImgText}>Users can use rewards as in-app currency</div>
                        <div className={styles.fourthImgText}>You increase revenue & retention</div>
                    </div>
                </div>

                <div className={styles.secondHomeContainerBox2}>
                    <img className={styles.image1} src="./section2img.svg" alt='A picture of a phone' />
                </div>
            </div>

            {/*Second Home mobile responsiveness*/}

            <div className={styles.mobileSecondHomeContainer}>
                <div className={styles.mainSecondMobile}>
                <div className={styles.leftMainMobile}>
                    <div className={styles.leftImgInfoSecondMobile}>
                    <img
                        src='./images/secondHomeImg.png'
                        alt='An iPhone with an offerwall'
                    />
                    </div>
                </div>
                <div className={styles.rightMainMobile}>
                    <h2 className={styles.textSecondMobile}>
                    Smatched provides an alternative Subscription Model
                    </h2>
                    <div className={styles.paragMobile}>
                    <div className={styles.innerParagSecondMobile}>
                        {' '}
                        Paywalls are a great revenue option for many businesses but
                        unfortunately, making users pay means your revenue potential is
                        capped. Businesses that offer more than one monetization model
                        retain <b>50% more users</b>.
                        <br />
                        <br />
                        What if your users could earn their way past a paywall without
                        having to open their wallet?
                    </div>
                    </div>
                </div>
                </div>
            </div>

            {/* Third Home */}

            <div className={styles.thirdHomeContainer}>
                <div className={styles.thirdHomeContainerBox}>
                <div className={styles.thirdSectionLeft}>
                    <div className={styles.imageThirdHomeContainer}>
                    <div className={styles.thirdSectionLeftBG}>
                        <div className={styles.thirdHomeImage}>
                        <img
                            src='./thirdSectionImg.png'
                            alt='A laptop and a phone with offerwall rewards'
                        />
                        </div>
                    </div>
                    </div>
                </div>

                <div className={styles.thirdSectionRight}>
                    <>
                    <div className={styles.innerThirdSectionRight}>
                        <div className={styles.thirdSectionRightH1}>
                        Why partner
                        <br />
                        with Monetize?
                        </div>
                    </div>

                    <div className={styles.thirdSectionRightH2}>
                        <ul className={styles.thirdSectionRightList}>
                        <li>Open up another revenue stream</li>
                        <li>
                            Our business model incentivizes us to provide better
                            experiences for your customers
                        </li>
                        <li>Easy set-up: no set-up costs or integration work</li>
                        <li>
                            The Smatched web app is independent, GDPR-compliant and
                            completely secure
                        </li>
                        </ul>
                    </div>

                    <div className={styles.buttonTextGold}>
                        <div
                        className={styles.buttonText1Gold}
                        onClick={toggleBookingForm}
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


            {/*Third Home mobile Responsiveness*/}

            <div className={styles.mobileThirdHomeContainer}>
                <div className={styles.mobileThirdHomeContainerBox}>
                    <div className={styles.mobileThirdSectionLeft}>
                        <div className={styles.imageMobileThirdHomeContainer}>
                            <div className={styles.mobileThirdSectionLeftBG}>
                                <div className={styles.mobileThirdHomeImage}>
                                    <img src="./thirdSectionImg.png" alt='A laptop and a phone with offerwall rewards' />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.mobileThirdSectionRight}>
                        <>
                            <div className={styles.innerMobileThirdSectionRight}>
                                <div className={styles.mobileThirdSectionRightH1}>Why partner with Monetize?</div>
                            </div>

                            <div className={styles.mobileThirdSectionRightH2}>
                                <ul className={styles.mobileThirdSectionRightList}>
                                    <li>Open up another revenue stream</li>
                                    <li>Our business model incentivizes us to provide better experiences for your customers</li>
                                    <li>Easy set-up: no set-up costs or integration work</li>
                                    <li>The Smatched web app is independent, GDPR-compliant and completely secure</li>
                                </ul>
                            </div>

                            <div className={styles.mobileButtonTextGold}>
                                <div className={styles.mobileButtonText1Gold} onClick={toggleBookingForm}>BOOK A DEMO</div>
                            </div>
                            {showBookingForm && (
                                <div className={styles.bookingFormPopup}>
                                    <div className={styles.bookingFormContent}>
                                        <span className={styles.closeButton} onClick={toggleBookingForm}>&times;</span>
                                        <Booking />
                                    </div>
                                </div>
                            )}
                        </>
                    </div>
                </div>

            </div>


            {/* Fourth Home */}

            <div className={styles.fourthHomeContainer}>
                <div className={styles.SubFourthHomeContainer}>
                    <div className={styles.fourthHomeBox1}>
                        <div>How it works?</div>
                    </div>

                    <div className={styles.fourthHomeBox2}>
                        <div className={styles.fourthBox2Container}>
                            <div className={styles.fourth13}>
                                <div className={styles.fourth13One}>
                                    <div className={styles.innerOne}>
                                        <img className={styles.stepOneImg} src="./one.svg" alt="A picture of a number one" />
                                        <h1>Step 1</h1>
                                        <div className={styles.fourth13Integration}>
                                            We integrate via API into your mobile app or website to integrate seamlessly with your existing monetization model.
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.fourth13Two}>
                                    <div className={styles.innerThree}>
                                        <img className={styles.stepThreeImg} src="./three.svg" alt="A picture of a number three" />
                                        <h1>Step 3</h1>
                                        <div className={styles.fourth13Integration}>
                                            Users are funneled to Smatched as an option after not converting and are then given the opportunity to earn their reward through an offerwall – which includes multiple earning options.                                    </div>
                                    </div>
                                </div>
                            </div>



                            <div className={styles.fourth24}>
                                <div className={styles.fourth24One}>
                                    <div className={styles.innerTwo}>
                                        <img className={styles.stepTwoImg} src="./two.svg" alt="A picture of a number two" />
                                        <h1>Step 2</h1>
                                        <div className={styles.fourth13Integration}>
                                            We work with you to optimize and maximize conversions to improve the overall user experience – customization increases conversions by an average of 3x</div>
                                    </div>
                                </div>
                                <div className={styles.fourth24Two}>
                                    <div className={styles.innerFour}>
                                        <img className={styles.stepFourImg} src="./four.svg" alt="A picture of a number four" />
                                        <h1>Step 4</h1>
                                        <div className={styles.fourth13Integration}>
                                            The user then completes the action to earn you more revenue and the added options increases returning users by 100% on average. </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/*MOBILE FOURTH HOME CONTAINER*/}

            <div className={styles.mobileFourthHomeContainer}>
                <div className={styles.subMobileFourthHomeContainer}>
                    <div className={styles.mobileFourthHomeBox1}>
                        <div>How it works?</div>
                    </div>

                    <div className={styles.mobileFourthHomeBox2}>
                        <div className={styles.mobileFourthBox2Container}>
                            <div className={styles.mobileFourth1234}>

                                <div className={styles.mobileFourthOne}>
                                    <div className={styles.mobileFourthInner12}>
                                        <img className={styles.mobileFourthStepOneImg} src="./one.svg" alt="A picture of a number one" />
                                        <h1>Step 1</h1>
                                        <div className={styles.mobileFourth12Integration}>
                                            We integrate via API into your mobile app or website to integrate seamlessly with your existing monetization model.
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.mobileFourthTwo}>
                                    <div className={styles.mobileFourthInner12}>
                                        <img className={styles.mobileFourthStepTwoImg} src="./two.svg" alt="A picture of a number two" />
                                        <h1>Step 2</h1>
                                        <div className={styles.mobileFourth12Integration}>
                                            We work with you to optimize and maximize conversions to improve the overall user experience – customization increases conversions by an average of 3x
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.mobileFourthThree}>
                                    <div className={styles.mobileFourthInner34}>
                                        <img className={styles.mobileFourthStepThreeImg} src="./three.svg" alt="A picture of a number three" />
                                        <h1>Step 3</h1>
                                        <div className={styles.mobileFourth12Integration}>
                                            Users are funneled to Smatched as an option after not converting and are then given the opportunity to earn their reward through an offerwall – which includes multiple earning options.
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.mobileFourthFour}>
                                    <div className={styles.mobileFourthInner34}>
                                        <img className={styles.stepFourImg} src="./four.svg" alt="A picture of a number four" />
                                        <h1>Step 4</h1>
                                        <div className={styles.mobileFourth12Integration}>
                                            The user then completes the action to earn you more revenue and the added options increases returning users by 100% on average.
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Fifth Home */}

            <div className={styles.fifthHomeContainer}>
                <div className={styles.fifthHomeBackground}>

                    <div className={styles.innerFifthHomeContainer1}>

                        <div className={styles.innerFifthLeft}>
                        </div>

                        <div className={styles.innerFifthRight}>
                            <div className={styles.innerFifthMainBox1}>
                                <div className={styles.innerFifthBox1}>
                                    <div>Revenue Sharing Model</div>
                                </div>
                            </div>

                            <div className={styles.innerFifthMainBox2}>
                                We have a profit sharing model so there is no monthly cost.
                                This means there is no risk on your end because make our money<br /> the same way you do.<br /><br />
                                We are constantly working with our customers to optimize the user experience of their
                                users and this model has proven very successful for increasing monetization and retention.
                            </div>
                        </div>

                    </div>

                    <div className={styles.bottomBG}></div>

                </div>

            </div>

            {/*MOBILE FIFTH HOME CONTAINER*/}

            <div className={styles.mobileFifthHomeContainer}>
                <div className={styles.mobileFifthHomeBackground}>
                <div className={styles.mobileInnerFifthHomeContainer}>
                    <div className={styles.mobileInnerFifthTop}>
                    <ul>
                        <li>
                        <img src='./fifthIcon3.svg' alt='A icon' />
                        Increase new visitors
                        </li>
                        <li>
                        <img src='./fifthIcon2.svg' alt='A icon' />
                        1,355,900 Views
                        </li>
                        <li>
                        <img src='./fifthIcon3.svg' alt='A icon' />
                        Growth or customers
                        </li>
                        <li>
                        <img src='./fifthIcon1.svg' alt='A icon' />
                        Increase your revenue
                        </li>
                    </ul>
                    </div>

                    <div className={styles.mobileInnerFifthBottom}>
                    <div className={styles.mobileInnerFifthTitle}>
                        Revenue Sharing Model
                    </div>
                    <div className={styles.mobileInnerFifthText}>
                        We have a profit sharing model so there is no monthly cost. This
                        means there is no risk on your end because make our money the
                        same way you do.
                        <br />
                        <br />
                        We are constantly working with our customers to optimize the
                        user experience of their users and this model has proven very
                        successful for increasing monetization and retention.
                    </div>
                    </div>
                </div>
                </div>
            </div>

        </div>

    )
}

export default Home;