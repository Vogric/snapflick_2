interface HeaderProps {
  improveHomeUi: boolean;
  setImproveHomeUi: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header = ({
  improveHomeUi,
  setImproveHomeUi,
}: HeaderProps): JSX.Element => {
  return (
    <header onClick={(): void => setImproveHomeUi(!improveHomeUi)}>
      <h1 style={{ fontSize: '28px', cursor: 'pointer' }}>Snapflick</h1>
    </header>
  );
};

export default Header;
