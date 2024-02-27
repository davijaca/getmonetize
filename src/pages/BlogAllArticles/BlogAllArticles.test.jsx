import '@testing-library/jest-dom';
import { render, screen, within } from '@testing-library/react';
import BlogAllArticles from './BlogAllArticles';

// Function to replace react-truncate* with a html element
// *Since the testing library doesn't recognise the canvas tag where the truncate library draws the text
jest.mock('react-text-truncate', () => {
  return ({ text, element }) => {
    const Element = element;
    return <Element>{text}</Element>;
  };
});

const articlesData = [
  {
    _id: 1,
    image: 'allArticleleft2.png',
    title: 'Article 1',
    infos: {
      readTime: '8 min',
      publishedDate: 'Jul 18 2023',
    },
    article: `Lorem ipsum 1...`,
  },
  {
    _id: 2,
    image: 'allArticleleft2.png',
    title: 'Article 2',
    infos: {
      readTime: '10 min',
      publishedDate: 'Ago 18 2023',
    },
    article: `Offerwalls Lorem ipsum 2...`,
  },
  {
    _id: 3,
    image: 'allArticleleft2.png',
    title: 'Article 3',
    infos: {
      readTime: '12 min',
      publishedDate: 'Sep 18 2023',
    },
    article: `Offerwalls provide Lorem ipsum 3...`,
  },
  {
    _id: 4,
    image: 'allArticleleft2.png',
    title: 'Article 4',
    infos: {
      readTime: '14 min',
      publishedDate: 'Out 18 2023',
    },
    article: `Lorem ipsum 4`,
  },
  {
    _id: 5,
    image: 'allArticleleft2.png',
    title: 'Article 5',
    infos: {
      readTime: '16 min',
      publishedDate: 'Nov 18 2023',
    },
    article: `Offerwalls Lorem ipsum 5...`,
  },
  {
    _id: 6,
    image: 'llArticleleft2.png',
    title: 'Article 6',
    infos: {
      readTime: '18 min',
      publishedDate: 'Dez 18 2023',
    },
    article: `Offerwalls provide Lorem ispum 6...`,
  },
  {
    _id: 7,
    image: 'allArticleleft2.png',
    title: 'Article 7',
    infos: {
      readTime: '20 min',
      publishedDate: 'Jan 18 2023',
    },
    article: `Lorem ipsum 7...`,
  },
];

describe('<BlogAllArticles />', () => {
  it('Renders Blog all Articles', async () => {
    render(
      <BlogAllArticles
        allArticles={articlesData}
        articlesPerPage={3}
        initialPage={2}
      />
    );

    const allArticleCards = screen.getAllByTestId('article-card');
    expect(allArticleCards.length).toBe(3);

    //Card 1 page 2:
    expect(within(allArticleCards.at(0)).getByText('Article 4')).toBeVisible();
    expect(within(allArticleCards.at(0)).getByText('14 min')).toBeVisible();
    expect(
      within(allArticleCards.at(0)).getByText('Out 18 2023')
    ).toBeVisible();

    console.log(articlesData[3].article);
    expect(
      within(allArticleCards.at(0)).getByText(articlesData[3].article)
    ).toBeVisible();

    // Card 2 page 2:
    expect(within(allArticleCards.at(1)).getByText('Article 5')).toBeVisible();
    expect(within(allArticleCards.at(1)).getByText('16 min')).toBeVisible();
    expect(
      within(allArticleCards.at(1)).getByText('Nov 18 2023')
    ).toBeVisible();
    expect(
      within(allArticleCards.at(1)).getByText(articlesData[4].article)
    ).toBeVisible();

    // Card 3 page 3:
    expect(within(allArticleCards.at(2)).getByText('Article 6')).toBeVisible();
    expect(within(allArticleCards.at(2)).getByText('18 min')).toBeVisible();
    expect(
      within(allArticleCards.at(2)).getByText('Dez 18 2023')
    ).toBeVisible();
    expect(
      within(allArticleCards.at(2)).getByText(articlesData[5].article)
    ).toBeVisible();
  });
});

// Tests with user interaction with the button Read More in the future,
// when the buttons redirect the user to other page
