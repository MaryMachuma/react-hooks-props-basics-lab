import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../components/App';  // Adjust path to match your project structure

test('renders App component', () => {
  const { getByText } = render(<App />);
  expect(getByText(/Web Developer/i)).toBeInTheDocument();
});