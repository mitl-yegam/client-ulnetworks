import TopBanner from 'components/molecules/topBanner';
import mainExample1 from 'assets/images/etc/main-example-1.png';
import mainExample2 from 'assets/images/etc/main-example-2.png';
import mainExample3 from 'assets/images/etc/main-example-3.png';
import mainExample4 from 'assets/images/etc/main-example-4.png';
import mainExample5 from 'assets/images/etc/main-example-5.png';
import mainExample6 from 'assets/images/etc/main-example-6.png';
import bestReason1 from 'assets/images/etc/main-best-reason-1.png';
import bestReason2 from 'assets/images/etc/main-best-reason-2.png';
import bestReason3 from 'assets/images/etc/main-best-reason-3.png';
import magnetic from 'assets/images/icon/icon-magnetic-card.png';
import thumbsUp from 'assets/images/icon/icon-thumbs-up.png';
import tools from 'assets/images/icon/icon-tools.png';
import verified from 'assets/images/icon/icon-verified-account.png';
import arrowLeft from 'assets/images/icon/icon-arrow-left.svg';
import clsx from 'clsx';
import styles from './main.module.scss';
import Ellipse from 'components/atoms/ellipse';
import { Link } from 'react-router-dom';
import Button from 'components/atoms/button';
import Modal from 'components/atoms/modal';
import { useState, useCallback, FormEvent, useEffect } from 'react';
import companyInfo from './company.json';
import { addAutoDashPhone } from 'utils';
import API from 'api';
import shortid from 'shortid';

