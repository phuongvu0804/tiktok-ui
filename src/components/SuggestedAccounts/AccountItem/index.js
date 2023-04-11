import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import Tippy from '@tippyjs/react/headless';

import styles from '../SuggestedAccounts.module.scss';
import { Wrapper as PopperWrapper } from '@/components/Popper';
import AccountPreview from '../AccountPreview';

const cx = classNames.bind(styles);
function SuggestedAccountItem() {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        );
    };
    return (
        <div>
            <Tippy
                interactive
                delay={[800, 0]}
                offset={[-20, 0]}
                render={renderPreview}
                placement="bottom"
            >
                <div className={cx('account-item')}>
                    <img
                        className={cx('avatar')}
                        src="https://p77-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/bd261d4133fa6ba61e3c1c281ee0bcac.jpeg?x-expires=1680278400&x-signature=TwyHIVoh%2BSX1xEMcWh6YeL0CtwM%3D"
                        alt=""
                    />
                    <div className={cx('item-info')}>
                        <h4 className={cx('nickname')}>
                            <strong>quocnguyenphu</strong>
                            <FontAwesomeIcon
                                className={cx('check')}
                                icon={faCircleCheck}
                            />
                        </h4>
                        <p className={cx('name')}>Quoc Nguyen Phu</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

SuggestedAccountItem.propTypes = {};

export default SuggestedAccountItem;
