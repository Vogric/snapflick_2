import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import Button from './Button';

const handleClick = jest.fn();
const mockValue = 'Click Me';
const setup = (
  customProps: { value: string; isBackToHomeBtn?: boolean } = {
    value: mockValue,
  }
): void => {
  render(<Button handleClick={handleClick} {...customProps} />);
};

test('Button component', () => {
  setup();

  const button = screen.getByText(mockValue);
  userEvent.click(button);
  expect(handleClick).toHaveBeenCalled();
});

test('Button component with isBackToHomeBtn prop', () => {
  setup({ value: mockValue, isBackToHomeBtn: true });

  const button = screen.getByText(mockValue);
  userEvent.click(button);
  expect(handleClick).toHaveBeenCalled();
});
