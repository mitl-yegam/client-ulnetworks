import clsx from "clsx";
import styles from "./cctv.module.scss";
import enterpriseStyles from "../enterprise/enterprise.module.scss";
import BannerImage from "assets/images/banner/banner-cctv.png";
import Person1 from "assets/images/etc/person-1.png";
import Person2 from "assets/images/etc/person-2.png";
import Person3 from "assets/images/etc/person-3.png";
import Person4 from "assets/images/etc/person-4.png";
import TopBlueBanner from "components/molecules/topBuleBanner";

const Cctv = () => {

  return (
    <>
      <TopBlueBanner>
          <h1 className="mb-5 mb-md-11">CCTV</h1>
          <p className="mb-5 normal1">
            다양한 환경에 최적화 된<br className="d-md-none"/> 고화질 영상으로 <br/>언제 어디서나 실시간으로<br className="d-md-none"/> 확인할 수 있습니다.
          </p>
          <p className="normal2">신규설치 · 이전설치  · 추가설치 모두 가능합니다</p>
      </TopBlueBanner>
      <section className={clsx('container-fluid', enterpriseStyles['banner-warpper'])}>
        <img src={BannerImage} width="100%"/>
      </section>
      <section className="py-5 py-md-12">
      <div className="container py-6">
        <div className="row flex-between">
          <div className="col col-sm-6 col-lg-3">
            <div className={enterpriseStyles['round-wrapper']}>
              <p className="bold4 blue-100">사각지대 최소화<br/>설계 및 시공</p>
            </div>
          </div>
          <div className="col col-sm-6 col-lg-3">
            <div className={clsx(enterpriseStyles['round-wrapper'], enterpriseStyles['round-blue'])}>
              <p className="bold4 white">녹화기 · 카메라<br/>점검 및 유지보수 관리</p>
            </div>
          </div>
          <div className="col col-sm-6 col-lg-3">
            <div className={enterpriseStyles['round-wrapper']}>
              <p className="bold4 blue-100">노후된<br/>녹화기 및 카메라<br/>교체시공</p>
            </div>
          </div>
          <div className="col col-sm-6 col-lg-3">
            <div className={clsx(enterpriseStyles['round-wrapper'], enterpriseStyles['round-blue'])}>
              <p className="bold4 white">인터넷 기반<br/>안정적인 모바일 ·PC<br/>모니터링 환경 구성</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="container-fluid bg-gray-100 py-15 py-md-25">
      <div className="container">
      <h2 className="blue-100 text-center mb-6">이런 분들께 추천드립니다!</h2>
      <div className="row">
        <div className={clsx(styles['bubble-wrapper'], 'col col-md-6 col-lg-3')}>
            <img src={Person1}/>
            <div className={clsx(styles['bubble'])}>
              <h4 className="mt-6 text-bold">
                사무실 보안이 필요한<br/>
                데이터, 장비등이<br/>
                걱정되요!
              </h4>
            </div>
        </div>
        <div className={clsx(styles['bubble-wrapper'], 'col col-md-6 col-lg-3')}>
            <img src={Person2}/>
            <div className={clsx(styles['bubble'])}>
              <h4 className="mt-6 text-bold">
                화재·도난 등<br/>
                신속 대처할 수 있는 <br/>
                환경이 필요해요
              </h4>
            </div>
        </div>
        <div className={clsx(styles['bubble-wrapper'], 'col col-md-6 col-lg-3')}>
            <img src={Person3}/>
            <div className={clsx(styles['bubble'])}>
              <h4 className="mt-6 text-bold">
                외부에서<br/>
                사업장 내의 각종 상황을<br/>
                모니터링 하고 싶어요!<br/>
              </h4>
            </div>
        </div>
        <div className={clsx(styles['bubble-wrapper'], 'col col-md-6 col-lg-3')}>
            <img src={Person4}/>
            <div className={clsx(styles['bubble'])}>
              <h4 className="mt-6 text-bold">
                맞춤형 제품, 솔루션으로<br/>
                보안의  편리함을<br/>
                느끼고 싶어요!
              </h4>
            </div>
        </div>
      </div>
      </div>
    </section>
    </>
  )
}

export default Cctv;