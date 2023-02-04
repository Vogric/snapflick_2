import styles from './Button.module.css';

interface ButtonProps {
  contentValue: string;
  handleClick: () => void;
}

const Button = ({ contentValue, handleClick }: ButtonProps): JSX.Element => {
  return (
    <button className={styles.btn} onClick={handleClick}>
      <span> {contentValue}</span>
      <svg
        viewBox="-5 -5 110 110"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M0,0 C0,0 100,0 100,0 C100,0 100,100 100,100 C100,100 0,100 0,100 C0,100 0,0 0,0" />
      </svg>
    </button>
  );
};

export default Button;
