import { FC } from 'react';

const Footer: FC = (): JSX.Element => {
  return (
    <footer
      style={{
        bottom: '0',
        fontSize: '10px',
        left: '0',
        margin: 'auto',
        position: 'absolute',
        right: '0',
      }}
    >
      <span>© 2023 Snapflick, Inc.</span>
    </footer>
  );
};

export default Footer;
