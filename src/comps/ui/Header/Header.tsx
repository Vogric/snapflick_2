import { FC } from 'react';

interface HeaderProps {
  onClick: () => void;
}

const Header: FC<HeaderProps> = ({ onClick }): JSX.Element => {
  return (
    <header onClick={onClick}>
      <h1 style={{ cursor: 'pointer', fontSize: '28px' }}>Snapflick</h1>
    </header>
  );
};

export default Header;
