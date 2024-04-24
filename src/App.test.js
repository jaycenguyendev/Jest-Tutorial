import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  // to render the App component within a virtual testing environment. 
  render(<App />);
  const myApp = screen.getByTestId('myApp')
  expect(myApp).toBeInTheDocument();
});
