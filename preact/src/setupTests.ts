import '@testing-library/jest-dom';

import { h } from 'preact';

declare global {
  interface Window {
	h: typeof h;
  }
}

window.h = h;