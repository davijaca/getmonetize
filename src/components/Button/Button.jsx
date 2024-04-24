import React from 'react';
import styles from './Button.module.css';

const Button = ({
  text = 'BOOK A DEMO',
  color = 'white',
  type = 'button',
  onClick,
}) => {
  return (
    <button
      className={`${styles.btn} ${
        color === 'white'
          ? styles.btnWhite
          : color === 'gold'
          ? styles.btnGold
          : styles.btnBlack
      }`}
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;

// Use PropTypes??? Maybe in the future to restrict color values

// className pattern? camelCase, btn_

// texts:
// BOOK A DEMO - default
// HOW IT WORKS
// SUBSCRIBE
// MORE ARTICLES
// READ MORE
// TRY FOR FREE
// SEND

// colors:
// white: font black - default
// gold: font white
// black: font white

// types:
// submit - just to forms submition
// button - default - Link for another page (articles) or to show form

// function:
// onChange
