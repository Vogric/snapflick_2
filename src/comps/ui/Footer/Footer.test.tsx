import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

const setup = (): void => {
  render(<Footer />);
};

describe('Footer component', () => {
  beforeEach(() => {
    setup();
  });

  it('renders correctly', () => {
    expect(screen.getByText('© 2023 Snapflick, Inc.')).toBeInTheDocument();
  });
});
