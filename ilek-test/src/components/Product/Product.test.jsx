import { render, screen } from '@testing-library/react';
import {Product} from './Product';

const fakeProduct= {
    name: 'product name',
    appellation: 'product appellation',
    vintage: 'product vintage',
    type: 'product type',
    price: 12,
    averageRating: 4.5,
    imageUrl: 'product image url',
}

test('renders product name', () => {
  render(<Product product={fakeProduct} />);
  const linkElement = screen.getByText(/product name/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders product appellation', () => {
  render(<Product product={fakeProduct} />);
  const linkElement = screen.getByText(/product appellation/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders product type', () => {
  render(<Product product={fakeProduct} />);
  const linkElement = screen.getByText(/product type/i);
  expect(linkElement).toBeInTheDocument();
});
