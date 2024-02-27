import React from 'react';

import styles from './PlainSection.module.css';

const PlainSection = ({ title, body }) => {
  return (
    <section className={styles.wrapper}>
      {title && <h2>{title}</h2>}
      <p className={styles.bodyWrapper}>{body}</p>
    </section>
  );
};

export default PlainSection;
