import classNames from 'classnames/bind';
import styles from './Account.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://toigingiuvedep.vn/wp-content/uploads/2021/06/hinh-anh-hoat-hinh-de-thuong-1-600x600.jpg"
                alt="ten"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Nam</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>nguyennam</span>
            </div>
        </div>
    );
}

export default AccountItem;