const Main = () => {
  const [open, setOpen] = useState(false); // 상담신청 완료 모달
  const [termsOpen, setTermsOpen] = useState(false); // 개인정보 수집 동의 모달
  const [termsAgree, setTermsAgree] = useState(false); // 개인정보 수집 동의 여부
  const [fastQuoteForm, setFastQuoteForm] = useState({
    name: '',
    phone: '',
    email: '',
    requirement: '',
  }); // 빠른견적 문의 Form
  const [siteList, setSiteList] = useState<{ [key: string]: any }[]>([]);

  // 상담신청 완료 modal handler
  const handleModal = () => {
    setOpen((prevState) => !prevState);
  };

  // 자세히 보기 modal handler
  const handleTermsModal = (terms?: boolean) => {
    setTermsOpen((prevState) => !prevState);

    if (typeof terms === 'boolean' && terms != undefined) {
      handleTermsAgree(terms);
    }
  };
  // 개인정보수집 동의 여부
  const handleTermsAgree = useCallback(
    (isAgree: boolean) => {
      setTermsAgree(isAgree);

      // 동의함 선택 & 개인정보수집 모달이 닫혀있으면 열기
      if (isAgree && !termsOpen) {
        setTermsOpen((prevState) => !prevState);
      }
    },
    [termsOpen],
  );

  // 상담신청
  const onSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!termsAgree) {
        return alert('개인정보 수집 동의함을 선택해 주세요.');
      }

      const formData = new FormData();
      formData.append('name', fastQuoteForm.name);
      formData.append('phone', fastQuoteForm.phone);
      formData.append('email', fastQuoteForm.email);
      formData.append('requirement', fastQuoteForm.requirement);
      const dispatch = {
        url: '/estimate',
        data: formData,
      };

      await API.post(dispatch).then(() => {
        // 입력 폼 초기화
        setFastQuoteForm({
          name: '',
          phone: '',
          email: '',
          requirement: '',
        });
        setTermsAgree(false);
        handleModal();
      });
    },
    [open, fastQuoteForm, termsAgree],
  );

  // input handler
  const handleChange = ({
    target: { value, id },
  }: React.ChangeEvent<HTMLInputElement>) => {
    if (id === 'phone') {
      value = addAutoDashPhone(value);
    }
    setFastQuoteForm((prevState) => ({ ...prevState, [id]: value }));
  };

  useEffect(() => {
    const data = {
      pageName: 'home',
      pageDetailName: 'site',
    };
    API.get({ url: '/media', data }).then(({ data }) => {
      setSiteList(data);
    });
  }, []);

  return (
    <div className={styles['root']}>
      <TopBanner />
      <div className='container'>
        <h2 className='bold2 text-center my-10 my-md-12'>
          내부 유·무선 인터넷 환경이 필요한 모든 곳에{' '}
          <br className='d-none d-md-block' />
          <span className='blue-100 text-bolder'>
            정확하고 신속하게 시공하는 랜공사 전문 기업
          </span>{' '}
          입니다.
        </h2>
        <ul className={clsx(styles['ul-wrapper'], 'row', 'gx-1')}>
          <li className='col-xs-6 col-md-4 col-lg-2'>
            <img src={mainExample1} alt='' />
          </li>
          <li className='col-xs-6 col-md-4 col-lg-2'>
            <img src={mainExample2} alt='' />
          </li>
          <li className='col-xs-6 col-md-4 col-lg-2'>
            <img src={mainExample3} alt='' />
          </li>
          <li className='col-xs-6 col-md-4 col-lg-2'>
            <img src={mainExample4} alt='' />
          </li>
          <li className='col-xs-6 col-md-4 col-lg-2'>
            <img src={mainExample5} alt='' />
          </li>
          <li className='col-xs-6 col-md-4 col-lg-2'>
            <img src={mainExample6} alt='' />
          </li>
        </ul>
        <ul className={'row my-8 my-md-13 justify-center'}>
          <li className='col-xs-6 col-md-3 d-center'>
            <Ellipse icon={magnetic} text={'합리적 가격'} size='medium' />
          </li>
          <li className='col-xs-6 col-md-3 d-center'>
            <Ellipse icon={thumbsUp} text={'최고급 자재'} size='medium' />
          </li>
          <li className='col-xs-6 col-md-3 d-center'>
            <Ellipse icon={tools} text={'무상 A/S'} size='medium' />
          </li>
          <li className='col-xs-6 col-md-3 d-center'>
            <Ellipse icon={verified} text={'양심기업'} size='medium' />
          </li>
        </ul>
        <div className={clsx(styles['order-wrapper'], 'row', 'gx-1', 'gy-0')}>
          <div className='col col-md-6 mb-5 mb-md-0'>
            <div className={clsx(styles['fast-consulting'], 'bg-gray-100')}>
              <h3>빠른상담</h3>
              <p>{companyInfo.officeHours}</p>
              <h2 className='mt-10'>
                <a className='blue-100' href='tel:031-535-1324'>
                  {companyInfo.phone}
                </a>
              </h2>
            </div>
            <Link to={'/order'}>
              <div className={clsx(styles['quote-contact'], 'bg-blue-100')}>
                <h3>견적문의</h3>
                <div className='d-flex justify-end'>
                  <img src={arrowLeft} alt='견적문의' />
                </div>
              </div>
            </Link>
          </div>
          <div className='col col-md-6'>
            <div className={clsx(styles['fast-quote-contact'])}>
              <div className='mb-2'>
                <h3>빠른견적문의</h3>
                <p className='heading6 text-normal'>
                  확인 후 순차적으로 연락드립니다.
                </p>
              </div>
              <div className={clsx(styles['terms-wrapper'])}>
                <p className='mr-6'>개인정보수집 이용에 관한 동의</p>
                <div className='d-flex'>
                  <label className='mr-2'>
                    <input
                      type='radio'
                      name='terms'
                      onChange={() => handleTermsAgree(true)}
                      checked={termsAgree}
                    />
                    <span className='ml-md-3'>동의함</span>
                  </label>
                  <label>
                    <input
                      type='radio'
                      name='terms'
                      onChange={() => handleTermsAgree(false)}
                      checked={!termsAgree}
                    />
                    <span className='ml-md-3'>동의안함</span>
                  </label>
                  <span
                    className={styles['detail-view']}
                    onClick={() => handleTermsModal()}>
                    [자세히 보기]
                  </span>
                </div>
              </div>
              <div className={styles['divider']} />
              <form className={styles['form']} onSubmit={onSubmit}>
                <label className='heading6'>
                  <span>고객명</span>
                  <input
                    type='text'
                    className='heading6'
                    id='name'
                    value={fastQuoteForm.name}
                    placeholder='이름을 입력해주세요'
                    onChange={handleChange}
                    required
                  />
                </label>
                <label className='heading6'>
                  <span>연락처</span>
                  <input
                    type='text'
                    className='heading6'
                    id='phone'
                    value={fastQuoteForm.phone}
                    placeholder='전화번호를 입력해주세요'
                    onChange={handleChange}
                    required
                  />
                </label>
                <label className='heading6'>
                  <span>이메일</span>
                  <input
                    type='email'
                    className='heading6'
                    id='email'
                    value={fastQuoteForm.email}
                    placeholder='이메일을 입력해주세요'
                    onChange={handleChange}
                    required
                  />
                </label>
                <label className='heading6'>
                  <span>요청사항</span>
                  <input
                    type='text'
                    className='heading6'
                    id='requirement'
                    value={fastQuoteForm.requirement}
                    placeholder='요청사항을 입력해주세요'
                    onChange={handleChange}
                    required
                  />
                </label>
                <div className='d-center'>
                  <Button text={'상담신청'} />
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className='row d-center mb-8 mb-md-15'>
          <h2 className='blue-100 text-center'>
            왜 예감의 고객만족도는 <br className='d-md-none' />
            <span className={styles['dot-position']}>
              최<span className={styles['dot']}>.</span>
            </span>
            <span className={styles['dot-position']}>
              상<span className={styles['dot']}>.</span>
            </span>
            <span className={styles['dot-position']}>
              위<span className={styles['dot']}>.</span>
            </span>
            인가요?
          </h2>
        </div>
        <ul className={clsx(styles['best-reason-wrapper'], 'row', 'gy-3')}>
          <li
            className={clsx(styles[''], 'col col-md-4')}
            style={{ backgroundImage: `url(${bestReason1})` }}>
            <div className={styles['reason-content']}>
              <div className={styles['number']}>1</div>
              <h3 className='mt-3 mb-10'>
                전문통신공사 <br />
                면허 취득사
              </h3>
              <p className=''>
                (주) 예감은 정보통신공사협회에 공식 등록된
                <br /> 정보통신공사 면허를 가진 ‘전문 기업’으로 <br />
                <span className='text-bolder'>
                  전문성과 노하우를 기반하여 책임
                </span>
                시공합니다.
              </p>
            </div>
          </li>
          <li
            className={clsx(styles[''], 'col col-md-4')}
            style={{ backgroundImage: `url(${bestReason2})` }}>
            <div className={styles['reason-content']}>
              <div className={styles['number']}>2</div>
              <h3 className='mt-3 mb-10'>
                정품 자재
                <br />
                필수 사용
              </h3>
              <p className=''>
                안전한 인터넷 환경 구성의 시작은 ‘자재’입니다.
                <br />
                양심기업 (주)예감은 <br />
                오직{' '}
                <span className='text-bolder'>
                  국산용 고강도 정품 자재
                </span>만을 <br />
                사용할 것을 약속합니다.
              </p>
            </div>
          </li>
          <li
            className={clsx(styles[''], 'col col-md-4')}
            style={{ backgroundImage: `url(${bestReason3})` }}>
            <div className={styles['reason-content']}>
              <div className={styles['number']}>3</div>
              <h3 className='mt-3 mb-10'>
                빠르고 친절한 <br /> 서비스
              </h3>
              <p className=''>
                (주)예감은 고객님들의 소중한 시간을 위해
                <br /> 최선을 다하여 <br />
                <span className='text-bolder'>빠르고 친절한 서비스</span>로
                보답합니다.
              </p>
            </div>
          </li>
        </ul>
        <div className='row mb-10 mb-md-25'>
          <div className='col d-flex align-items-center justify-between'>
            <h2 className='blue-100'>설치사례</h2>
            <Link to={'/portfolio'}>
              <h5 className='blue-100'>더보기</h5>
            </Link>
          </div>
          <div className='col'>
            <ul className={clsx(styles['case-wrapper'], 'row', 'gx-1')}>
              {siteList.map((item) => {
                return (
                  <li className='col-6 col-md-3' key={shortid.generate()}>
                    <img src={item.url} alt={item.title} />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <Modal
        open={open}
        handler={handleModal}
        style={{ width: 754, height: 492 }}>
        <div className={styles['modal-1']}>
          <p className='normal1 d-flex align-items-center flex-column text-center'>
            <span className='blue-100 text-bolder'>상담 신청완료</span>
            <span>확인 후 연락드리겠습니다.</span>
          </p>
        </div>
      </Modal>
      <Modal
        open={termsOpen}
        handler={handleTermsModal}
        style={{ width: 1172 }}>
        <div className='p-8'>
          <h2 className='blue-100 mb-5'>개인정보수집</h2>
          <div className=''>
            <div className={styles['terms']}>
              <p>
                <span className={styles['title']}>
                  개인정보 수집이용에 대한 동의
                </span>
                <br />
                작성자의 소중한 개인정보는 다음과 같은 정책에 따라 수집
                이용됩니다. <br />
                당사는 목적에 연관되는 개인정보만을 수집하며, 수집된 정보를
                투명하고 안전하게 보고 관리할 것을 약속합니다.
                <br /> 이에 개인정보 수집 및 이용에 대한 동의를 구합니다.
              </p>
              <p>
                <span className={styles['title']}>개인정보 수집·이용목적</span>
                <br />
                문의를 남긴 작성자에게 보다 정확한 답변을 위해 수집됩니다.
              </p>
              <p>
                <span className={styles['title']}>수집 항목</span>
                <br /> 필수항목 : 회사, 성함, 연락처, 이메일, 문의내용
              </p>
              <p>
                <span className={styles['title']}>보유이용기간</span>
                <br />
                원칙적으로 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를
                지체없이 파기합니다. <br />
                다만 관계법령에 따라 보존하여하는 경우에는 그러하지 않을 수
                있습니다.
              </p>
            </div>
            <div className='d-center my-9 flex-column flex-md-row justify-evenly'>
              <Button
                text={'동의하지 않습니다'}
                style={{
                  background: '#ececec',
                  border: '2px solid #d9d9d9',
                  width: '100%',
                  maxWidth: 296,
                  paddingLeft: 0,
                  paddingRight: 0,
                  marginBottom: 8,
                }}
                textStyle={{
                  fontWeight: 400,
                  color: '#d9d9d9',
                }}
                onClick={() => handleTermsModal(false)}
              />
              <Button
                text={'동의합니다'}
                style={{
                  width: '100%',
                  maxWidth: 296,
                  paddingLeft: 0,
                  paddingRight: 0,
                  marginBottom: 8,
                }}
                onClick={() => handleTermsModal(true)}
              />
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Main;
