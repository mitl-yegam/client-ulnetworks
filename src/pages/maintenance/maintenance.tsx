import clsx from 'clsx';
import styles from './maintenance.module.scss';
import lanStyles from '../lan/lan.module.scss';
import enterpriseStyles from '../enterprise/enterprise.module.scss';
import BannerImage from '../../assets/images/banner/banner-maintenance.png';
import IconQuestionAnswer from '../../assets/images/icon/icon-question-answer.png';
import IconAccount from '../../assets/images/icon/icon-account.png';
import IconSearchList from '../../assets/images/icon/icon-search-list.png';
import IconWarehouse from '../../assets/images/icon/icon-warehouse.png';
import IconRoundedCheckWhite from '../../assets/images/icon/icon-rounded-check-white.png';
import IconArrowRight from '../../assets/images/icon/icon-arrow-right.png';
import TopBlueBanner from 'components/molecules/topBuleBanner';
import Ellipse from 'components/atoms/ellipse';

const Maintenance = () => {
  return (
    <>
      <TopBlueBanner>
        <h1 className='mb-5 mb-md-11'>통신유지보수</h1>
        <p className='mb-5 normal1'>
          고객의 환경에 맞게 <br className='d-md-none' />
          통신장비와 구내 통신설비를 <br className='d-md-none' />
          최적으로 이용할 수 있도록 관리하며, <br />
          운영하시는데 통산장비 장애로 <br className='d-md-none' />
          영업에 지장이 생기지 않도록 <br />
          신속하게 유지보수 해드립니다.
        </p>
      </TopBlueBanner>
      <section
        className={clsx('container-fluid', enterpriseStyles['banner-warpper'])}>
        <img src={BannerImage} width='100%' />
      </section>
      <section className='container pt-12 pb-22'>
        <div className='row gx-1 justify-center'>
          <div className={lanStyles['process-wrapper']}>
            <div className={lanStyles['process']}>
              <Ellipse icon={IconQuestionAnswer} size='small' />
              <p className='heading6 blue-100 text-center mt-4 mb-1'>
                고장접수
              </p>
              <ul className='normal4 gray-600 text-center'>
                <li>
                  고객으로부터 <br /> 불편사항 접수
                </li>
              </ul>
            </div>
          </div>
          <div
            className={clsx(lanStyles['arrow-wrapper'], 'd-none d-lg-block')}>
            <img src={IconArrowRight} alt='' />
          </div>
          <div className={lanStyles['process-wrapper']}>
            <div className={lanStyles['process']}>
              <Ellipse icon={IconAccount} size='small' />
              <p className='heading6 blue-100 text-center mt-4 mb-1'>
                인력배정
              </p>
              <ul className='normal4 gray-600 text-center'>
                <li>
                  사내 전문인력
                  <br />
                  일정 확보 및<br />
                  일정 조율
                </li>
              </ul>
            </div>
          </div>
          <div
            className={clsx(lanStyles['arrow-wrapper'], 'd-none d-lg-block')}>
            <img src={IconArrowRight} alt='' />
          </div>
          <div className={lanStyles['process-wrapper']}>
            <div className={lanStyles['process']}>
              <Ellipse icon={IconSearchList} size='small' />
              <p className='heading6 blue-100 text-center mt-4 mb-1'>
                고장분석
              </p>
              <ul className='normal4 gray-600 text-center'>
                <li>
                  시스템 점검 및<br />
                  필요한 장비와 부품
                  <br />
                  분석·확보
                  <br />
                </li>
              </ul>
            </div>
          </div>
          <div
            className={clsx(lanStyles['arrow-wrapper'], 'd-none d-lg-block')}>
            <img src={IconArrowRight} alt='' />
          </div>
          <div className={lanStyles['process-wrapper']}>
            <div className={lanStyles['process']}>
              <Ellipse icon={IconWarehouse} size='small' />
              <p className='heading6 blue-100 text-center mt-4 mb-1'>
                현장출동
              </p>
              <ul className='normal4 gray-600 text-center'>
                <li>
                  원격제어 및<br />
                  출동서비스 진행
                </li>
              </ul>
            </div>
          </div>
          <div
            className={clsx(lanStyles['arrow-wrapper'], 'd-none d-lg-block')}>
            <img src={IconArrowRight} alt='' />
          </div>
          <div className={lanStyles['process-wrapper']}>
            <div className={lanStyles['process']}>
              <Ellipse icon={IconRoundedCheckWhite} size='small' />
              <p className='heading6 blue-100 text-center mt-4 mb-1'>
                장애처리
              </p>
              <ul>
                <li className='normal4 gray-600 text-center'>불편사항 해결</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='row pt-15'>
          <div className='col'>
            <p className='normal2 text-center'>
              기업의 업무에 사용되는 통신 장비 및 전산기기는 성능유지와
              장애발생에 대비한
              <br />
              지속적인 관리가 필요합니다. <br />
              사무실마다 업무지원 담당자나 전산팀이 있지만 종류가 다른 모든
              기기를 직접 관리하기란 <br className='d-md-none' />
              사실상 어려우며,
              <br />
              특히 통신분야는 더욱이 전문분야이므로 통신유지보수 전문기업에
              맡기는 것이 <br />
              각종 장애 발생시 대처가 빠르고 편리합니다.
            </p>
          </div>
        </div>
      </section>
      <section className='container-fluid bg-gray-100'>
        <div className='container pt-17 pb-22'>
          <h2 className='blue-100 text-center mb-13'>서비스영역</h2>
          <div className='row'>
            <div
              className={clsx(
                styles['service-wrapper'],
                styles['service-1'],
                'col col-sm-6 col-md-3 col-lg-1',
              )}>
              <p className='heading4 text-center white'>
                긴급
                <br />
                장애처리
              </p>
            </div>
            <div
              className={clsx(
                styles['service-wrapper'],
                styles['service-2'],
                'col col-sm-6 col-md-3 col-lg-1',
              )}>
              <p className='heading4 text-center white'>
                랜공사
                <br />
                통신공사
              </p>
            </div>
            <div
              className={clsx(
                styles['service-wrapper'],
                styles['service-3'],
                'col col-sm-6 col-md-3 col-lg-1',
              )}>
              <p className='heading4 text-center white'>
                프리미엄
                <br />
                와이파이
                <br />
                구축
              </p>
            </div>
            <div
              className={clsx(
                styles['service-wrapper'],
                styles['service-4'],
                'col col-sm-6 col-md-3 col-lg-1',
              )}>
              <p className='heading4 text-center white'>
                통신망
                <br />
                분리
              </p>
            </div>
            <div
              className={clsx(
                styles['service-wrapper'],
                styles['service-5'],
                'col col-sm-6 col-md-3 col-lg-1',
              )}>
              <p className='heading4 text-center white'>
                서버랙 구축
                <br />
                서버 관리
              </p>
            </div>
            <div
              className={clsx(
                styles['service-wrapper'],
                styles['service-6'],
                'col col-sm-6 col-md-3 col-lg-1',
              )}>
              <p className='heading4 text-center white'>
                VPN/UTM
                <br />
                보안장비
                <br />
                구축 및 관리
              </p>
            </div>
            <div
              className={clsx(
                styles['service-wrapper'],
                styles['service-7'],
                'col col-md-6 col-lg-1',
              )}>
              <p className='heading4 text-center white'>
                네트워크
                <br />
                유지보수
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Maintenance;
