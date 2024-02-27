import React from 'react';
import ReadNextArticleCard from '../../ReadNextArticleCards/ReadNextArticleCards';
import { articlesData } from '../../utils/articlesData';
import { getNextArticles } from '../../utils/getNextArticles';
import Hero from '../articleComponents/Hero/Hero';
import HighlightedSection from '../articleComponents/HighlightedSection/HighlightedSection';
import SectionList from '../articleComponents/SectionList/SectionList';
import ImageRight from '../articleComponents/ImageRight/ImageRight';
import PlainSection from '../articleComponents/PlainSection/PlainSection';

// import heroImg from '../../../../images/ExploringOfferwall_Hero_Img.svg';
// import heroImgMobile from '../../../../images/allArticleleft2.png';
// import onArticleImg from '../../../../images/ExploringOfferwall_Img.png';
// import onArticleImgMobile from '../../../../images/ExploringOferwall_Img_mobile.png';

import styles from './ExploringOfferwallSolutions.module.css';
import SectionListWithBulletPoints from '../articleComponents/SectionListWithBulletPoints/SectionListWithBulletPoints';

const article = {
  id: 1,
  title:
    'Exploring Offerwall Solutions for Monetization and Retention: a Comparative Analysis',
  heroImg: {
    desktop: "/images/ExploringOfferwall_Hero_Img.svg",
    mobile: "/images/allArticleleft2.png",
  },
  metadata: {
    readTime: '7 min',
    date: 'Jul 18 2023',
  },
  highlight: {
    body: 'Mobile app companies are constantly seeking effective monetization strategies that not only generate revenue but also enhance user retention. Offerwalls enable app developers to leverage advertising offers, surveys, and other tasks to engage users and provide in-app rewards. In this article, we will delve into six prominent offerwall solutions — Smatched, Tapjoy, OfferToro, Offerwall, Revu, Wannads, Adscend Media, and AdGem — to analyze their strengths, weaknesses, and differences, ultimately assisting mobile app companies in making an informed choice for monetization and retention.',
  },
  content: [
    {
      type: 'list',
      title: '',
      subSections: [
        {
          title: 'Smatched',
          body: 'Smatched is a robust offerwall solution known for its user-friendly interface and seamless integration process. Its strength lies in providing a wide range of high-quality offers from reputable advertisers. Additionally, Smatched offers strong user support, prompt payment processing, and efficient fraud prevention measures. However, one potential weakness of Smatched is its limited global reach, which might restrict app companies targeting specific regions.',
        },
        {
          title: 'Tapjoy',
          body: "Tapjoy is a well-established player in the offerwall landscape, offering an extensive suite of monetization tools. Its key strength is the large and diverse pool of advertisers, ensuring a constant supply of engaging and rewarding offers. Tapjoy's strength also lies in its advanced targeting capabilities, enabling personalized offers for users. However, some app companies might find Tapjoy's integration process complex, requiring technical expertise and careful implementation.",
        },
        {
          title: 'OfferToro',
          body: 'OfferToro distinguishes itself through its innovative and user-friendly design, catering to both app developers and users. Its strength lies in the variety of offer types available, including surveys, app installations, and video ads. OfferToro also offers multi-platform support and smooth integration, ensuring a hassle-free experience for developers. However, one weakness of OfferToro is occasional discrepancies in offer tracking, which may impact accurate reward distribution.',
        },
        {
          title: 'Offerwall',
          body: "Offerwall is a versatile offerwall solution known for its flexibility and customization options. Its strength lies in providing developers with complete control over the design and placement of the offerwall, aligning seamlessly with their app's user experience. Offerwall also offers comprehensive analytics and reporting tools, enabling developers to monitor and optimize their monetization efforts. However, Offerwall's weakness lies in the relatively smaller pool of offers compared to some competitors, potentially impacting revenue generation.",
        },
        {
          title: 'Revu',
          body: 'Revu is a rapidly growing offerwall solution renowned for its global reach and diverse range of advertising partners. Its strength lies in its efficient payout system and robust fraud prevention measures, ensuring fair compensation and reliable offers. Revu also offers multilingual support, enabling developers to target a broader user base. However, one potential weakness of Revu is its less intuitive user interface, which might require some acclimatization for efficient navigation.',
        },
        {
          title: 'Wannads',
          body: 'Wannads sets itself apart by providing a wide range of offer types, including surveys, app installs, and game downloads. Its strength lies in its extensive inventory of offers, accommodating different app niches and user preferences. Wannads also offers excellent customer support and timely payments. However, one weakness of Wannads is its occasional discrepancy in offer availability across regions, limiting the options for developers targeting specific markets.',
        },
        {
          title: 'Adscend Media',
          body: 'Adscend Media offers a comprehensive suite of monetization solutions, including offerwalls. Its strength lies in its strong compliance with industry regulations and robust fraud detection mechanisms. Adscend Media also provides easy integration options and personalized support. However, one potential weakness of Adscend Media is the occasional limited availability of high-paying offers, which might impact revenue potential for some app companies.',
        },
        {
          title: 'AdGem',
          body: 'AdGem distinguishes itself by providing a streamlined user experience and an extensive catalog of high-quality offers. Its strength lies in its strong emphasis on user engagement and satisfaction, resulting in better retention rates. AdGem also offers quick integration and reliable payment processing. However, one weakness of AdGem is its relatively smaller pool of advertisers, potentially limiting the variety of offers available.',
        },
      ],
    },
    {
      type: 'image',
      sources: {
        desktop: "/images/ExploringOfferwall_Img.png",
        mobile: "/images/ExploringOferwall_Img_mobile.png",
      },
    },
    {
      type: 'plain',
      title: '',
      body: 'Selecting the right offerwall solution is crucial for mobile app companies seeking effective monetization and user retention. Each solution analyzed — Smatched, Tapjoy, OfferToro, Offerwall, Revu, Wannads, Adscend Media, and AdGem — comes with its unique strengths and weaknesses.\n\nApp companies should carefully evaluate their specific needs, such as global reach, offer variety, user interface, and technical requirements, to make an informed decision. By understanding the differences between these offerwall solutions, mobile app companies can optimize their monetization efforts and enhance user engagement, ultimately driving success in a competitive app market.',
    },
  ],
};

const ExploringOfferwallSolutions = () => {
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
                key={article._id}
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

export default ExploringOfferwallSolutions;
