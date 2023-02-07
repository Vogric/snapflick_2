interface HeaderProps {
  onClick: () => void;
}

const Header = ({ onClick }: HeaderProps): JSX.Element => {
  return (
    <header onClick={onClick}>
      <h1 style={{ fontSize: '28px', cursor: 'pointer' }}>Snapflick</h1>
    </header>
  );
};

export default Header;
