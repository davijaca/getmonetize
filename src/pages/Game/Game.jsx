import React from 'react';
import { Helmet } from 'react-helmet';
// import { helmetJsonLdProp } from 'react-schemaorg';
// import { useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import ReactGA from 'react-ga';
import Container from '../../components/Container/Container.jsx';
import Hero from '../../components/Hero/Hero.jsx';
import Second from '../../components/Second/Second.jsx';

const Game = () => {
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
      <Container>
      {/* SEO SECTION - DO NOT TOUCH */}
      <Helmet>
        <meta charSet="utf-8" />
        <title>GAME MONETIZATION</title>
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
          backgroundImage="../../images/backgroundImgs/Background2.png"
          H1="<b>Enhance</b> your game"
          H2="monetization model."
          H3="GAME INDUSTRY"
          H4="Give players more choice when it comes to monetization. While gaming payment gateways are a necessary evil for many gaming companies, many gamers are not <br />willing to pay for games upfront."
          src="../../images/hero/heroGame.png" 
          alt="Description for image 1" 
          width="auto" 
          height="654px"
          showBot={false}
          imgPaddingTop = '45px'
        />
        <Second
        backgroundColor="white"/>
      </div>



      </Container>
    </>
  );
};

export default Game;
