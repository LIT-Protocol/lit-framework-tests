import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './app/page';

jest.mock('@lit-protocol/lit-node-client', () => {
  return {
    LitNodeClient: jest.fn().mockImplementation(() => {
      return {
        connect: jest.fn().mockResolvedValue(undefined),
      };
    }),
  };
});

describe('App', () => {
  it('should display "Connecting to Lit..." and then "Connected!" when the button is clicked', async () => {
    render(<App />);

    const button = screen.getByText(/Instantiate Lit/i);

    fireEvent.click(button);

    expect(await screen.findByText('Connecting to Lit...')).toBeInTheDocument();
    expect(await screen.findByText('Connected!', {}, { timeout: 10000 })).toBeInTheDocument();
  });
});
