import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

import {ProductList} from './ProductList';


const server = setupServer(
  rest.get('http://0.0.0.0:5005/wines', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([])
    );
  }),
);

describe('ProductList', () => {
    beforeAll(() => server.listen());
    afterAll(() => server.close());

    test('renders product list title', () => {
      render(<ProductList />);
      const linkElement = screen.getByText(/Wine list/i);
      expect(linkElement).toBeInTheDocument();
    });

    test('displays data from API', async () => {
      render(<ProductList />);
      expect(await screen.findByText('Château ZZZ 2022')).toBeInTheDocument();
      expect(await screen.findByText('Château XXX 2020')).toBeInTheDocument();
      expect(await screen.findByText('Château YYY 2021')).toBeInTheDocument();
    });

    test.skip('would test filters', async () => {
      const getProductsFilteredNotMockedCorrectlyYet = jest.spyOn(server, 'get');

      render(<ProductList />);
      const inputMinPrice = screen.getByTestId('input-minPrice');
      expect(inputMinPrice).toBeInTheDocument();
      
      fireEvent.change(inputMinPrice, {target: {value: '10'}});

      const inputMaxPrice = screen.getByTestId('input-maxPrice');
      expect(inputMaxPrice).toBeInTheDocument();

      fireEvent.change(inputMaxPrice, {target: {value: '11'}});

      fireEvent.click(screen.getByText('Ok'));

      expect(getProductsFilteredNotMockedCorrectlyYet).toHaveBeenCalled();
    });
})
