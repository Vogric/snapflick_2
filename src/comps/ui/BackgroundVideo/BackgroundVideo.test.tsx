import { render, screen } from '@testing-library/react';
import styles from './BackgroundVideo.module.css';
import BackgroundVideo from './BackgroundVideo';

describe('BackgroundVideo component', () => {
  it('should render the video element with the correct attributes', () => {
    render(<BackgroundVideo />);
    const video = screen.getByTestId('background-video');
    expect(video).toHaveProperty('className', styles.backgroundVideo);
    expect(video.getAttribute('autoPlay')).toBe('');
    expect(video.getAttribute('loop')).toBe('');
  });
});
