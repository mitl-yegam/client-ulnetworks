import clsx from "clsx";
import styles from "./topTitle.module.scss";

const TopTitle = ({title, borderBlue}: {title: string, borderBlue: boolean}) => {
    return (
        <div className={clsx(styles['tab'], borderBlue && styles['border-blue'], 'py-5 py-md-7')}>
            <span className="normal2 blue-100 text-bolder">{title}</span>
        </div>
    )
};

export default TopTitle;