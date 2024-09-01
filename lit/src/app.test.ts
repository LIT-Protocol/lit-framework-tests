/** @jest-environment jsdom */
import { fixture, html } from '@open-wc/testing';
import '@testing-library/jest-dom';
import './app';

describe('App', () => {
  it('should display "Connecting to Lit..." and then "Connected!" when the button is clicked', async () => {
    const el = await fixture(html`<app></app>`);

    const button = el.shadowRoot?.querySelector('button');

    button?.click();

    expect(el.shadowRoot?.querySelector('div')).toHaveTextContent('Connecting to Lit...');
    await new Promise((resolve) => setTimeout(resolve, 5000));
    expect(el.shadowRoot?.querySelector('div')).toHaveTextContent('Connected!');
  });
});

// test('adds 1 + 2 to equal 3', () => {
//   expect(3).toBe(3);
// });