import { useState } from 'react';

import { navPath } from '../layout/data';
import styles from './header.module.scss';
import Logo from 'assets/images/logo/logo-yegam.png';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

const Header = () => {
  const [toggle, setToggle] = useState<boolean>();
  const handleOnClick = () => setToggle(!toggle);
  const handleNavItem = () => {
    if (window.innerWidth > 768) {
      return;
    }
    handleOnClick();
    window.scrollTo({ behavior: 'smooth', top: 0 });
  };

  return (
    <header className={clsx(styles['root'], 'container-fluid')}>
      <div
        className={clsx(
          styles['nav-wrapper'],
          'container',
          'py-lg-4',
          'py-0',
          'py-md-4',
        )}>
        <nav className='row align-items-center justify-between gy-0 flex-column flex-md-row'>
          <Link className={styles['logo-link']} to={'/'}>
            <img className='mr-md-25' src={Logo} alt='yegam' />
          </Link>
          <div className={clsx(styles['hamburger-menu-wrapper'], 'd-md-none')}>
            <input type='checkbox' onClick={handleOnClick} checked={toggle} />
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul
            className={clsx(
              styles['ul-wrapper'],
              toggle ? styles['active'] : '',
            )}>
            {navPath.map((item) => {
              return (
                <li className='black' key={item.path} onClick={handleNavItem}>
                  <Link to={item.path}>{item.name}</Link>
                </li>
              );
            })}
          </ul>
          <div
            className={toggle ? styles['backdrop'] : ''}
            onClick={handleOnClick}
          />
        </nav>
      </div>
    </header>
  );
};

export default Header;
