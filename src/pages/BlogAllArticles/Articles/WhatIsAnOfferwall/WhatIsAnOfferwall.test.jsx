import '@testing-library/jest-dom';
import { render, screen, within } from '@testing-library/react';
import WhatIsAnOfferwall from './MaximizingOferwall';
import { MemoryRouter } from 'react-router-dom';
import { articlesData } from '../../utils/articlesData';

// Function to replace react-truncate* with a html element
// *Since the testing library doesn't recognise the canvas tag where the truncate library draws the text
jest.mock('react-text-truncate', () => {
  return ({ text, element }) => {
    const Element = element;
    return <Element>{text}</Element>;
  };
});

describe('<WhatIsAnOfferwall />', () => {
  it('Renders what to read next cards section', async () => {
    render(
      <MemoryRouter>
        <WhatIsAnOfferwall />
      </MemoryRouter>
    );

    //Article Title
    const articleTitle = screen.getByText(
      'What is an Offerwall? Exploring the various types and benefits'
    );
    expect(articleTitle).toBeVisible();

    //Info section:
    const articleInfos = screen.getByTestId('article-infos');

    expect(within(articleInfos).getByText('8 min read')).toBeVisible();
    expect(within(articleInfos).getByText('Jul 18 2023')).toBeVisible();

    //Highlighted-Grey section
    const articleHighlighted = screen.getByTestId('article-highlighted');
    expect(within(articleHighlighted).getAllByRole('button').length).toBe(2);

    //Article body section
    // const articleTextBody = screen.getByTestId('article-textBody');
  });

  it('renders the next article cards', () => {
    render(
      <MemoryRouter>
        <WhatIsAnOfferwall />
      </MemoryRouter>
    );

    //Next Articles section title:
    const whatToReadNextTitle = screen.getByText('What to read next');
    expect(whatToReadNextTitle).toBeVisible();

    const nextArticleCards = screen.getAllByTestId('article-card');
    expect(nextArticleCards.length).toBe(2);

    //Card 1:
    expect(within(nextArticleCards.at(0)).getByText('Article 2')).toBeVisible();
    expect(
      within(nextArticleCards.at(0)).getByText('8 min read')
    ).toBeVisible();
    expect(
      within(nextArticleCards.at(0)).getByText('Jul 18 2023')
    ).toBeVisible();
    expect(
      within(nextArticleCards.at(0)).getByText(
        new RegExp(`^${articlesData[0].article.substring(0, 20)}`)
      )
    ).toBeVisible();
    expect(within(nextArticleCards.at(0)).getByText(/\.\.\.$/)).toBeVisible();
    expect(
      within(nextArticleCards.at(0)).getByRole('button', { name: 'READ MORE' })
    ).toBeVisible();

    // Card 2:
    expect(within(nextArticleCards.at(1)).getByText('Article 3')).toBeVisible();

    expect(
      within(nextArticleCards.at(1)).getByText('8 min read')
    ).toBeVisible();

    expect(
      within(nextArticleCards.at(1)).getByText('Jul 18 2023')
    ).toBeVisible();

    // verify whether the first 20 chars are being rendered
    expect(
      within(nextArticleCards.at(1)).getByText(
        new RegExp(`^${articlesData[1].article.substring(0, 20)}`)
      )
    ).toBeVisible();

    // verify if ellipsis are being rendered at the end of the string
    expect(within(nextArticleCards.at(1)).getByText(/\.\.\.$/)).toBeVisible();

    expect(
      within(nextArticleCards.at(1)).getByRole('button', { name: 'READ MORE' })
    ).toBeVisible();
  });
});

// Tests with user interaction with the button Read More at What to Read Next cards in the future,
// when the buttons redirect the user to other page
