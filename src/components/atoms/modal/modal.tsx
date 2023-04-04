import styles from './modal.module.scss';
import { Props } from './modal.type';
import close from 'assets/images/icon/icon-close.svg';

const Modal = ({ open, children, handler, style }: Props) => {
  if (open) {
    return (
      <>
        <div className={styles['root']} style={style}>
          <div className={styles['close']} onClick={handler}>
            <img src={close} alt='닫기' />
          </div>
          {children}
        </div>
        <div className={styles['backdrop']} onClick={handler} />
      </>
    );
  } else {
    return null;
  }
};

export default Modal;
