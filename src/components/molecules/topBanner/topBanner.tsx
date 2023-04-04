import styles from './topBanner.module.scss';
import clsx from 'clsx';
import HeadSet from 'assets/images/icon/icon-headset.png';
import BannerTop from 'assets/images/banner/banner-top.png';
import ShadowBox from 'components/atoms/shadowBox';
import companyInfo from 'pages/main/company.json';

const TopBanner = () => {
  return (
    <div
      className={clsx(styles['root'], 'container-fluid', 'd-center')}
      style={{ backgroundImage: `url(${BannerTop})` }}>
      <div className='container d-center flex-column'>
        <div className='row bold1 white mb-5 mb-md-11'>
          <p className='bold1 text-center'>
            전문적인 기술과 노하우로 <br className='d-md-none' /> 책임 시공하는{' '}
            <span className='text-bolder'>(주)예감</span>
          </p>
        </div>
        <ShadowBox>
          <div className={clsx(styles['call-box'])}>
            <div className='mr-4'>
              <img src={HeadSet} alt='전화번호' />
            </div>
            <span className='bold2'>
              <a
                className='white'
                href={`tel:${companyInfo.phone.replace(/[^\d]/g, '')}`}>
                {companyInfo.phone}
              </a>
            </span>
          </div>
        </ShadowBox>
      </div>
    </div>
  );
};

export default TopBanner;
