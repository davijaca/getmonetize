import React from 'react';
import styles from './Image.module.css';

const Image = ({ src, alt, width = '100%', height = 'auto', imgPaddingTop = '0' }) => {
  return (
    <div className={styles.imageContainer}>
      <img src={src} alt={alt} style={{ width, height, paddingTop: imgPaddingTop }} />
    </div>
  );
};

export default Image;