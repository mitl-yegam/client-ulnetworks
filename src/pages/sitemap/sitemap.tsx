import { Link } from "react-router-dom";
import { path } from "../../components/organism/layout/data";
import styles from './sitemap.module.scss';
import clsx from "clsx";

const SiteMap = () => {
  return (
    <div className={styles['root']}>
      <h1>Site map</h1>
      <h2>Pages</h2>
      <ul>
        {path.map(route => {
          return (
            <Link to={route.path} key={route.path}>
              <li key={route.path}>{route.name}</li>
            </Link>
          )
        })}
      </ul>
      <ul>
        <li>
          <h1>h1, .heading1 입니다</h1>
        </li>
        <li>
          <h2>h2 .heading2 입니다</h2>
        </li>
        <li>
          <h3>h3 .heading3 입니다</h3>
        </li>
        <li>
          <h4>h4 .heading4 입니다</h4>
        </li>
        <li>
          <h5>h5 .heading5 입니다</h5>
        </li>
        <li>
          <h6>h6 .heading6 입니다</h6>
        </li>
        <li>
          <p className="bold1">.bold1 입니다</p>
        </li>
        <li>
          <p className="bold2">.bold2 입니다</p>
        </li>
        <li>
          <p className="bold3">.bold3 입니다</p>
        </li>
        <li>
          <p className="bold4">.bold4 입니다</p>
        </li>
        <li>
          <p className="bold5">.bold5 입니다</p>
        </li>
        <li>
          <p className="normal1">.normal1 입니다</p>
        </li>
        <li>
          <p className="normal2">.normal2 입니다</p>
        </li>
        <li>
          <p className="normal3">.normal3 입니다</p>
        </li>
        <li>
          <p className="normal4">.normal4 입니다</p>
        </li>
      </ul>
      <ul>
        <li>
          <div className={clsx(styles['color-chip'], "bg-white")}></div>
          <p>.white .bg-white</p>
        </li>
        <li>
          <div className={clsx(styles['color-chip'], "bg-gray-100")}></div>
          <p>.gray-100 .bg-gray-100</p>
        </li>
        <li>
          <div className={clsx(styles['color-chip'], "bg-gray-200")}></div>
          <p>.gray-200 .bg-gray-200</p>
        </li>
        <li>
          <div className={clsx(styles['color-chip'], "bg-gray-300")}></div>
          <p>.gray-300 .bg-gray-300</p>
        </li>
        <li>
          <div className={clsx(styles['color-chip'], "bg-gray-400")}></div>
          <p>.gray-400 .bg-gray-400</p>
        </li>
        <li>
          <div className={clsx(styles['color-chip'], "bg-gray-500")}></div>
          <p>.gray-500 .bg-gray-500</p>
        </li>
        <li>
          <div className={clsx(styles['color-chip'], "bg-gray-600")}></div>
          <p>.gray-600 .bg-gray-600</p>
        </li>
        <li>
          <div className={clsx(styles['color-chip'], "bg-gray-700")}></div>
          <p>.gray-700 .bg-gray-700</p>
        </li>
        <li>
          <div className={clsx(styles['color-chip'], "bg-gray-800")}></div>
          <p>.gray-800 .bg-gray-800</p>
        </li>
        <li>
          <div className={clsx(styles['color-chip'], "bg-gray-900")}></div>
          <p>.gray-900 .bg-gray-900</p>
        </li>
        <li>
          <div className={clsx(styles['color-chip'], "bg-gray-1000")}></div>
          <p>.gray-1000 .bg-gray-1000</p>
        </li>
        <li>
          <div className={clsx(styles['color-chip'], "bg-black")}></div>
          <p>.black .bg-black</p>
        </li>
        <li>
          <div className={clsx(styles['color-chip'], "bg-blue-100")}></div>
          <p>.blue-100 .bg-blue-100</p>
        </li>
      </ul>
    </div>
  )
}

export default SiteMap;