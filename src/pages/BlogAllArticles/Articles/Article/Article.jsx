import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { articles } from './articles';
import { articlesData } from '../../utils/articlesData';
import Hero from '../articleComponents/Hero/Hero';
import HighlightedSection from '../articleComponents/HighlightedSection/HighlightedSection';
import SectionList from '../articleComponents/SectionList/SectionList';
import ImageRight from '../articleComponents/ImageRight/ImageRight';
import PlainSection from '../articleComponents/PlainSection/PlainSection';
import SectionListWithBulletPoints from '../articleComponents/SectionListWithBulletPoints/SectionListWithBulletPoints';
import ReadNextArticleCard from '../../ReadNextArticleCards/ReadNextArticleCards';
import { getNextArticles } from '../../utils/getNextArticles';

import styles from './Article.module.css';
import SubscribeNews from '../../../../utilities/SubscribeNews/SubscribeNews';

const Article = ({ setShowFormFooter }) => {
  setShowFormFooter(false);
  // Hook to navigate to other path
  const navigate = useNavigate();
  // Hook to read URL query
  const { search } = useLocation();
  // Function to read only the search Params of the URL -> after the '?'
  const urlSearchParams = new URLSearchParams(search);
  // Save the search param in a logical named variable
  const articleName = urlSearchParams.get('name');
  // Save the specific search Param (in this case: the article name) in the list of articles
  // and use this variable to render all articles dynamically
  const article = articles[articleName];

  useEffect(() => {
    if (!article) {
      navigate('/blog-all');
    }
  }, [article, navigate]);

  if (!article) {
    return null;
  }

  const nextArticles = getNextArticles(article.id, articlesData);

  return (
    <div data-testid={`article-wrapper`}>
      <article className={styles.articleWrapper}>
        <Hero
          title={article.title}
          readTime={article.metadata.readTime}
          date={article.metadata.date}
          imgdesktop={article.heroImg.desktop}
          imgmobile={article.heroImg.mobile}
          shouldDisplayNavbarBackground={article.navbarBackground}
        />

        <HighlightedSection body={article.highlight.body} />

        <div className={styles.sectionsWrapper} data-testid="articleContent">
          {article.content.map((content, index) => {
            switch (content.type) {
              case 'plain': {
                return (
                  <div
                    key={`plain-${index}`}
                    className={styles.pageSize_wrapper}
                  >
                    <PlainSection title={content.title} body={content.body} />
                  </div>
                );
              }
              case 'image': {
                return (
                  <ImageRight
                    key={`image-${index}`}
                    sources={content.sources}
                  />
                );
              }
              case 'list': {
                return (
                  <div
                    key={`list-${index}`}
                    className={styles.pageSize_wrapper}
                  >
                    <SectionList
                      title={content.title}
                      body={content.body}
                      subSections={content.subSections}
                    />
                  </div>
                );
              }
              case 'listWithBulletPoints': {
                return (
                  <div
                    key={`listWithBulletPoints-${index}`}
                    className={styles.pageSize_wrapper}
                  >
                    <SectionListWithBulletPoints
                      title={content.title}
                      body={content.body}
                      subSections={content.subSections}
                    />
                  </div>
                );
              }
              default:
                return null;
            }
          })}
        </div>
      </article>
      <div className={styles.whatToReadNext_wrapper}>
        <h1
          data-testid="whatToReadNext_title"
          className={styles.whatToReadNext_title}
        >
          What to read next
        </h1>
        <div className={styles.whatToReadNextCards_wrapper}>
          {nextArticles.map((article) => {
            return (
              <ReadNextArticleCard
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
      </div>
      <div className={styles.subscribeNews_wrapper}>
        <SubscribeNews />
      </div>
    </div>
  );
};

export default Article;
