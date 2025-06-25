import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from "./App"
describe('MyComponent', () => {
  it('navigates to the correct route on button click', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    // Simulate a click on a Link or button that triggers navigation
   
    // Assert that the navigation occurred (e.g., by checking for text on the new page)
    expect(screen.getByText(/username/i)).toBeInTheDocument();
  });
});