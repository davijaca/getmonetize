import React from 'react';
import styles from './Game.module.css';
import { Helmet } from 'react-helmet';
import Button from '../../components/Button/Button';

const Game = () => {
  return (
    <div className={styles.gameContainer}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>GAME</title>
        <link rel="canonical" href="https://www.smatched.io/" />
        <link rel="canonical" href="https://www.offerwallmonetization.com/" />
      </Helmet>

      {/* FIRST SECTION */}
      <div className={styles.firstGameContainer}>
        <div className={styles.topFirst}>
          <div className={styles.mainFirst}>
            <div className={styles.rightMain}>
              <h1 className={styles.text}>
                Enhance
                <br />
                <span className={styles.text2}>
                  your game monetization model.
                </span>
              </h1>
              <div className={styles.parag}>
                <div className={styles.innerParag}>
                  Give players more choice when it comes to monetization. While
                  gaming payment gateways are a necessary evil for many gaming
                  companies, many gamers are not willing to pay for games
                  upfront.
                </div>
              </div>
              <Button />
            </div>
            <div className={styles.leftMain}>
              <div className={styles.leftImgInfo}>
                <img
                  className={styles.gameLeftImg}
                  src="/images/gamePage/gameHeroImage.png"
                  alt="A man using a helmet holding a flashlight"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE FIRST SECTION */}
      <div className={styles.mobileFirstGameContainer}>
        <div className={styles.leftMainMobile}>
          <div className={styles.leftImgInfoMobile}>
            <img
              className={styles.leftImgMobile}
              src="/images/gamePage/gameHeroImage.png"
              alt="A man with a helmet holding a flashlight"
            />
          </div>
        </div>
        <div className={styles.rightMainMobile}>
          <div>
            <h1 className={styles.textMobile}>
              Enhance <span className={styles.text2Mobile}>your</span>
            </h1>
            <h2 className={styles.text2Mobile}>
              game <br /> monetization <br /> model.
            </h2>
          </div>
          <div className={styles.paragFirstMobile}>
            <div className={styles.innerParagFirstMobile}>
              Give players more choice when it comes to monetization. While
              gaming payment gateways are a necessary evil for many gaming
              companies, many gamers are not willing to pay for games upfront.
            </div>
          </div>
          <Button />
        </div>
      </div>

      {/* SECOND SECTION */}
      <div className={styles.secondGameContainer}>
        <div
          style={{
            width: '1220px',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start',
            marginTop: '100px',
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
              <div className={styles.anOfferwallParag}>
                <p>
                  The gaming industry is currently facing several challenges
                  when it comes to monetization. One of the main issues is the
                  <span> low % of people</span> who are willing to pay to play
                  games, especially given the abundance of free options that are
                  available.
                  <br />
                  <br />
                  In addition to this, there are many existing game monetization
                  models that often negatively impact the user experience.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.secondGameContainerBox2}>
            <img
              src="/images/gamePage/secondGameImage.png"
              alt="A laptop and a smartphone"
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
                <img
                  className={styles.secondImgMobile}
                  src="/images/gamePage/secondGameImage.png"
                  alt="A laptop and a smartphone"
                />
              </div>
            </div>
            <div className={styles.rightMainMobile}>
              <h2 className={styles.textSecondMobile}>
                Level up your in-game monetization strategy
              </h2>
              <div className={styles.paragMobile}>
                <div className={styles.innerParagSecondMobile}>
                  {' '}
                  The gaming industry is currently facing several challenges
                  when it comes to monetization. One of the main issues is the{' '}
                  <span>low % of people</span> who are willing to pay to play
                  games, especially given the abundance of free options that are
                  available. In addition to this, there are many existing game
                  monetization models that often negatively impact the user
                  experience.
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
              src="/images/gamePage/smartPhone.png"
              alt="A man using smartphone"
            />
          </div>

          <div className={styles.thirdSectionRight}>
            <div className={styles.innerThirdSectionRight}>
              <div className={styles.innerThirdAddWalls}>
                Are addwalls the answer?
              </div>
              <div className={styles.innerThirdInGame}>
                <p>
                  One major issue with existing in-game monetization models such
                  as banner and video ads is that they often{' '}
                  <span>interrupt the user experience</span> and can negatively
                  impact gameplay.
                  <br />
                  <br />
                  According to a survey by AdColony,{' '}
                  <span>70% of mobile gamers</span> said that they would rather
                  pay for a game upfront than deal with ads, while{' '}
                  <span>64%</span> said that they had stopped playing a game
                  because of ads.
                </p>
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
                <img
                  src="/images/gamePage/smartPhone.png"
                  alt="A man using smartphone"
                />
              </div>
            </div>
          </div>

          <div className={styles.mobileThirdSectionRight}>
            <div className={styles.innerMobileThirdSectionRight}>
              <div className={styles.mobileThirdSectionRightH1}>
                Are addwalls the answer?
              </div>
            </div>
            <div className={styles.bottomThirdMobile}>
              <div className={styles.paragThirdMobile}>
                <div className={styles.innerParagThirdMobile}>
                  {' '}
                  One major issue with existing in-game monetization models such
                  as banner and video ads is that they often{' '}
                  <b>interrupt the user experience </b>and can negatively impact
                  gameplay.
                  <br />
                  <br />
                  According to a survey by AdColony, <b>
                    70% of mobile gamers
                  </b>{' '}
                  said that they would rather pay for a game upfront than deal
                  with ads, while 64% said that they had stopped playing a game
                  because of ads.
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
                    src="/images/gamePage/likeVector.png"
                    alt="A icon with a checked sign"
                  />
                  <div className={styles.verticalLike}>
                    <img
                      className={styles.vertical}
                      src="/images/gamePage/verticalLikeVector.png"
                      alt="A vertical line with bullet points"
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
                    src="/images/gamePage/dislikeVector.png"
                    alt="A icon with a x sign"
                  />
                  <div className={styles.verticalLike}>
                    <img
                      className={styles.vertical}
                      src="/images/gamePage//verticalDislikeVector.png"
                      alt="A vertical line with bullet points"
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
                Grow your revenue. <br /> Monetize your game or app.
              </h2>
              <div className={styles.paragFourthMobile}>
                <div className={styles.innerParagSecondMobile}>
                  Smatched offers a unique solution to the monetization
                  challenges faced by the gaming industry.
                </div>
              </div>
            </div>
            <div className={styles.bottomFourthMobile}>
              <div className={styles.bottomImgInfoFourthMobile}>
                <img
                  className={styles.fourthImgMobile}
                  src="/images/gamePage/fourthMobileImg.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FIFTH SECTION */}
      <div className={styles.fifthGameContainer}>
        <div className={styles.fifthGameBackground}>
          <div className={styles.fifthGameLeft}>
            <img src="/images/gamePage/MacBookPro17.png" alt="A laptop" />
          </div>
          <div className={styles.fifthGameRight}>
            <div className={styles.innerFifthGameRight}>
              <div className={styles.fifthGameRightModel}>
                Enhance your web or mobile Game Business Model
              </div>
              <p className={styles.increaseSubscription}>
                Smatched has been shown to{' '}
                <span>increase subscription rates</span> in the online news
                industry <span>by 3x</span>, indicating the potential for
                significant growth and revenue generation in the gaming industry
                as well.
                <br />
                <br />
                The gaming industry is facing significant challenges when it
                comes to monetization. Smatched’s offerwall provides a promising
                solution to this challenge and one that is likely to become
                increasingly important as the gaming industry continues to
                evolve and grow.
              </p>
              <Button color="gold" />
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE FIFTH SECTION */}
      <div className={styles.mobileFifthGameContainer}>
        <div className={styles.mobileFifthGameContainerBox}>
          <div className={styles.mobileFifthGameImage}>
            <img src="/images/gamePage/FifthSectionImg.png" alt="A laptop" />
          </div>

          <div className={styles.mobileFifthSectionRight}>
            <div className={styles.mobileFifthSectionRightH1}>
              Enhance your web or mobile Game Business Model
            </div>

            <div className={styles.increaseSubscription}>
              Smatched has been shown to{' '}
              <span>increase subscription rates </span>
              in the online news industry <span>by 3x</span>, indicating the
              potential for significant growth and revenue generation in the
              gaming industry as well.
              <br />
              <br />
              The gaming industry is facing significant challenges when it comes
              to monetization. Smatched’s offerwall provides a promising
              solution to this challenge and one that is likely to become
              increasingly important as the gaming industry continues to evolve
              and grow.
            </div>

            <Button color="gold" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
