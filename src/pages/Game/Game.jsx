import React from 'react';
import styles from './Game.module.css';
import { Helmet } from "react-helmet";

const Game = () => {
  return (
    <div className={styles.gameContainer}>

      <Helmet>
          <meta charSet="utf-8" />
          <title>GAME</title>
          <link rel="canonical" href="https://www.smatched.io/" />
          <link rel="canonical" href="https://www.smatched-io.com/" />
      </Helmet>

      {/* FIRST SECTION */}
      <div className={styles.firstGameContainer}>
        <div className={styles.topFirst}>
          <div className={styles.mainFirst}>
            <div className={styles.rightMain}>
              <h1 className={styles.text}>Enhance</h1>
              <h2 className={styles.text2}>
                your game <br /> monetization <br />
                model.
              </h2>
              <div className={styles.parag}>
                <div className={styles.innerParag}>
                  Give players more choice when it comes to monetization. While
                  gaming payment gateways are a necessary evil for many gaming
                  companies, many gamers are not willing to pay for games
                  upfront.
                </div>
              </div>
              <div className={styles.buttonText}>
                <div className={styles.buttonText1}>BOOK A DEMO</div>
              </div>
              {/*<div className={styles.bottomHero}>*/}
              {/*    <h1 className={styles.bottomHero1}>+50%</h1>*/}
              {/*    <h2>Sales increase*/}
              {/*    <br />*/}
              {/*    through existing users</h2>*/}
              {/*    <h1 className={styles.bottomHero2}>1000+</h1>*/}
              {/*    <h2>New*/}
              {/*    <br />*/}
              {/*    subscriptions</h2>*/}
              {/*</div>*/}
            </div>
            <div className={styles.leftMain}>
              <div className={styles.leftImgInfo}>
                <img
                  className={styles.gameLeftImg}
                  src='./gameHeroImage.png'
                  alt='An iPhone with an offerwall'
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE FIRST SECTION */}
      <div className={styles.mobileFirstGameContainer}>
            <div className={styles.topFirst}>
                    <div>
                        <div className={styles.mobileTopFirstBg}>
                            <div className={styles.mainFirstMobile}>
                            <div className={styles.leftMainMobile}>
                                <div className={styles.leftImgInfoMobile}>
                                    <img className={styles.leftImgMobile} src="./gameHeroImage.png" alt='An iPhone with an offerwall'/>
                                </div>
                            </div>
                            <div className={styles.rightMainMobile}>
                                <h1 className={styles.textMobile}>
                                    <b>Enhance</b>
                                </h1>
                                <h2 className={styles.text2Mobile}>
                                    your game <br /> monetization <br /> model.
                                </h2>
                                <div className={styles.paragMobile}>
                                    <div className={styles.innerParagMobile}>Give players more choice when it comes to monetization. While
                                      gaming payment gateways are a necessary evil for many gaming
                                      companies, many gamers are not willing to pay for games
                                      upfront.
                                    </div>
                                </div>

                                <div className={styles.buttonTextMobile}>
                                    <div className={styles.buttonText1Mobile}>BOOK A DEMO</div>
                                </div>

                            </div>
                            </div>
                        </div>
                    </div>
                </div>
      </div>

      {/* SECOND SECTION */}
      <div className={styles.secondGameContainer}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start',
            marginTop: '100px'
          }}
        >
          <div className={styles.secondGameContainerBox1}>
            <div className={styles.levelUp}>
              <div className={styles.secondLeft}>
                Level up your in-
                <br />
                game monetization <br /> strategy{' '}
              </div>
            </div>

            <div className={styles.secondRight}>
              <div className={styles.innerAnOfferwall}>
                <div className={styles.anOfferwallParag}>
                  <div>
                    The gaming industry is currently facing several challenges
                  </div>
                  <div>
                    when it comes to monetization. One of the main issues is the
                  </div>
                  <div className={styles.lowBoxInfo}>
                    <div className={styles.lowPeople}>low % of people </div>
                    <div> who are willing to pay to play games,</div>
                  </div>
                  <div>
                    especially given the abundance of free options that are{' '}
                  </div>
                  <div>available.</div>
                  <br />
                  <div>
                    In addition to this, there are many existing game
                    monetization models that often negatively impact the user
                    experience.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.secondGameContainerBox2}>
            <img
              src='./secondGameImage.png'
              alt='Game monetization'
            />
          </div>
        </div>
      </div>

       {/* MOBILE SECOND SECTION */}

      <div className={styles.mobileSecondGameContainer}>
            <div className={styles.mobileTopSecondBg}>
                <div className={styles.mainSecondMobile}>
                <div className={styles.leftMainMobile}>
                    <div className={styles.leftImgInfoSecondMobile}>
                        <img className={styles.secondImgMobile} src="./secondGameImage.png" alt='An iPhone with an offerwall'/>
                    </div>
                </div>
                <div className={styles.rightMainMobile}>
                    <h2 className={styles.textSecondMobile}>
                    Level up your in-game monetization strategy
                    </h2>
                    <div className={styles.paragMobile}>
                        <div className={styles.innerParagSecondMobile}> The gaming industry is currently facing several challenges 
                        when it comes to monetization. One of the main issues is the <b>low % of people</b> who are willing to pay to play 
                        games, especially given the abundance of free options that are available. In addition to this, there are 
                        many existing game monetization models that often negatively impact the user experience. 
                        </div>
                    </div>
                </div>
                </div>
            </div>

      </div>

      {/* THIRD SECTION */}
      <div className={styles.thirdGameContainer}>
        <div className={styles.thirdGameContainerBox}>
          <div className={styles.thirdSectionLeft}>
            <img
              src='./smartPhone.png'
              alt='man-using smart phone'
            />
          </div>

          <div className={styles.thirdSectionRight}>
            <div className={styles.innerThirdSectionRight}>
              <div className={styles.innerThirdAddWalls}>
                Are addwalls the answer?
              </div>
              <div className={styles.innerThirdInGame}>
                <div className={styles.inTimeGame}>
                  <div>One major issue with existing in-game monetization </div>
                  <div>
                    models such as banner and video ads is that they often{' '}
                  </div>
                  <div className={styles.majorModels}>
                    <div className={styles.interrupt}>
                      interrupt the user experience
                    </div>
                    <div>and can negatively impact</div>
                  </div>
                  <div>gameplay. </div>
                  <br />
                  <div className={styles.surveyMobile}>
                    <div>According to a survey by AdColony, </div>
                    <div className={styles.interrupt}>70% of mobile </div>
                  </div>
                  <div className={styles.surveyMobile}>
                    <div className={styles.interrupt}>gamers</div>
                    <div>said that they would rather pay for a game</div>
                  </div>
                  <div className={styles.upfrontDeals}>
                    <div>upfront than deal with ads, while</div>
                    <div className={styles.interrupt}>64%</div>
                    <div>said that they had</div>
                  </div>
                  <div> stopped playing a game because of ads.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE THIRD SECTION */}
      <div className={styles.mobileThirdGameContainer}>
            <div className={styles.mobileThirdGameContainerBox}>
                <div className={styles.mobileThirdSectionLeft}>
                    <div className={styles.imageMobileThirdGameContainer}>
                      <div className={styles.mobileThirdGameImage}>
                        <img src="./smartPhone.png" alt='A laptop and a phone with offerwall rewards'/>
                      </div>
                    </div>
                </div>

                <div className={styles.mobileThirdSectionRight}>
                  <div className={styles.innerMobileThirdSectionRight}>
                      <div className={styles.mobileThirdSectionRightH1}>Are adwalls the answer?</div>
                  </div>
                  <div className={styles.bottomThirdMobile}>
                    <div className={styles.paragThirdMobile}>
                        <div className={styles.innerParagThirdMobile}> One major issue with existing in-game monetization
                         models such as banner and video ads is that they often <b>interrupt the user experience </b>and can negatively
                        impact gameplay.
                        <br/>
                        <br/>
                        According to a survey by AdColony, <b>70% of mobile gamers</b> said that they would rather pay for a game upfront 
                        than deal with ads, while 64% said that they had stopped playing a game because of ads.
                        </div>
                    </div>
                  </div>
                </div>
            </div>

      </div>

      {/* FOURTH SECTION */}
      <div className={styles.fourthGameContainer}>
        <div className={styles.SubFourthGameContainer}>
          <div className={styles.fourthGameBox1}>
            <div className={styles.growRevenue}>
              Grow your revenue. Monetize your game <br /> or app.
            </div>
            <div className={styles.uniqueOffers}>
              Smatched offers a unique solution to the monetization <br />{' '}
              challenges faced by the gaming industry.
            </div>
          </div>

          <div className={styles.fourthGameBox2}>
            <div className={styles.fourthBox2Container}>
              <div className={styles.fourthBox2Container1}>
                <div className={styles.innerFourthBox1}>
                  <img
                    className={styles.like}
                    src='/likeVector.png'
                    alt='Like button'
                  />
                  <div className={styles.verticalLike}>
                    <img
                      className={styles.vertical}
                      src='/verticalLikeVector.png'
                      alt='Like button'
                    />
                  </div>
                </div>
                <div className={styles.innerFourthBox2}>
                  <div className={styles.innerFourthBox2details1}>
                    Add an offerwall to current subscription models of your
                    users.
                  </div>
                  <div className={styles.innerFourthBox2details2}>
                    Players earn rewards and virtual currency by engaging with
                    paid surveys and other offers.
                  </div>
                  <div className={styles.innerFourthBox2details3Players}>
                    <div>
                      Players have more choice and flexibility for paying.{' '}
                    </div>
                    <div className={styles.increasingRevenue}>
                      You are increasing your revenue.
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.fourthBox2Container2}>
                <div className={styles.innerFourthBox1}>
                  <img
                    className={styles.disLike}
                    src='/dislikeVector.png'
                    alt='dislike button'
                  />
                  <div className={styles.verticalLike}>
                    <img
                      className={styles.vertical}
                      src='/verticalDislikeVector.png'
                      alt='Like button'
                    />
                  </div>
                </div>
                <div className={styles.innerFourthBox2}>
                  <div className={styles.innerFourthBox2details1}>
                    You are relying solely on subscriptions or intrusive ads.
                  </div>
                  <div className={styles.innerFourthBox2details2}>
                    Some players are unable to pay for your subscription, some
                    of them are irritating by ads in it.
                  </div>
                  <div className={styles.innerFourthBox2details3}>
                    Players have not flexibility for paying. You are losing your
                    existing users and revenue.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE FOURTH SECTION */}
      <div className={styles.mobileFourthGameContainer}>
            <div className={styles.mobileTopFourthBg}>
                <div className={styles.mainFourthMobile}>
                  <div className={styles.topFourthMobile}>
                      <h2 className={styles.textSecondMobile}>
                      Grow your revenue. <br/> Monetize your game or app.
                      </h2>
                      <div className={styles.paragMobile}>
                          <div className={styles.innerParagSecondMobile}>Smatched offers a unique solution to the monetization
              challenges faced by the gaming industry.
                          </div>
                      </div>
                  </div>
                  <div className={styles.bottomFourthMobile}>
                    <div className={styles.bottomImgInfoFourthMobile}>
                        <img className={styles.fourthImgMobile} src="./fourthMobileImg.png" alt='An iPhone with an offerwall'/>
                    </div>
                </div>
                </div>
            </div>

      </div>

      {/* FIFTH SECTION */}
      <div className={styles.fifthGameContainer}>
        <div className={styles.fifthGameBackground}>
          <div className={styles.fifthGameLeft}>
            <img src='/MacBookPro17.png' />
          </div>
          <div className={styles.fifthGameRight}>
            <div className={styles.innerFifthGameRight}>
              <div className={styles.fifthGameRightModel}>
                Enhance your web or mobile Game Business Model
              </div>
              <div className={styles.increaseSubscription}>
                <div className={styles.smatchInreaseOnline}>
                  <div>Smatched has been shown to</div>
                  <div className={styles.increaseRate}>
                    increase subscription rates
                  </div>
                  <div>in the online</div>
                </div>
                <div className={styles.industryNews}>
                  <div>news industry</div>
                  <div className={styles.increaseRate}>by 3x,</div>
                  <div>indicating the potential for significant growth</div>
                </div>
                <div>
                  and revenue generation in the gaming industry as well.
                </div>
                <br />
                <div>
                  The gaming industry is facing significant challenges when it
                  comes to monetization. Smatched’s offerwall provides a
                  promising solution to this challenge and one that is likely to
                  become increasingly important as the gaming industry continues
                  to evolve and grow.
                </div>
              </div>
              <div className={styles.buttonTextDemo}>
                <div className={styles.buttonTextDemo1}>BOOK A DEMO</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE FIFTH SECTION */}
      <div className={styles.mobileFifthGameContainer}>
            <div className={styles.mobileFifthGameContainerBox}>
                <div className={styles.mobileFifthGameImage}>
                    <img src="./FifthSectionImg.png" alt='A laptop and a phone with offerwall rewards'/>
                </div>

                <div className={styles.mobileFifthSectionRight}>
                  <div className={styles.mobileFifthSectionRightH1}>Enhance your web or mobile Game Business Model</div>

                  <div className={styles.innerParagSecondMobile}>Smatched has been shown to <b>increase subscription rates</b> 
                  in the online news industry <b>by 3x</b>, indicating the potential for significant growth and revenue generation 
                  in the gaming industry as well.
                  <br/>
                  <br/>
                  The gaming industry is facing significant challenges when it comes to monetization. Smatched’s offerwall 
                  provides a promising solution to this challenge and one that is likely to become increasingly important 
                  as the gaming industry continues to evolve and grow.
                  </div>

                  <div className={styles.mobileButtonTextGold}>
                      <div className={styles.mobileButtonText1Gold}>BOOK A DEMO</div>
                  </div>
                </div>
            </div>

      </div>

    </div>
  );
};

export default Game;
