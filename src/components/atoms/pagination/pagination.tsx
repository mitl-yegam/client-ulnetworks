import clsx from 'clsx';
import { ReactNode, useCallback, useEffect, useState } from 'react';
import styles from './pagination.module.scss';
import { Props } from './pagination.type';

const Pagination = ({ row, totalCount, handler }: Props) => {
  const [displayPage, setDisplayPage] = useState(1);
  const [list, setList] = useState<ReactNode[]>([]);

  const handlePaging = useCallback(
    async (page: number) => {
      window.scrollTo({ behavior: 'smooth', top: 0 });
      setDisplayPage(page);
      handler && handler(page);
    },
    [displayPage],
  );

  useEffect(() => {
    const renderNumber = () => {
      const elements = [];
      const totalPage = Math.ceil(totalCount / row);

      for (let i = 1; i <= totalPage; i++) {
        elements.push(
          <li
            className={clsx(
              styles['number'],
              'd-center',
              displayPage === i ? styles['active'] : '',
            )}
            key={i}
            onClick={() => handlePaging(i)}>
            {i}
          </li>,
        );
      }

      return elements;
    };

    const elements = renderNumber();
    setList(elements);
  }, [displayPage, totalCount, row]);

  if (totalCount === 0) {
    return null;
  }

  return (
    <section className={clsx(styles['root'], 'container', 'mb-10')}>
      <ol className={clsx(styles['ol-wrapper'], 'row', 'justify-center')}>
        {list}
      </ol>
    </section>
  );
};

export default Pagination;
