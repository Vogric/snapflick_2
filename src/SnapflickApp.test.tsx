import { render } from '@testing-library/react';
import SnapflickApp from './SnapflickApp';

describe('SnapflickApp component', () => {
  it('renders without crashing', () => {
    render(<SnapflickApp />);
  });
});
