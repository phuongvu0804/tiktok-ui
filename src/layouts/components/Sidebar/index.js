import config from '@/config';
import classNames from 'classnames/bind';

import styles from './Sidebar.module.scss';
import {
    HomeIconRegular,
    LiveIconRegular,
    UserGroupIconRegular,
} from '@/components/Icons';
import MenuItem from './Menu/MenuItem';
import {
    HomeIconSolid,
    LiveIconSolid,
    UserGroupIconSolid,
} from '@/components/Icons';
import Menu from './Menu';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem
                    title="For You"
                    to={config.routes.home}
                    icon={<HomeIconRegular />}
                    activeIcon={<HomeIconSolid />}
                />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<UserGroupIconRegular />}
                    activeIcon={<UserGroupIconSolid />}
                />
                <MenuItem
                    title="Live"
                    to={config.routes.live}
                    icon={<LiveIconRegular />}
                    activeIcon={<LiveIconSolid />}
                />
            </Menu>
        </aside>
    );
}

export default Sidebar;
