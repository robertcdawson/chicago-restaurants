import { render, screen } from '@testing-library/react';
import App from './App';

test('renders page title', () => {
  render(<App />);
  const pageTitle = screen.getByRole('heading');
  expect(pageTitle).toBeInTheDocument();
  expect(pageTitle).toHaveTextContent('Find Food Fast in the Windy City');
});

test('renders search field', () => {
  render(<App />);
  const searchField = screen.getByRole('searchbox');
  expect(searchField).toBeInTheDocument();
});

test('renders search button', () => {
  render(<App />);
  const searchButton = screen.getByRole('button');
  expect(searchButton).toBeInTheDocument();
});

test('renders test search result', () => {
  render(<App />);
  const searchResultTest = screen.getByText('List Item 1');
  expect(searchResultTest).toBeInTheDocument();
});
