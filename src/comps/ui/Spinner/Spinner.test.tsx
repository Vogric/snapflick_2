import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Spinner from './Spinner';

const setup = (): void => {
  render(<Spinner />);
};

describe('Spinner component', () => {
  beforeEach(() => {
    setup();
  });

  it('renders the spinner class', () => {
    const spinner = screen.getByTestId('spinner');
    expect(spinner).toBeInTheDocument();
  });
});
