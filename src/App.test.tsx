import { render, screen } from '@testing-library/react';
import App from './App';
import { HomeScreen } from './Components/HomeScreen/HomeScreen';


test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Discover/i);
  expect(linkElement).toBeInTheDocument();
});

