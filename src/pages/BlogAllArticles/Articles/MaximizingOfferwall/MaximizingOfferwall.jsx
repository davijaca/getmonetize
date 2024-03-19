import React from 'react';
import ReadNextArticleCard from '../../ReadNextArticleCards/ReadNextArticleCards';
import { articlesData } from '../../utils/articlesData';
import { getNextArticles } from '../../utils/getNextArticles';
import Hero from '../articleComponents/Hero/Hero';
import HighlightedSection from '../articleComponents/HighlightedSection/HighlightedSection';
import SectionList from '../articleComponents/SectionList/SectionList';
import ImageRight from '../articleComponents/ImageRight/ImageRight';
import PlainSection from '../articleComponents/PlainSection/PlainSection';
import SectionListWithBulletPoints from '../articleComponents/SectionListWithBulletPoints/SectionListWithBulletPoints';

// import heroImg from '../../../../images/MaximizingOfferwall_Hero_Img.png';
// import heroImgMobile from '../../../../images/MaximizingOfferwall_Hero_Img_mobile.png';
// import onArticleImg from '../../../../images/MaximizingOfferwall_Img.svg';
// import onArticleImgMobile from '../../../../images/MaximizingOfferwall_Img_mobile.png';

import styles from './MaximizingOfferwall.module.css';

const article = {
  id: 3,
  title:
    'Maximizing Offerwall Monetization: Best Practices for Conversions and Retention',
  heroImg: {
    desktop: '/images/MaximizingOfferwall_Hero_Img.png',
    mobile: '/images/MaximizingOfferwall_Hero_Img_mobile.png',
  },
  metadata: {
    readTime: '8 min',
    date: 'Jul 18 2023',
  },
  highlight: {
    body: 'Leveraging the potential of offerwall monetization can be a game-changer for companies seeking to optimize conversions and increase user retention. \br In the dynamic landscape of mobile app monetization, offerwall monetization has emerged as a powerful tool for app developers to drive revenue and enhance user engagement. Leveraging the potential of offerwalls can be a game-changer for companies seeking to optimize conversions and increase user retention. In this article, we will explore the best practices around offerwall monetization and offerwall integration, uncovering strategies to maximize conversions and foster long-term user loyalty.',
  },
  content: [
    {
      type: 'listWithBulletPoints',
      title: 'Offerwall Integration: Seamlessness is Key',
      body: 'To ensure the success of offerwall monetization, the integration process should be seamless and intuitive. Here are some key steps to follow:',
      subSections: [
        {
          title: 'User-Centric Design',
          body: "Integrate the offerwall seamlessly into the app's user interface, aligning it with the overall design and user experience. A visually appealing and user-friendly offerwall ensures a smooth and intuitive navigation experience.",
        },
        {
          title: 'Contextual Placement',
          body: 'Strategically position the offerwall within the app, considering user behavior and app flow. Placing the offerwall at natural breakpoints, such as after a level completion or within a virtual store, increases the chances of user engagement.',
        },
        {
          title: 'Clear Call-to-Action ',
          body: 'Employ persuasive and concise call-to-action (CTA) buttons or banners to encourage users to engage with the offerwall. CTAs like "Earn rewards" or "Unlock premium content" should be prominent and visually appeali',
        },
      ],
    },
    {
      type: 'listWithBulletPoints',
      title: 'Optimize Offer Selection: Quality and Relevance Matter',
      body: 'Selecting the right mix of offers is crucial for optimizing conversions and user retention. Consider the following strategies:',
      subSections: [
        {
          title: 'Offer Relevance',
          body: "Curate a diverse range of offers that align with your app's target audience and demographics. Users are more likely to engage with offers that resonate with their interests and needs.",
        },
        {
          title: 'Quality Assurance',
          body: 'Partner with reputable and reliable advertising networks or offer providers. Ensuring the offers are legitimate, trustworthy, and free from misleading content is vital to build user trust and maintain a positive user experience.',
        },
        {
          title: 'Offer Variety',
          body: 'Introduce a mix of offer types, including surveys, app installations, video ads, and in-app purchases. Offering a variety of options caters to different user preferences and increases the likelihood of engagement.',
        },
      ],
    },
    {
      type: 'listWithBulletPoints',
      title: 'Reward System Optimization: Balance and Incentivize',
      body: 'The success of offerwall monetization hinges on striking the right balance in the reward system. Consider the following strategies:',
      subSections: [
        {
          title: 'Value and Transparency',
          body: 'Clearly communicate the value users can gain from engaging with offers on the offerwall. Highlight the rewards, virtual currency, or premium content they can earn, emphasizing the benefits of participation.',
        },
        {
          title: 'Incremental Rewards',
          body: 'Implement a tiered or progressive reward system that encourages users to engage with more offers. Gradually increasing the rewards or unlocking higher-value rewards as users complete more tasks fosters motivation and retention.',
        },
        {
          title: 'Limited-Time Promotions',
          body: 'Introduce time-limited promotions or bonuses to create a sense of urgency and entice users to engage with the offerwall. Limited-time offers can create a buzz and encourage users to take immediate action.',
        },
      ],
    },
    {
      type: 'listWithBulletPoints',
      title: 'Personalization and Targeting: Enhance User Experience',
      body: 'Personalization and targeted offers play a crucial role in driving conversions and user engagement. Consider the following strategies:',
      subSections: [
        {
          title: 'User Segmentation',
          body: 'Analyze user data and behavior to segment your user base. Tailor the offers presented on the offerwall based on user preferences, demographics, and previous engagement patterns.',
        },
        {
          title: 'Behavioral Triggers ',
          body: 'Utilize user behavior data to trigger offerwall prompts at the right moments. For example, if a user frequently makes in-app purchases, offering a relevant offer to earn virtual currency might be more appealing.',
        },
        {
          title: 'A/B Testing',
          body: 'Continuously test different offer configurations, placements, and rewards to identify the most effective strategies for your app. A/B testing helps optimize the offerwall experience and maximize conversions.',
        },
      ],
    },
    {
      type: 'image',
      sources: {
        desktop: '/images/MaximizingOfferwall_Img.svg',
        mobile: '/images/MaximizingOfferwall_Img_mobile.png',
      },
    },
    {
      type: 'plain',
      title: '',
      body: 'Offerwall monetization presents an immense opportunity for mobile app companies to generate revenue and foster user engagement. By seamlessly integrating the offerwall, optimizing offer selection, fine-tuning the reward system, and personalizing the user experience, companies can increase conversions and enhance user retention. Implementing these best practices ensures a positive user experience, builds trust, and creates a win-win scenario for app developers, advertisers, and users. Embrace the potential of offerwall monetization, and unlock the key to sustainable app monetization success.',
    },
  ],
};

const MaximizingOfferwall = () => {
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

export default MaximizingOfferwall;
