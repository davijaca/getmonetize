import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import { articlesData } from './utils/articlesData';
import { Helmet } from 'react-helmet';
import ArticleCard from './ArticleCard/ArticleCard';
import Pagination from './Pagination/Pagination';
import SubscribeNews from '../../utilities/SubscribeNews/SubscribeNews';

// import heroFrameColours from './../../images/blogAllArticlesIntroFrameColors.svg';
import styles from './BlogAllArticles.module.css';

// This function slices the list of articles to a list hanging on the number of
function getArticlesForPage(allArticles, pageNumber, articlesPerPage) {
  const pageFirstElementIndex = articlesPerPage * (pageNumber - 1);
  return allArticles.slice(
    pageFirstElementIndex,
    pageFirstElementIndex + articlesPerPage
  );
}

const BlogAllArticles = ({
  allArticles = articlesData,
  articlesPerPage = 3,
  initialPage = 1,
  setShowFormFooter,
}) => {
  setShowFormFooter(false);
  const [currentPage, setCurrentPage] = useState(initialPage);
  // Temporarely hard coded state -> to be fetch from a server in the future
  const [articlesList, setArticlesList] = useState(allArticles);
  // a ref to be used on the scrollIntoView method
  const headerSectionRef = useRef(null);

  // calls the slice function to have a default list of cards on the page
  const [displayedArticlesList, setDisplayedArticlesList] = useState(() => {
    return getArticlesForPage(articlesList, currentPage, articlesPerPage);
  });

  useEffect(() => {
    // Will call the slice function again to set the correspondent list of articles with if a new page is selected
    // the displayArticlesList will be mapped and displayed inside the render to render the article Cards
    setDisplayedArticlesList(
      getArticlesForPage(articlesList, currentPage, articlesPerPage)
    );
  }, [currentPage, articlesPerPage, articlesList]);

  // logic to set how many buttons/pages should be displayed on the pagination
  const numberOfPages = Math.ceil(articlesList.length / articlesPerPage);

  // When User clicks on another page it will...
  const handlePaginationChange = (pageNumber) => {
    if (currentPage <= 0 || currentPage > numberOfPages) {
      return;
    }
    // Smothly scroll the page up
    headerSectionRef.current?.scrollIntoView();
    // Set the number of the page
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div className={styles.headerAllArticles}>
        <Helmet>
          <title>All Articles</title>
        </Helmet>
        <div className={styles.introColorsContainer}>
          <img
            src="/images/blogAllArticlesIntroFrameColors.svg"
            className={styles.introColorsImg}
            alt="colourfull-background"
          />
        </div>
        <div className={styles.headerAllArticlesGrid}>
          <h1 className={styles.headerAllArticles_Title}>Blog</h1>
          <p className={styles.headerAllArticles_Paragraph}>
            Get the latest research from industry experts to increase
            monetization of your existing user base and to retain more of your
            users on your web or mobile apps.
          </p>
          <div className={styles.subContentOfheaderAllArticles}>
            <h2 className={styles.subContentOfheaderAllArticles_Title}>
              All articles{' '}
            </h2>
            <p
              ref={headerSectionRef}
              className={styles.headerAllArticles_Paragraph}
            >
              Here's what we've been up to recently.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.bodyAllArticles}>
        <h2 className={styles.bodyAllArticles_Title}>More Articles</h2>
        <div className={styles.bodyAllArticlesWrapper}>
          <div className={styles.articlesCardsGrid}>
            {displayedArticlesList.map((article) => {
              return (
                <ArticleCard
                  key={article.id}
                  image={article.image}
                  title={article.title}
                  readTime={article.infos.readTime}
                  publishedDate={article.infos.publishedDate}
                  text={article.article}
                  readMoreUrl={article.readMoreUrl}
                />
              );
            })}
          </div>
          <Pagination

          //  DISABLED TEMPORARILY UNTIL MORE ARTICLES ARE PUBLISHED

          // currentPage={currentPage}
          // numberOfPages={numberOfPages}
          // onPaginationChange={handlePaginationChange}
          />
        </div>
      </div>
      <div className={styles.subscribeNews_wrapper}>
        <SubscribeNews />
      </div>
    </>
  );
};

export default BlogAllArticles;
