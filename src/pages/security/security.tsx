import clsx from "clsx";
import { Link } from "react-router-dom";
import enterpriseStyles from "../enterprise/enterprise.module.scss";
import styles from "./security.module.scss";
import BannerImage from "assets/images/banner/banner-security.png";
import IconProtect from "assets/images/icon/icon-protect.png";
import IconScorecard from "assets/images/icon/icon-scorecard.png";
import IconGuarantee from "assets/images/icon/icon-guarantee.png";
import IconTools from "assets/images/icon/icon-tools.png";
import KtLogo from "assets/images/logo/logo-kt.svg";
import SecurityMapImage from "assets/images/etc/security-map.png";
import TopBlueBanner from "components/molecules/topBuleBanner";

const Security = () => {

  return (
    <>
    <section className="container py-0">
      <div className={clsx(enterpriseStyles['tab'], 'py-5 py-md-7')}>
        <Link to="/subscription-enterprise">
          <span className="normal2 gray-300">기업용 인터넷 가입</span>
        </Link>
        <div className="normal2 gray-300 mx-3 mx-md-6">|</div>
        <span className="normal2 blue-100 text-bolder">전용회선</span>
      </div>
    </section>
    <TopBlueBanner>
      <h1 className="mb-5 mb-md-11">전용회선 가입</h1>
      <p className={'mb-5 normal1'}>
      완벽한 보안성능을 갖춘 24시간 <span className={styles['dot-position']}>단<span className={styles['dot']}>.</span></span><span className={styles['dot-position']}>독<span className={styles['dot']}>.</span></span>회선 <br/>
      원거리 두 지점을 하나의 LAN 구간처럼 음성·데이터를 전송할 수 있도록 연결해 줍니다.
      </p>
      <p className="normal1">빠른 전송과 보안이 필요한<br className="d-md-none"/> 기업 · 공공기관 · 금융기관에 추천드립니다.</p>
    </TopBlueBanner>
    <section className={clsx('container-fluid', enterpriseStyles['banner-warpper'])}>
      <img src={BannerImage} width="100%"/>
    </section>
    <section className="py-5 py-md-12">
      <div className="container py-6">
        <div className="row flex-between">
          <div className="col col-sm-6 col-lg-3">
            <div className={enterpriseStyles['round-wrapper']}>
              <img src={IconProtect} className="mb-3 d-none d-md-block"/>
              <p className="heading6 blue-100">탁월한 <br/>보안과 안전</p>
            </div>
          </div>
          <div className="col col-sm-6 col-lg-3">
            <div className={clsx(enterpriseStyles['round-wrapper'], enterpriseStyles['round-blue'])}>
              <img src={IconScorecard} className="mb-3 d-none d-md-block"/>
              <p className="heading6 white">상담부터 가입,<br/>설치, 유지보수까지</p>
            </div>
          </div>
          <div className="col col-sm-6 col-lg-3">
            <div className={enterpriseStyles['round-wrapper']}>
              <img src={IconGuarantee} className="mb-3 d-none d-md-block"/>
              <p className="heading6 blue-100">100% 광케이블로<br/>고품질의 서비스 제공</p>
            </div>
          </div>
          <div className="col col-sm-6 col-lg-3">
            <div className={clsx(enterpriseStyles['round-wrapper'], enterpriseStyles['round-blue'])}>
              <img src={IconTools} className="mb-3 d-none d-md-block"/>
              <p className="heading6 white">불편 접수시 빠른 조치 가능</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="container-fluid bg-gray-100 py-15 py-md-25">
      <h2 className="blue-100 text-center mb-0 mb-md-12">왜<img src={KtLogo}/>인가요?</h2>
      <div className="container">
        <div className="row gx-1">
          <div className="col col-md-6">
            <div className={styles['card-wrapper']}>
              <p className="bold3 text-center mb-4">국내사업자 중 유일하게 자가 광 케이블을 통한<br/><span className="blue-200">전국 서비스 커버리지 제공</span></p>
              <p className="bold5 gray-500 text-center">
              지구 둘레의 17개에 해당하는 약 68만km의 광케이블을 보유하고 있습니다.<br/>
              이를 통해 사업자 중 유일하게 자가 광케이블을 통한<br/>
              전국 서비스 커버리지를 제공합니다.<br/> 
              </p>
            </div>
          </div>
          <div className="col col-md-6">
            <div className={styles['card-wrapper']}>
              <p className="bold3 text-center mb-4">국내 유일 Full-Mesh형 전송망을 통해<br/><span className="blue-200">최고의 서비스 연속성 보장</span></p>
              <p className="bold5 gray-500 text-center">
                주요 통신 권영간에 Full-Mesh 형태의 전송망을 운영함으로써<br/>
                전송, 경로, 국사, 장비 등의 장애 시에 즉각적인 우회경로를<br/>
                제공하여 중단 없는 서비스를 제공합니다.
              </p>
            </div>
          </div>
        </div>
        <div className="row p-4">
          <div className={styles['card-wrapper']}>
            <img src={SecurityMapImage} width="100%"/>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Security;