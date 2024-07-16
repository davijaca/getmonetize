import React from 'react';
import styles from './Second.module.css';

const Second = ({backgroundColor, src1, src2, src3, src4, alt1, alt2, alt3, alt4, H1, H2, H3, B1, B2, B3, B4, width = '100%', height = 'auto', showBot = true, imgPaddingTop = '0'}) => {
  
  const bgStyle = {
    backgroundColor: backgroundColor,
};
  
  return (
    <div className={styles.secondContainer} style={bgStyle}>
      <div className={styles.secondParent}>
        <div className={styles.secondRight}>
          <div className={styles.secondH2}>
            <h2 dangerouslySetInnerHTML={{ __html: H2 }}></h2>
          </div>
        </div>
        <div className={styles.secondLeft}>
          <div className={styles.secondH3}>
            <h3 dangerouslySetInnerHTML={{ __html: H3 }}></h3>
          </div>
        </div>
        <div className={styles.secondBottom}>
          <div className={styles.secondBottomFirst}>
          <div className={styles.heroH4}>
            <img src={src1} alt={alt1} style={{ width, height, paddingTop: imgPaddingTop }} />
            <h4 dangerouslySetInnerHTML={{ __html: B1 }}></h4>
          </div>
          </div>
          <div className={styles.secondBottomSecond}>
          <div className={styles.heroH4}>
            <img src={src2} alt={alt2} style={{ width, height, paddingTop: imgPaddingTop }} />
            <h4 dangerouslySetInnerHTML={{ __html: B2 }}></h4>
          </div>
          </div>
          <div className={styles.secondBottomThird}>
          <div className={styles.heroH4}>
            <img src={src3} alt={alt3} style={{ width, height, paddingTop: imgPaddingTop }} />
            <h4 dangerouslySetInnerHTML={{ __html: B3 }}></h4>
          </div>
          </div>
          <div className={styles.secondBottomFourth}>
          <div className={styles.heroH4}>
            <img src={src4} alt={alt4} style={{ width, height, paddingTop: imgPaddingTop }} />
            <h4 dangerouslySetInnerHTML={{ __html: B4 }}></h4>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Second;
