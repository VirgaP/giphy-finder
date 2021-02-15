import React from 'react';
import { render, screen, waitFor, cleanup } from '@testing-library/react';
import App from '../views/App';
import mockedAxios from 'axios';

afterEach(cleanup);
test('mocking axios request', async () => {
jest.spyOn(mockedAxios, 'get').mockResolvedValueOnce({});
await waitFor(() => {
  render(<App />);
  const element = screen.getByText(/Oops! no results/i);
  expect(element).toBeInTheDocument();
});
});