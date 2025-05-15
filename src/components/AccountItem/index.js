import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/30d5f7e3753d416b53cebbf82e220263~tplv-tiktokx-cropcenter:100:100.jpeg?biz_tag=tiktok_user.user_cover&dr=14579&idc=my2&ps=13740610&refresh_token=cb916166&shcp=c1333099&shp=30310797&t=4d5b0474&x-expires=1747411200&x-signature=3MCjfAhV4Bs8nnNV4QF091E9yio%3D"
                alt="Hoaa"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>nguyenvana</span>
            </div>
        </div>
    );
}

export default AccountItem;
