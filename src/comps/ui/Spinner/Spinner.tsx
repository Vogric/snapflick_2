import { FC } from 'react';
import styles from './Spinner.module.css';

const Spinner: FC = (): JSX.Element => (
  <div className={styles.spinner} data-testid="spinner" />
);

export default Spinner;
