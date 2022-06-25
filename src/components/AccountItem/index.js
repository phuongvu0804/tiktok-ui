import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/5a7770a757b153f59c06aa06dbac768c~c5_100x100.jpeg?x-expires=1656093600&x-signature=4Sxc%2BsnqH58Y6bWg%2BmwVoG6BnCY%3D"
                alt=""
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyễn Văn A</span>
                    <FontAwesomeIcon icon={faCheckCircle} />
                </h4>
                <span className={cx('user-name')}>nguyenvana</span>
            </div>
        </div>
    );
}

export default AccountItem;
