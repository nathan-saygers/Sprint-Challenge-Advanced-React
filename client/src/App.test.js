import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

test('expect dark mode toggler to engage dark mode', () => {
  // let darkToggle = 
  const {getByTestId} = render(<App />);
  const darkToggle = getByTestId('dark-toggle');
  fireEvent.click(darkToggle);
})

it('Player intro renders', () => {
  const {getByText} = render(<App />)
  getByText(/and\ here\ they\ are/i);
})

it('Navbar header renders', () => {
  const {getByText} = render(<App />)
  getByText(/world\ cup\ players/i)
})
