import { render, screen } from '@testing-library/react';
import ReactDOM from 'react-dom';
import App from './App';

test('renders title', () => {
  render(<App />);
  const titleElement = screen.getByText(/GIF FINDER/i);
  expect(titleElement).toBeInTheDocument();
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
