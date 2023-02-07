import styles from './Spinner.module.css';

const Spinner = (): JSX.Element => (
  <div className={styles.spinner} data-testid="spinner" />
);

export default Spinner;
