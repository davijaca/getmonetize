import React from 'react';
import styles from './Hero.module.css';
import Button from '../Button/Button.jsx';


const Hero = ({backgroundImage, src, alt, H1, H2, H3, H4, width = '100%', height = 'auto', showBot = true}) => {
  
  const bgStyle = {
    backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
};
  
  return (
    <div className={styles.heroContainer} style={bgStyle}>
      <div className={styles.topFirst}>
        
        <div className={styles.heroRight}>
          <div className={styles.heroH3}>
            <h3>{H3}
            </h3>
          </div>
          <div className={styles.heroH1}>
            <h1>{H1}</h1>
          </div>
          <div className={styles.heroH2}>
            <h2>{H2}</h2>
          </div>
          <div className={styles.heroH4}>
            <h4>{H4}</h4>
          </div>
          <Button/>

          <div className={styles.heroBot}>
            {showBot && 
              <div className={styles.bottomHero}>
                <h2 className={styles.bottomHero1}>+50%</h2>
                <h3>
                  Sales increase <br /> through existing users
                </h3>
                <h2 className={styles.bottomHero2}>1000+</h2>
                <h3>
                  New <br /> subscriptions
                </h3>
              </div>}
          </div>
          
        </div>
        
        <div className={styles.heroLeft}>
          <img src={src} alt={alt} style={{ width, height }} />
        </div>

      </div>
    </div>
  );
};

export default Hero;
