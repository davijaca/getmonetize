import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Pagination from './Pagination';

describe('<Pagination />', () => {
  it('Renders pagination buttons', async () => {
    render(<Pagination currentPage={1} numberOfPages={2} />);

    expect(screen.getAllByRole('button', { name: /[1-9]+/ })).toHaveLength(2);

    const btnCurrentPage = screen.getByRole('button', { name: '1' });
    expect(btnCurrentPage).toBeVisible();

    const pageTwo = screen.getByRole('button', { name: '2' });
    expect(pageTwo).toBeVisible();
  });

  it('User interaction mock page 1', async () => {
    const handlePaginationChange = jest.fn();
    render(
      <Pagination
        currentPage={1}
        numberOfPages={2}
        onPaginationChange={handlePaginationChange}
      />
    );

    const btnCurrentPage = screen.getByRole('button', { name: '1' });
    await userEvent.click(btnCurrentPage);

    expect(handlePaginationChange).toBeCalledWith(1);
  });

  it('User interaction mock page 2', async () => {
    const handlePaginationChange = jest.fn();
    render(
      <Pagination
        currentPage={1}
        numberOfPages={2}
        onPaginationChange={handlePaginationChange}
      />
    );

    const pageTwo = screen.getByRole('button', { name: '2' });
    await userEvent.click(pageTwo);

    expect(handlePaginationChange).toBeCalledWith(2);
  });

  it('User interaction mock button left', async () => {
    const handlePaginationChange = jest.fn();
    render(
      <Pagination
        currentPage={2}
        numberOfPages={2}
        onPaginationChange={handlePaginationChange}
      />
    );

    const btnLeft = screen.getByRole('button', {
      name: /go-to-previous-page/i,
    });
    await userEvent.click(btnLeft);

    expect(handlePaginationChange).toBeCalledWith(1);
  });

  it('User interaction mock button right', async () => {
    const handlePaginationChange = jest.fn();
    render(
      <Pagination
        currentPage={1}
        numberOfPages={2}
        onPaginationChange={handlePaginationChange}
      />
    );

    const btnRight = screen.getByRole('button', {
      name: /go-to-next-page/i,
    });
    await userEvent.click(btnRight);

    expect(handlePaginationChange).toBeCalledWith(2);
  });
});
