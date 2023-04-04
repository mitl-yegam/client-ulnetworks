import styles from "./enterprise.module.scss";
import IconAccounting from "assets/images/icon/icon-accounting.png";
import IconCloudBroadcasting from "assets/images/icon/icon-cloud-broadcasting.png";
import IconMagneticCard from "assets/images/icon/icon-magnetic-card.png";
import IconMonitor from "assets/images/icon/icon-monitor.png";
import RecommendImage1 from "assets/images/etc/recommend-case-1.png";
import RecommendImage2 from "assets/images/etc/recommend-case-2.png";
import RecommendImage3 from "assets/images/etc/recommend-case-3.png";
import BannerImage from "assets/images/banner/banner-enterprise.png";
import { Link } from "react-router-dom";
import clsx from "clsx";
import TopBlueBanner from "components/molecules/topBuleBanner";

const Enterprise = () => {
  return (
    <>
    <section className="container py-0">
      <div className={clsx(styles['tab'], 'py-5 py-md-7')}>
        <Link to="/subscription-enterprise">
          <span className="normal2 blue-100 text-bolder">기업용 인터넷 가입</span>
        </Link>
        <div className="normal2 mx-3 mx-md-6 gray-300">|</div>
        <Link to="/subscription-security">
          <span className="normal2 gray-300">전용회선</span>
        </Link>
      </div>
    </section>
    <TopBlueBanner>
      <h1 className="mb-5 mb-md-11">기업용 인터넷 가입</h1>
      <p className="mb-5 normal1">
      기업 인터넷과 전화를 <br className="d-md-none"/>안정적이면서 저렴하게<br className="d-none d-md-block"/> 고객의 <br className="d-none d-md-none"/>환경에 맞춤으로 권해드립니다.
      </p>
      <p className="normal2">KT · SK· LG 3사 모두 가능</p>
    </TopBlueBanner>
    <section className={clsx('container-fluid', styles['banner-warpper'])}>
      <img src={BannerImage} width="100%"/>
    </section>
    <section className="py-5 py-md-12">
      <div className="container py-6">
        <div className="row flex-between">
          <div className="col col-sm-6 col-lg-3">
            <div className={styles['round-wrapper']}>
              <img src={IconMonitor} className="mb-3 d-none d-md-block"/>
              <p className="mb-2 heading6 blue-100">PC대수 무제한</p>
              <p className="gray-500">· 회선당 추가단말</p>
              <p className="gray-500">· 접속제한 없는 서비스 제공</p>
            </div>
          </div>
          <div className="col col-sm-6 col-lg-3">
            <div className={clsx(styles['round-wrapper'], styles['round-blue'])}>
              <img src={IconMagneticCard} className="mb-3 d-none d-md-block"/>
              <p className="mb-2 heading6 white">저렴한 이용요금</p>
              <p className="gray-200">최저 요금으로</p>
              <p className="gray-200">고정·유동 IP 제공</p>
            </div>
          </div>
          <div className="col col-sm-6 col-lg-3">
            <div className={styles['round-wrapper']}>
              <img src={IconCloudBroadcasting} className="mb-3 d-none d-md-block"/>
              <p className="mb-2 heading6 blue-100">최적의 인터넷속도</p>
              <p className="gray-500">사업 환경에 맞는</p>
              <p className="gray-500">최적의 인터넷 속도 선택</p>
            </div>
          </div>
          <div className="col col-sm-6 col-lg-3">
            <div className={clsx(styles['round-wrapper'], styles['round-blue'])}>
              <img src={IconAccounting} className="mb-3 d-none d-md-block"/>
              <p className="mb-2 heading6 white">맞춤형 컨설팅 제공</p>
              <p className="gray-200">상담부터 가입까지</p>
              <p className="gray-200">한번에</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="container-fluid bg-gray-100 py-15 py-md-25">
      <div className="container">
      <h2 className="blue-100 text-center mb-10">이런 분들께 추천드립니다!</h2>
      <div className="row">
        <div className="col col-md-6 col-lg-4">
          <div className={styles['recommend-wrapper']}>
            <img src={RecommendImage1} width="100%" />
            <p className="bold4 gray-800 mt-3">
            전용회선 이용요금이 <br/> 부담스러운 <br/> 중소규모 사업장
            </p>
          </div>
        </div>
        <div className="col col-md-6 col-lg-4">
          <div className={styles['recommend-wrapper']}>
            <img src={RecommendImage2} width="100%" />
            <p className="bold4 gray-800 mt-3">
            사업 환경에 따라<br/> 다수의 PC에 IP서비스 이용이 <br/> 필요한 사업장
            </p>
          </div>
        </div>
        <div className="col col-md-6 col-lg-4">
          <div className={styles['recommend-wrapper']}>
            <img src={RecommendImage3} width="100%" />
            <p className="bold4 gray-800 mt-3">
            업무상 대용량 자료 전송이 <br/> 많은 사업장
            </p>
          </div>
        </div>
      </div>
      </div>
    </section>
    </>
  )
}

export default Enterprise;