import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

test('expect dark mode toggler to engage dark mode', () => {
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

it('Alex Morgan renders', () => {
  const {findByText} = render(<App />)
  findByText(/alex\ morgan/i);
  findByText(/united\ states/i);
})

// it('Alex Morgan renders', () => {
//   const {getByDisplayValue} = render(<App />)
//   const textValue = 'Alex Morgan';
//   getByDisplayValue(textValue);
// })