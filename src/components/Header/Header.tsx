import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTelegram, faViber } from '@fortawesome/free-brands-svg-icons';
import { faUserLock, faBars } from '@fortawesome/free-solid-svg-icons';

import { MobileMenu } from '../MobileMenu/MobileMenu';
import style from './header.module.scss';
import { flag_ua, flag_usa } from '../../assets';

export const Header: React.FC = () => {
  const { t: translation } = useTranslation();
  const [isOpenMenu, setOpenMenu] = useState(false);
  const [isNativeLang, setIsNativeLang] = useState(true);
  const backgroundLangPhoto = isNativeLang ? flag_ua : flag_usa;

  return (
    <div className={`${style.headerContainer} px-3 px-md-4 px-xl-5 d-flex justify-content-between align-items-center`}>
      {/* Menu Section */}
      <div className={`${style.headerLeftSide} flex-grow-1 pe-3`}>

        {/* Mobile menu views */}
        <div className="d-flex d-md-none">
          <FontAwesomeIcon className={style.icon} icon={faBars} onClick={() => setOpenMenu(!isOpenMenu)} />
        </div>

        {/* Regular menu views */}
        <div className="d-none justify-content-between d-md-flex justify-md-content-center">
          <div className={style.menuNavItem}>
            <NavLink to='/cray-fish'>{translation('cray_fish.cray_fish')}</NavLink>
          </div>
          <div className={style.menuNavItem}>
            <NavLink to='/shrimp'>{translation('shrimp.shrimp')}</NavLink>
          </div>
          <div className={style.menuNavItem}>
            <NavLink to='/delivery'>{translation('delivery.delivery')}</NavLink>
          </div>
          <div className={style.menuNavItem}>
            <NavLink to='/promotions'>{translation('promotions.promotions')}</NavLink>
          </div>
          <div className={style.menuNavItem}>
            <NavLink to='/about-us'>{translation('about_us.about_us')}</NavLink>
          </div>
          <div className={style.menuNavItem}>
            <NavLink to='/contacts'>{translation('contacts.contacts')}</NavLink>
          </div>
        </div>
      </div>

      {/* Available mobile menu block for mobile breakpoints 375px - 767px */}
      <div className="d-flex d-md-none">
        <MobileMenu active={isOpenMenu} setActive={setOpenMenu} />
      </div>

      {/* Navigation Section */}
      <div className={`${style.headerRightSide} d-flex justify-content-center align-items-center gap-5 gap-md-3 gap-xl-5`}>
        {/* Social Sites Block */}
        <div className="d-flex justify-content-center align-items-center gap-3 gap-xl-4">
          <div className={`${style.socialBlock} d-flex justify-content-center align-items-center`}>
            <FontAwesomeIcon className={style.icon} icon={faViber} />
          </div>
          <div className={`${style.socialBlock} d-flex justify-content-center align-items-center`}>
            <FontAwesomeIcon className={style.icon} icon={faTelegram} />
          </div>
          <div className={`${style.socialBlock} d-flex justify-content-center align-items-center`}>
            <FontAwesomeIcon className={style.icon} icon={faInstagram} />
          </div>
        </div>

        {/* Languages Block */}
        <div className={`${style.langBlock} d-flex justify-content-center align-items-center`}>
          <div className={style.flagContainer} onClick={() => setIsNativeLang(!isNativeLang)}>
            <img className="w-100 h-100 object-fit-cover" src={backgroundLangPhoto} alt={backgroundLangPhoto} />
          </div>
        </div>

        {/* User Block */}
        <div className="d-flex justify-content-center align-items-center">
          <div className="d-flex d-md-none">
            <FontAwesomeIcon className={`${style.userLockIcon} fs-5`} icon={faUserLock} />
          </div>

          <div className={`${style.userSignBtn} d-none d-md-flex justify-content-md-center align-items-md-center`}>
            <Link to='/login'>{translation('buttons.singIn')}</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
