import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Links from '../components/Links';

test('renders Links component', () => {
  const { getByText } = render(
    <Links 
      github="https://github.com/test" 
      linkedin="https://linkedin.com/test" 
    />
  );
  expect(getByText('GitHub')).toBeInTheDocument();
  expect(getByText('LinkedIn')).toBeInTheDocument();
});