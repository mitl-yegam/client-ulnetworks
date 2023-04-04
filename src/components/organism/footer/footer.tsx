import clsx from 'clsx';
import { Link } from 'react-router-dom';
import styles from './footer.module.scss';
import logoWoman from 'assets/images/logo/logo-woman-enterprise.png';
import logoDisabled from 'assets/images/logo/logo-disabled-enterprise.png';
import companyInfo from 'pages/main/company.json';

const Footer = () => {
  return (
    <footer className={clsx(styles['root'], 'container-fluid')}>
      <div className={clsx('container', 'py-md-15')}>
        <div className='row'>
          <div className='col col-md-8 col-lg-9'>
            <strong className='heading6'>(주) 예감</strong>
            <p className='my-4'>
              <span className='mr-4'>
                대표자명: {companyInfo.representative}
              </span>
              <br className='d-md-none' />
              <span>
                전화번호:{' '}
                <a
                  className='white'
                  href={`tel:${companyInfo.phone.replace(/[^\d]/g, '')}`}>
                  {companyInfo.phone}
                </a>
              </span>
              <br className='d-md-none' />
              <span className='d-none mx-4 d-md-inline'>|</span>
              <span className='d-none d-md-inline'>
                이메일:{' '}
                <a className='white' href={`mailto:${companyInfo.email}`}>
                  {companyInfo.email}
                </a>
              </span>
              <span className='mx-4 d-none d-md-inline'>|</span>
              <span className={styles['nowrap']}>
                주소: {companyInfo.address}
              </span>
            </p>
            <p className='my-4'>
              <span>업무 시간</span>
              <br />
              <strong className='heading6 mt-1'>
                {companyInfo.officeHours}
              </strong>
            </p>
            <p className='mt-10'>Copyright ⓒ 주식회사 예감</p>
          </div>
          <div className={clsx(styles['ul-wrapper'], 'col-md-4', 'col-lg-3')}>
            <ul className='mr-20'>
              <li>
                <Link to={'/lan'}>랜공사</Link>
              </li>
              <li>
                <Link to={'/cctv'}>CCTV</Link>
              </li>
              <li>
                <Link to={'/maintenance'}>통신유지보수</Link>
              </li>
              <li>
                <Link to={'/subscription-enterprise'}>인터넷가입</Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link to={'/company-yegam'}>회사소개</Link>
              </li>
              <li>
                <Link to={'/qna'}>Q&A</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className='row gy-0'>
          <div className='col col-md-8 col-lg-9'></div>
          <div className={clsx(styles['logo-wrapper'], 'col-md-4', 'col-lg-3')}>
            <span className='mr-8'>
              <img src={logoWoman} alt='여성 기업' />
            </span>
            <span>
              <img src={logoDisabled} alt='장애인 기업' />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
