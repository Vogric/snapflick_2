import styles from './Button.module.css';

interface ButtonProps {
  value: string;
  handleClick: () => void;
  isBackToHomeBtn?: boolean;
}

const Button = ({
  value,
  handleClick,
  isBackToHomeBtn,
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={isBackToHomeBtn ? styles.backToHomeBtn : styles.btn}
      onClick={handleClick}
    >
      <span>{value}</span>
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
