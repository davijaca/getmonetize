import { AppRoutes } from '../../../common/routes/AppRoutes';

// import article01 from '../../../images/exploringOfferwall_Card.png';
// import article02 from '../../../images/whatIsAnOfferwall_Card.png';
// import article03 from '../../../images/maximizingOfferwall_Card.png';

export const articlesData = [
  {
    id: 1,
    key: 'exploringofferwall',
    image: './images/exploringOfferwall_Card.png',
    title:
      'Exploring Offerwall Solutions for Monetization and Retention: a Comparative Analysis',
    infos: {
      readTime: '7 min',
      publishedDate: 'Jul 18 2023',
    },
    article: `Mobile app companies are constantly seeking effective monetization strategies that not only generate revenue but also enhance user retention. Offerwalls enable app developers to leverage advertising offers, surveys, and other tasks...`,
    readMoreUrl: AppRoutes.EXPLORINGOFFERWALL,
  },
  {
    id: 2,
    key: 'whatisanofferwall',
    image: './images/whatIsAnOfferwall_Card.png',
    title: 'What is an Offerwall?\nExploring the various types and benefits',
    infos: {
      readTime: '8 min',
      publishedDate: 'Jul 18 2023',
    },
    article: `Offerwalls provide a unique opportunity to engage users, drive revenue, and enhance user retention. In the realm of mobile app monetization, offerwalls have emerged as a popular and effective strategy for app monetization and retention...`,
    readMoreUrl: AppRoutes.WHATISANOFFERWALL,
  },
  {
    id: 3,
    key: 'maximizingOfferwall',
    image: './images/maximizingOfferwall_Card.png',
    title:
      'Maximizing Offerwall Monetization: Best Practices for Conversions and Retention',
    infos: {
      readTime: '8 min',
      publishedDate: 'Jul 18 2023',
    },
    article: `Leveraging the potential of offerwall monetization can be a game-changer for companies seeking to optimize conversions and increase user retention.In the dynamic landscape of mobile app monetization, offerwall monetization has emerged as a powerful...`,
    readMoreUrl: AppRoutes.MAXIMIZINGOFFERWALL,
  },
  //  DISABLED TEMPORARILY UNTIL MORE ARTICLES ARE PUBLISHED
  // {
  //   _id: 4,
  //   image: 'allArticleleft2.png',
  //   title: 'Article 4',
  //   infos: {
  //     readTime: '8 min',
  //     publishedDate: 'Jul 18 2023',
  //   },
  //   article: `Offerwalls provide a unique opportunity to engage users, drive revenue, and enhance user retention. In the realm of mobile app monetization, offerwalls have emerged as a popular and effective strategy for app monetization and retention...`,
  // },
  // {
  //   _id: 5,
  //   image: 'allArticleleft2.png',
  //   title: 'Article 5',
  //   infos: {
  //     readTime: '8 min',
  //     publishedDate: 'Jul 18 2023',
  //   },
  //   article: `Offerwalls provide a unique opportunity to engage users, drive revenue, and enhance user retention. In the realm of mobile app monetization, offerwalls have emerged as a popular and effective strategy for app monetization and retention...`,
  // },
  // {
  //   _id: 6,
  //   image: 'llArticleleft2.png',
  //   title: 'Article 6',
  //   infos: {
  //     readTime: '8 min',
  //     publishedDate: 'Jul 18 2023',
  //   },
  //   article: `Offerwalls provide a unique opportunity to engage users, drive revenue, and enhance user retention. In the realm of mobile app monetization, offerwalls have emerged as a popular and effective strategy for app monetization and retention...`,
  // },
  // {
  //   _id: 7,
  //   image: 'allArticleleft2.png',
  //   title: 'Article 7',
  //   infos: {
  //     readTime: '8 min',
  //     publishedDate: 'Jul 18 2023',
  //   },
  //   article: `Offerwalls provide a unique opportunity to engage users, drive revenue, and enhance user retention. In the realm of mobile app monetization, offerwalls have emerged as a popular and effective strategy for app monetization and retention...`,
  // },
];
