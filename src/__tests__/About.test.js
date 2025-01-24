import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import About from '../components/About';

test('renders About component', () => {
  const { getByText } = render(<About />);
  expect(getByText(/About Me/i)).toBeInTheDocument();
});