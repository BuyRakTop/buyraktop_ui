import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { mainInfoLogo } from '../../assets';
import style from './footer.module.scss';


export const Footer: React.FC = () => {
  const { t: translation } = useTranslation();

  return (
    <div className={`${style.footerContainer} d-flex flex-column flex-md-row px-3 px-md-4 px-xl-5 py-3`}>
      <div className="d-flex justify-content-between pt-3 flex-md-grow-1 ps-xl-5">
        <div className="d-flex flex-column">
          <img className={style.footerLogo} src={mainInfoLogo} alt={mainInfoLogo} />

          <Link
            to='/private-policy'
            className={`${style.privatePolicy} pt-3 text-decoration-underline`}
          >{translation('share_info.private_policy')}</Link>

          <Link
            to='/private_policy'
            className={`${style.companyName} pt-3 text-decoration-underline`}
          >&#169;BuyRak.Tor 2024</Link>
        </div>

        <div className="d-flex flex-column text-end text-md-start gap-2">
          <div className={style.footerNavItem}>
            <Link to='/cray-fish'>{translation('cray_fish.cray_fish')}</Link>
          </div>
          <div className={style.footerNavItem}>
            <Link to='/shrimp'>{translation('shrimp.shrimp')}</Link>
          </div>
          <div className={style.footerNavItem}>
            <Link to='/delivery'>{translation('delivery.delivery')}</Link>
          </div>
          <div className={style.footerNavItem}>
            <Link to='/promotions'>{translation('promotions.promotions')}</Link>
          </div>
          <div className={style.footerNavItem}>
            <Link to='/about-us'>{translation('about_us.about_us')}</Link>
          </div>
          <div className={style.footerNavItem}>
            <Link to='/contacts'>{translation('contacts.contacts')}</Link>
          </div>
        </div>
      </div>

      <div className="d-flex flex-column align-items-end pt-4 flex-md-grow-1 pe-xl-5">
        <span className="pt-3">{translation('share_info.phone_delivery')}</span>
        <span className="py-1">{translation('share_info.email_address')}</span>

        <div className={`${style.schedule} pt-4`}>
          {translation('share_info.schedule')}
          :&nbsp;
          <span>{translation('share_info.schedule_time')}</span>
        </div>

        <div className={`${style.bookingEnter} pt-2`}>
          {translation('share_info.booking_enter')}
          &nbsp;
          <span>{translation('share_info.booking_enter_time')}</span>
        </div>

        <span className="pt-2">{translation('share_info.m_brovary')}</span>
      </div>
    </div>
  )
}
