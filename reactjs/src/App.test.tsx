import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from "./App";

describe('App', () => {
  it('should display "Connecting to Lit..." and then "Connected!" when the button is clicked', async () => {
    render(<App />);

    const button = screen.getByText(/Instantiate Lit/i);

    fireEvent.click(button);

    expect(await screen.findByText('Connecting to Lit...')).toBeInTheDocument();
    expect(await screen.findByText('Connected!', {}, { timeout: 10000 })).toBeInTheDocument();
  });
});
