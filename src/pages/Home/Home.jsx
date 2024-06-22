import React from 'react';
import styles from './Home.module.css';
import { Helmet } from 'react-helmet';
// import { helmetJsonLdProp } from 'react-schemaorg';
// import { useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import ReactGA from 'react-ga';
import Hero from '../../components/Hero/Hero.jsx';
import Second from '../../components/Second/Second.jsx';

const Home = () => {
  // CONTACT FORM POPUP

  
    /* SEO SECTION - DO NOT TOUCH */
  

  const articleStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Structured data for you',
    description: 'This is an article that demonstrates structured data.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/40/JSON-LD.svg',
    datePublished: new Date('2021-09-04T09:25:01.340Z').toISOString(),
    author: {
      '@type': 'Person',
      name: 'John Reilly',
      url: 'https://johnnyreilly.com/about',
    },
  };

  
    /* END OF SEO SECTION */
  

  return (
    <div className={styles.homeContainer}>
      {/* SEO SECTION - DO NOT TOUCH */}
      <Helmet>
        <meta charSet="utf-8" />
        <title>HOME PAGE</title>
        <link rel="canonical" href="https://www.smatched.io/" />
        <link rel="canonical" href="https://www.offerwallmonetization.com/" />
      </Helmet>

      <div style={{ display: 'none' }}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(articleStructuredData),
          }}
        />

        <h1>{articleStructuredData.headline}</h1>
        <h3>
          by{' '}
          <a href={articleStructuredData.author.url}>
            {articleStructuredData.author.name}
          </a>{' '}
          on {articleStructuredData.datePublished}
        </h3>

        <img
          style={{ width: '5em' }}
          alt="https://json-ld.org/ - Website content released under a Creative Commons CC0 Public Domain Dedication except where an alternate is specified., CC0, via Wikimedia Commons"
          src={articleStructuredData.image}
        />

        <p>{articleStructuredData.description}</p>

        <p>Take a look at the source of this page and find the JSON-LD!</p>
      </div>

      {/* END OF SEO SECTION */}

      {/* First Home */}

      <div className={styles.app}>
        <Hero
          backgroundImage="../../images/backgroundImgs/Background1.png"
          H1="Boost Monetization."
          H2="Retain Users."
          H3="MONETIZE"
          H4="Metered paywalls have an average conversion rate of just 0.36%. Smatched builds customized ‘earn to play’ offerwalls that boost monetization on your mobile app or website and helps you retain users by offering more choice."
          src="../../images/hero/heroImage.png" 
          alt="Description for image 1" 
          width="647px" 
          height="605px"
          showBot={true}
        />
        <Second/>
      </div>

      {/* First Home mobile responsiveness */}

      <div className={styles.mobileFirstHomeContainer}>
        <div className={styles.topFirst}>
          <div className={styles.mobileTopFirstBg}>
          </div>
        </div>
      </div>



    </div>
  );
};

export default Home;
