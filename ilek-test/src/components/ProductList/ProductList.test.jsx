import { render, screen } from '@testing-library/react';
import {ProductList} from './ProductList';

test('renders product list title', () => {
  render(<ProductList />);
  const linkElement = screen.getByText(/Wine list/i);
  expect(linkElement).toBeInTheDocument();
});
