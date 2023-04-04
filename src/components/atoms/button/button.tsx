import clsx from 'clsx';
import styles from './button.module.scss';
import { Props } from './button.type';

const Button = ({
  text,
  bgColor = 'bg-blue-100',
  color = 'white',
  onClick,
  style,
  textStyle,
  disabled,
}: Props) => {
  return (
    <button
      className={clsx(styles['root'], bgColor)}
      style={style}
      onClick={onClick}
      disabled={disabled}>
      {!!text && (
        <span className={clsx('heading6', color)} style={textStyle}>
          {text}
        </span>
      )}
    </button>
  );
};

export default Button;
