import styles from './shadowBox.module.scss';
import { Props } from './shadowBox.type';

const ShadowBox = ({ children }: Props) => {
  return <div className={styles['root']}>{children}</div>;
};

export default ShadowBox;
