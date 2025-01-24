import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../components/Home';

test('renders Home component', () => {
  const { getByText } = render(<Home />);
  expect(getByText(/Web Developer/i)).toBeInTheDocument();
});