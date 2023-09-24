import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import {ProductList} from './ProductList';

require('jest-fetch-mock').enableMocks()

describe('ProductList', () => {
    beforeEach(() => {
        fetchMock.resetMocks()
      })

    test('renders product list title', () => {
      render(<ProductList />);
      const linkElement = screen.getByText(/Wine list/i);
      expect(linkElement).toBeInTheDocument();
    });
})
