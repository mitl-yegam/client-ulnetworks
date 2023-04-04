import clsx from 'clsx';
import Certification1 from '../../assets/images/etc/certification-1.png';
import Certification2 from '../../assets/images/etc/certification-2.png';
import Certification3 from '../../assets/images/etc/certification-3.png';
import Certification4 from '../../assets/images/etc/certification-4.png';
import Certification5 from '../../assets/images/etc/certification-5.png';
import LogoKica from '../../assets/images/logo/logo-kica.png';
import IconRoundedCheck from '../../assets/images/icon/icon-rounded-check.svg';
import LogoExample from '../../assets/images/logo/logo-example.png';
import TopTitle from 'components/molecules/topTitle';
import styles from './company.module.scss';
import companyData from './company.json';
import shortid from 'shortid';
import TopBlueBanner from 'components/molecules/topBuleBanner';
import { useEffect, useState } from 'react';
import API from 'api';

const clientImg: { [key: string]: string } = {
  logo1: LogoExample,
};

const Company = () => {
  const [sharingList, setSharingList] = useState<{ [key: string]: any }[]>([]);
  const [clientList, setClientList] = useState<{ [key: string]: any }[]>([]);

  useEffect(() => {
    const data = {
      pageName: 'introduction',
      pageDetailName: 'sharing',
    };
    const clientData = {
      pageName: 'introduction',
      pageDetailName: 'client',
    };
    API.get({ url: '/media', data }).then(({ data }) => {
      setSharingList(data);
    });
    API.get({ url: '/media', data: clientData }).then(({ data }) => {
      setClientList(data);
    });
  }, []);

  return (
    <>
      <section className='container py-0'>
        <TopTitle title='(주) 예감' borderBlue={false} />
      </section>
      <TopBlueBanner>
        <div className='container white text-center'>
          <h1 className='bold1'>
            전문적인 기술과 노하우로 <br className='d-md-none' />
            책임 시공하는 <br />
            종합 정보통신 공사업체
          </h1>
        </div>
      </TopBlueBanner>
      <section className='container'>
        <div className='d-center flex-column py-12'>
          <img src={IconRoundedCheck} />
          <h2 className='blue-100 mt-3 mb-12 text-center'>
            정보통신공사 면허를 가진 기업인지 <br className='d-md-none' />꼭
            확인하세요!
          </h2>
          <div>
            <img src={LogoKica} width='100%' />
          </div>
          <p className='bold3 text-center mt-12'>
            예감은 정보통신공사협회에 등록된 <br className='d-md-none' />{' '}
            정보통신공사 면허를 가진
            <br className='d-md-none' /> 전문 기업입니다.
            <br />
            오랜 경험을 바탕으로 <br className='d-md-none' />
            항상 고객의 입장에서 생각하고,
            <br />
            고객의 환경에 맞추어 저렴한 가격으로 <br className='d-md-none' />{' '}
            최상의 네트워크 환경을 구축합니다.
          </p>
        </div>
        <div className='row d-center'>
          <div className='col-6 col-sm-4 col-md-2'>
            <img
              src={Certification1}
              width='100%'
              alt='장애인기업확인서 이미지'
            />
          </div>
          <div className='col-6 col-sm-4 col-md-2'>
            <img src={Certification2} width='100%' alt='사업자등록증 이미지' />
          </div>
          <div className='col-6 col-sm-4 col-md-2'>
            <img
              src={Certification3}
              width='100%'
              alt='정보통신공사업등록증 이미지'
            />
          </div>
          <div className='col-6 col-sm-4 col-md-2'>
            <img
              src={Certification4}
              width='100%'
              alt='여성기업확인서 이미지'
            />
          </div>
          <div className='col-6 col-sm-4 col-md-2'>
            <img
              src={Certification5}
              width='100%'
              alt='중소기업확인서 이미지'
            />
          </div>
        </div>
        <div className='pt-10 pt-md-20 pb-10 pb-md-25'>
          <h2 className='blue-100 mb-5 mb-md-12 text-center'>주요고객사</h2>
          <div className='row justify-center mb-9'>
            {clientList.map((item) => {
              return (
                <div
                  key={shortid.generate()}
                  className={clsx(
                    styles['logo-wrapper'],
                    'col-6 col-sm-4 col-md-2',
                  )}>
                  <img src={clientImg[item.imgId]} alt={item.alt} />
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className='container-fluid bg-gray-100 py-12 py-md-25'>
        <div className='container d-center flex-column'>
          <h2 className='blue-100 mt-3 mb-12'>따뜻한 나눔</h2>
          <p className='bold3 text-center'>
            예감과 함께 하신다면, <br />
            사랑이 필요한 이웃에게 따뜻한 손을 내밀어 주시고 계신 것입니다.
          </p>
        </div>
        <div className='container mt-3 mt-md-12'>
          <div className='row'>
            {sharingList.map((item) => {
              return (
                <div
                  key={shortid.generate()}
                  className='col col-md-6 col-lg-4 d-center flex-column'>
                  <div className='pb-6'>
                    <img src={item.url} width='100%' alt={item.title} />
                    <p className='mt-5 bold3 white-pre-wrap'>{item.title}</p>
                    <p className='white-pre-wrap'>{item.subTitle}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Company;
