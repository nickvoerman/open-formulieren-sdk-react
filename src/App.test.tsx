import { render, screen } from '@testing-library/react';
import App from './App';

test('renders open formulieren create react app', () => {
  render(<App />);
  const linkElement = screen.getByText(/Open Formulieren create react app/i);
  expect(linkElement).toBeInTheDocument();
});