import React from 'react';
import TextTruncate from 'react-text-truncate';
import styles from './ArticleCard.module.css';
import { Link } from 'react-router-dom';

const ArticleCard = ({
  image,
  title,
  readTime,
  publishedDate,
  text,
  readMoreUrl,
}) => {
  return (
    <article className={styles.articleCard} data-testid="article-card">
      <div className={styles.cardImage} alt="article-image">
        <img src={image} alt="" />
      </div>
      <div className={styles.articleContent}>
        <div className={styles.article}>
          <h1 className={styles.articleTitle} data-testid="article-card-title">
            {title}
          </h1>
          <div className={styles.articlesInfo}>
            <div className={styles.info_wrapper}>
              <span className={styles.span_dot}>
                <img
                  src={'/images/Ellipse.svg'}
                  className={styles.elipse}
                  alt=""
                />
              </span>
              {readTime} read
            </div>{' '}
            <div className={styles.info_wrapper}>
              <span className={styles.span_dot}>
                <img
                  src={'/images/Ellipse.svg'}
                  className={styles.elipse}
                  alt=""
                />
              </span>
              {publishedDate}
            </div>
          </div>
          {/* You can change how many lines the cards will display at line=() below */}
          <TextTruncate line={3} element="p" text={text} />
        </div>
        <Link to={readMoreUrl}>
          <button className={styles.btnReadMore}>READ MORE</button>
        </Link>
      </div>
    </article>
  );
};

export default ArticleCard;
