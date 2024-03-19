import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { render, screen, within } from '@testing-library/react';
import Article from './Article';
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

describe('<Article />', () => {
  it('Renders Article', async () => {
    render(
      <MemoryRouter initialEntries={['/article?name=exploringofferwall']}>
        <Article />
      </MemoryRouter>
    );

    /* Article Wrapper */
    const articleWrapper = screen.getByTestId('article-wrapper');
    expect(articleWrapper).toBeInTheDocument();

    /* Hero */
    const heroTitle = screen.getByRole('heading', {
      name: 'Exploring Offerwall Solutions for Monetization and Retention: a Comparative Analysis',
    });
    expect(heroTitle).toBeVisible();

    const heroBtn = screen.getByTestId('btn-goBack');
    expect(heroBtn).toBeVisible();

    /* Info section */
    const articleInfos = screen.getByTestId('article-infos');

    expect(within(articleInfos).getByText('7 min read')).toBeVisible();
    expect(within(articleInfos).getByText('Jul 18 2023')).toBeVisible();

    /* Highlighted-Grey section */
    const articleHighlighted = screen.getByTestId('article-highlighted');
    expect(within(articleHighlighted).getAllByRole('button').length).toBe(2);

    /* Article body section */
    const articleTextBody = screen.getByTestId('articleContent');
    expect(articleTextBody).toBeInTheDocument();
  });

  it('renders the next article cards', () => {
    render(
      <MemoryRouter initialEntries={['/article?name=exploringofferwall']}>
        <Article />
      </MemoryRouter>
    );

    /* Next Articles section */
    const whatToReadNextTitle = screen.getByTestId('whatToReadNext_title');
    expect(whatToReadNextTitle).toBeVisible();

    const nextArticleCards = screen.getAllByTestId('article-card');
    expect(nextArticleCards.length).toBe(2);

    //Card 1:
    expect(
      within(nextArticleCards.at(0)).getByText(/What is an Offerwall/)
    ).toBeVisible();
    expect(
      within(nextArticleCards.at(0)).getByText('8 min read')
    ).toBeVisible();
    expect(
      within(nextArticleCards.at(0)).getByText('Jul 18 2023')
    ).toBeVisible();

    // verify whether the first 20 chars are being rendered
    expect(
      within(nextArticleCards.at(0)).getByText(
        new RegExp(`^${articlesData[1].article.substring(0, 20)}`)
      )
    ).toBeVisible();

    // verify if ellipsis are being rendered at the end of the string
    expect(within(nextArticleCards.at(0)).getByText(/\.\.\.$/)).toBeVisible();
    expect(
      within(nextArticleCards.at(0)).getByRole('button', { name: 'READ MORE' })
    ).toBeVisible();

    // Card 2:
    expect(
      within(nextArticleCards.at(1)).getByText(
        'Maximizing Offerwall Monetization: Best Practices for Conversions and Retention'
      )
    ).toBeVisible();

    expect(
      within(nextArticleCards.at(1)).getByText('8 min read')
    ).toBeVisible();

    expect(
      within(nextArticleCards.at(1)).getByText('Jul 18 2023')
    ).toBeVisible();

    // verify whether the first 20 chars are being rendered
    expect(
      within(nextArticleCards.at(1)).getByText(
        new RegExp(`^${articlesData[2].article.substring(0, 20)}`)
      )
    ).toBeVisible();

    // verify if ellipsis are being rendered at the end of the string
    expect(within(nextArticleCards.at(1)).getByText(/\.\.\.$/)).toBeVisible();

    expect(
      within(nextArticleCards.at(1)).getByRole('button', { name: 'READ MORE' })
    ).toBeVisible();
  });

  it('User interaction with buttons (from page Exploring Offerwall)', async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter initialEntries={['/article?name=exploringofferwall']}>
        <Article />
      </MemoryRouter>
    );

    expect(
      screen.getAllByRole('button', { name: /read more/i }).at(0)
    ).toBeVisible();

    await user.click(
      screen.getAllByRole('button', { name: /read more/i }).at(0)
    );
    expect(
      screen.getByText(
        /what is an Offerwall\?\sExploring the various types and benefits/i
      )
    ).toBeInTheDocument();

    await user.click(
      screen.getAllByRole('button', { name: /read more/i }).at(1)
    );
    expect(
      screen.getByText(
        /Maximizing Offerwall Monetization: Best Practices for Conversions and Retention/i
      )
    ).toBeInTheDocument();
  });
});
