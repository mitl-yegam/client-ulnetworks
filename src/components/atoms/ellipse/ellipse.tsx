import { Props } from './ellipse.type';
import styles from './ellipse.module.scss';
import clsx from 'clsx';

const Ellipse = ({ icon, text, size }: Props) => {
  return (
    <div className={clsx(styles['root'], styles[size])}>
      <img src={icon} alt={text} />
      {!!text && <div>{text}</div>}
    </div>
  );
};

export default Ellipse;
