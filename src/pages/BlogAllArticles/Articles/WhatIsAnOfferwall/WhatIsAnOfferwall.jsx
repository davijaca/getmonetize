import React from 'react';
import ReadNextArticleCard from '../../ReadNextArticleCards/ReadNextArticleCards';
import { articlesData } from '../../utils/articlesData';
import { getNextArticles } from '../../utils/getNextArticles';
import Hero from '../articleComponents/Hero/Hero';
import HighlightedSection from '../articleComponents/HighlightedSection/HighlightedSection';
import SectionList from '../articleComponents/SectionList/SectionList';
import ImageRight from '../articleComponents/ImageRight/ImageRight';
import PlainSection from '../articleComponents/PlainSection/PlainSection';

// import heroImg from '../../../../images/whatIsAnOfferwall_Hero_Img.png';
// import heroImgMobile from '../../../../images/whatIsAnOfferwall_Hero_Img_mobile.png';
// import onArticleImg from '../../../../images/whatIsAnOfferwall_Img.png';
// import onArticleImgMobile from '../../../../images/whatIsAnOfferwall_Img_mobile.png';
import styles from './WhatIsAnOfferwall.module.css';
import SectionListWithBulletPoints from '../articleComponents/SectionListWithBulletPoints/SectionListWithBulletPoints';

const article = {
  id: 2,
  title: 'What is an Offerwall?\nExploring the various types and benefits',
  heroImg: {
    desktop: '/images/whatIsAnOfferwall_Hero_Img.png',
    mobile: '/images/whatIsAnOfferwall_Hero_Img_mobile.png',
  },
  metadata: {
    readTime: '8 min',
    date: 'Jul 18 2023',
  },
  highlight: {
    body: 'Offerwalls provide a unique opportunity to engage users, drive revenue, and enhance user retention. In the realm of mobile app monetization, offerwalls have emerged as a popular and effective strategy for app monetization and retention. Offerwalls provide a unique opportunity to engage users, drive revenue, and enhance user retention. In this article, we dive into the concept of offerwalls, discussing what they are and exploring the different types of offerwalls available.',
  },
  content: [
    {
      type: 'plain',
      title: 'What is an Offerwall?',
      body: 'An offerwall is a monetization tool commonly found in mobile applications and websites that allows developers to present users with a selection of advertising offers, surveys, or other tasks in exchange for in-app rewards, virtual currency, or premium content. Offerwalls act as a bridge between advertisers and app users, enabling developers to generate revenue while providing users with value-added opportunities.',
    },
    {
      type: 'list',
      title: 'Different Types of Offerwalls:',
      subSections: [
        {
          title: 'In-App Offerwalls:',
          body: 'In-app offerwalls are the most common type of offerwalls and are integrated directly within a mobile application. They typically appear as a dedicated section or overlay within the app, presenting users with a list of available offers. Users can choose to engage with the offers that interest them, such as completing surveys, downloading apps, making purchases, or watching videos. In return, they earn virtual currency, in-app rewards, or other forms of valuable content.',
        },
        {
          title: 'Mobile Web Offerwalls:',
          body: 'Mobile web offerwalls function similarly to in-app offerwalls but are specifically designed for mobile websites. They allow website owners to monetize their mobile traffic by offering users a range of advertising offers, surveys, or tasks to complete. Mobile web offerwalls can be seamlessly integrated into the website, providing a user-friendly experience while driving monetization.',
        },
        {
          title: 'Video Ad Offerwalls:',
          body: 'Video ad offerwalls focus primarily on offering users video-based advertisements. These offerwalls provide users with the option to watch videos in exchange for in-app rewards or virtual currency. Video ad offerwalls are particularly effective in engaging users through interactive and engaging ad content, enhancing user experience and driving higher monetization potential.',
        },
        {
          title: 'Rewarded Offerwalls:',
          body: 'Rewarded offerwalls emphasize the concept of "rewarded advertising." They offer users the opportunity to engage with various offers and tasks in exchange for tangible rewards within the app. These rewards can include in-app currency, exclusive content, power-ups, level unlocks, or other virtual goods. Rewarded offerwalls create a win-win scenario by incentivizing users to interact with advertising content while providing valuable rewards.',
        },
        {
          title: 'Offerwall with Direct Payments:',
          body: 'In addition to virtual rewards, some offerwalls provide users with the option to earn real-world currency or make direct payments. These offerwalls typically include surveys, app installations, or other high-value tasks that provide users with monetary compensation. Users can accumulate earnings and choose to withdraw funds through various payment methods. Offerwalls with direct payments appeal to users who are looking for financial incentives while completing tasks.',
        },
      ],
    },
    {
      type: 'image',
      sources: {
        desktop: '/images/whatIsAnOfferwall_Img.png',
        mobile: '/images/whatIsAnOfferwall_Img_mobile.png',
      },
    },
    {
      type: 'listWithBulletPoints',
      title: 'Benefits of Offerwalls',
      subSections: [
        {
          title: 'Monetization',
          body: 'offerwalls offer a reliable and scalable revenue stream for app developers, by integrating advertising offers and tasks, developers can generate revenue through user engagement and conversions.',
        },
        {
          title: 'User Engagement',
          body: 'offerwalls enhance user engagement by providing interactive and rewarding experiences, users are incentivized to complete tasks or engage with offers, leading to increased app usage and retention rates.',
        },
        {
          title: 'Flexibility',
          body: "offerwalls offer a wide range of advertising formats and tasks, allowing developers to customize their monetization strategy according to their app's specific requirements and user demographics.",
        },
        {
          title: 'Diversification',
          body: 'offerwalls enable developers to diversify their revenue streams by partnering with different advertisers and incorporating various offer types, such as surveys, app installations, videos, or purchases.',
        },
        {
          title: 'Value for Users',
          body: 'offerwalls provide users with opportunities to access premium content, virtual currency, or other valuable rewards without having to make direct purchases, this enhances the overall user experience and encourages user loyalty.',
        },
      ],
    },
    {
      type: 'plain',
      body: 'Offerwalls have become a popular and effective monetization tool for mobile apps and websites. By presenting users with a range of advertising offers and tasks, offerwalls not only drive revenue for developers but also enhance user engagement and retention. Whether in-app or on mobile websites, offerwalls provide users with value-added opportunities and rewards, creating a mutually beneficial ecosystem for developers, advertisers, and app users. By leveraging the different types of offerwalls available, app developers can optimize their monetization strategy and create a thriving and sustainable mobile app business.',
    },
  ],
};

const WhatIsAnOfferwall = () => {
  const nextArticles = getNextArticles(article.id, articlesData);

  return (
    <>
      <article className={styles.articleWrapper}>
        <Hero
          title={article.title}
          readTime={article.metadata.readTime}
          date={article.metadata.date}
          imgdesktop={article.heroImg.desktop}
          imgmobile={article.heroImg.mobile}
        />

        <HighlightedSection body={article.highlight.body} />

        <div className={styles.sectionsWrapper}>
          {article.content.map((content) => {
            switch (content.type) {
              case 'plain': {
                return (
                  <div className={styles.pageSize_wrapper}>
                    <PlainSection title={content.title} body={content.body} />
                  </div>
                );
              }
              case 'image': {
                return <ImageRight sources={content.sources} />;
              }
              case 'list': {
                return (
                  <div className={styles.pageSize_wrapper}>
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
                  <div className={styles.pageSize_wrapper}>
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
        <h1 className={styles.whatToReadNext_title}>What to read next</h1>
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
    </>
  );
};

export default WhatIsAnOfferwall;
