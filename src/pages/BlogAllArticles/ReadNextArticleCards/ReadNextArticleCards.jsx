import React from 'react';
import TextTruncate from 'react-text-truncate';
import { Link } from 'react-router-dom';

import styles from './ReadNextArticleCard.module.css';

const ReadNextArticleCard = (props) => {
  const { image, title, readTime, publishedDate, text, readMoreUrl } = props;

  return (
    <article className={styles.readNextCard} data-testid="article-card">
      <div className={styles.readNextCardImage} alt="article-image">
        <img src={image} alt="" />
      </div>
      <div className={styles.readNextCardContent}>
        <div className={styles.readNextCardContent_grid}>
          <h1 className={styles.readNextCardTitle}>{title}</h1>
          <div className={styles.readNextCardInfo}>
            <div> {readTime} read</div> <div>{publishedDate}</div>
          </div>
          {/* You can change how many lines the cards will display at line=() below */}
          <TextTruncate line={4} element="p" text={text} />
        </div>
        <div className={styles.readNextCardBtnReadMore_wrapper}>
          <Link to={readMoreUrl}>
            <button className={styles.readNextCardBtnReadMore}>
              READ MORE
            </button>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ReadNextArticleCard;
