import { render, screen } from '@testing-library/react';
import App from './App';

describe('renders app', () => {
  it ('can render header', () => {
    render(<App />);
    const headerElement = screen.getByText(/Demo App/i);
    expect(headerElement).toBeInTheDocument();
  });
});
