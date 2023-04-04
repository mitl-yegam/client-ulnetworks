import clsx from 'clsx';
import TopBanner from 'components/molecules/topBanner';
import styles from './portfolio.module.scss';
import Pagination from 'components/atoms/pagination';
import { useEffect, useState } from 'react';
import API from 'api';
import { SiteListProp } from './portfolio.type';

const Portfolio = () => {
  const [siteList, setSiteList] = useState<{
    [key: number]: { [key: number]: SiteListProp };
  }>([]);
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지
  const row = 6; // 한 페이지에 보여주는 갯수
  const handlePage = (page: number) => setCurrentPage(page); // page handler

  useEffect(() => {
    const data = {
      pageName: 'home',
      pageDetailName: 'site',
    };
    API.get({ url: '/media', data }).then(({ data }) => {
      // 받아온 전체 배열을 페이징 처리
      if (data && Array.isArray(data)) {
        const totalPage = Math.ceil(data.length / row); // 전체 페이지
        let pageData: { [key: number]: SiteListProp } = {}; // 페이지 객체
        let itemIdx = 0; // 현재까지 카운트 한 아이템 index

        for (let pageNumber = 1; pageNumber <= totalPage; pageNumber++) {
          for (let k = 0; k < row; k++) {
            if (!data[itemIdx]) {
              break;
            }

            pageData = {
              ...pageData,
              [pageNumber]: {
                ...pageData[pageNumber],
                [k]: data[itemIdx],
              },
            };

            itemIdx += 1;
          }
        }

        setSiteList(pageData);
      }
    });
  }, []);

  return (
    <div className={clsx(styles['root'])}>
      <TopBanner />
      <div className='container'>
        <div className='row mt-15'>
          <h3 className='blue-100'>설치사례</h3>
          <div className='col'>
            <ul className={clsx(styles['case-wrapper'], 'row', 'gx-1', 'gy-2')}>
              {Object.values(siteList)
                .filter((_, i) => i + 1 === currentPage)
                .map((value) => {
                  return Object.values(value).map((item) => (
                    <li className='col col-xs-6 col-md-4' key={item.mediaId}>
                      <img src={item.url} alt={item.title} />
                      <div className='bold3 gray-600'>{item.title}</div>
                      <div className='normal4 gray-600'>{item.subTitle}</div>
                    </li>
                  ));
                })}
            </ul>
            <Pagination
              totalCount={Object.values(siteList)?.length || 0}
              row={row}
              handler={handlePage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
