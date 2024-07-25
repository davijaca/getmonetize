import React from 'react';
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
    <>
      {/* Container Cannot be applied before the background of the page! */}
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

      <div className="app">
        <Hero
          backgroundImage="../../images/backgroundImgs/Background1.png"
          H1="<b>Boost Monetization.</b> Retain Users."
          // H2="Retain Users."
          H3="MONETIZE"
          H4="Metered paywalls have an average conversion rate of just 0.36%. Smatched builds customized ‘earn to play’ offerwalls that boost monetization on your mobile app or website and helps you retain users by offering more choice."
          src="../../images/hero/heroHome.png"
          alt="Description for image 1"
          width="647px"
          height="605px"
          showBot={true}
        />
        <Second
          backgroundColor="#1E1E1E"
          H2="Monetize provides an alternative Subscription Model"
          H3="Paywalls are a great revenue option for many businesses but unfortunately, making users pay means your revenue potential is capped. Businesses that offer more than one monetization model retain <b>50% more users</b>.</br></br>
          What if your users could earn their way past a paywall without having to open their wallet?"
          B1="Implement Optimized Offerwall"
          B2="Users earn rewards"
          B3="Users can use rewards as in-app</br>currency"
          B4="You increase revenue & retention"
          width="150px"
          src1="../../images/second/secondHome1.svg"
          src2="../../images/second/secondHome2.svg"
          src3="../../images/second/secondHome3.svg"
          src4="../../images/second/secondHome4.svg"
        />
      </div>
    </>
  );
};

export default Home;
