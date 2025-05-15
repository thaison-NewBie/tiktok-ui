import classNames from "classnames/bind";
import styles from './Popper.module.scss'

const cx = classNames.bind(styles)

function Wrapper({ childern }) {
    return <div className={cx('wrapper')}>
        {children}
    </div>
}

export default Wrapper;