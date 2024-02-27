import React from 'react';

import styles from './ImageRight.module.css';

const ImageRight = ({ sources }) => {
  return (
    <div className={styles.wrapper}>
      <picture>
        <source srcSet={sources.desktop} media="(min-width: 600px)" />
        <source srcSet={sources.mobile} media="(max-width: 600px)" />
        <img src={sources.desktop} alt="" />
      </picture>
    </div>
  );
};

export default ImageRight;
