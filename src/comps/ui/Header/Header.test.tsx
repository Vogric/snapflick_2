import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Header from './Header';

const onClickMock = jest.fn();
const setup = (): void => {
  render(<Header onClick={onClickMock} />);
};

describe('Header component', () => {
  beforeEach(() => {
    setup();
  });
  it('renders correctly', () => {
    expect(screen.getByText('Snapflick')).toBeInTheDocument();
  });

  it('calls setImproveHomeUi on header click', () => {
    userEvent.click(screen.getByText('Snapflick'));
    expect(onClickMock).toHaveBeenCalled();
  });
});
