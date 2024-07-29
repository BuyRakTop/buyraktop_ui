import { useTranslation } from 'react-i18next';

import style from './mobileMenu.module.scss';
import { Dispatch, SetStateAction } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

interface MobileMenuProps {
    active: boolean;
    setActive: Dispatch<SetStateAction<boolean>>;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ active, setActive }) => {
    const { t: translation } = useTranslation();
    
    return (
        <div className={active ? `${style.menu} ${style.active}` : style.menu} onClick={() => setActive(false)}>
            <div className={`${style.menuContent} pt-3 px-3`}>

                <FontAwesomeIcon className={`${style.menuIcon} pb-4`} icon={faXmark} onClick={() => setActive(false)} />

                <h2 className={`${style.linkItem} pt-3`}>
                    <NavLink to='/cray-fish'>{translation('cray_fish.cray_fish')}</NavLink>
                </h2>

                <h2 className={`${style.linkItem} pt-3`}>
                    <NavLink to='/shrimp'>{translation('shrimp.shrimp')}</NavLink>
                </h2>

                <h2 className={`${style.linkItem} pt-3`}>
                    <NavLink to='/delivery'>{translation('delivery.delivery')}</NavLink>
                </h2>

                <h2 className={`${style.linkItem} pt-3`}>
                    <NavLink to='/promotions'>{translation('promotions.promotions')}</NavLink>
                </h2>

                <h2 className={`${style.linkItem} pt-3`}>
                    <NavLink to='/about-us'>{translation('about_us.about_us')}</NavLink>
                </h2>

                <h2 className={`${style.linkItem} pt-3`}>
                    <NavLink to='/contacts'>{translation('contacts.contacts')}</NavLink>
                </h2>
            </div>

            {/* Blur effect */}
            { active && <div className={style.blur} onClick={() => setActive(false)}/> }
        </div>
    )
}