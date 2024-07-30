import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faCreditCard, faWallet } from '@fortawesome/free-solid-svg-icons';

import { AdvertisingBlockOne, AdvertisingBlockTwo, MainInfoContainer } from '../../components';
import {
    deliverPhoto, deliveryPhoto1280, deliveryPhoto1851, deliveryPhoto2797,
    deliveryPhoto3308, deliveryPhoto3702, deliveryPhoto480,
} from '../../assets';
import style from './delivery.module.scss';

export const Delivery: React.FC = () => (
    <div className="d-flex flex-column">
        {/* Main Background Photo Block */}
        <MainInfoContainer
            photo480={deliveryPhoto480}
            photo1280={deliveryPhoto1280}
            photo1851={deliveryPhoto1851}
            photo2797={deliveryPhoto2797}
            photo3308={deliveryPhoto3308}
            photo3702={deliveryPhoto3702}
        />

        {/* Advertising Block */}
        <AdvertisingBlockOne />

        {/* Products Block */}
        <DeliveryContent />

        {/* Advertising Block */}
        <AdvertisingBlockTwo />
                        
    </div>
);

const DeliveryContent: React.FC = () => {
    const { t: translation } = useTranslation();

    return (
        <div className={`${style.mainContainer} d-flex flex-column justify-content-center align-items-center px-3 py-5`}>
            <h5 className={`${style.header} py-2 py-md-4 py-xl-5`}>
                {translation('delivery.h1_conditions')}&nbsp;
                <span className={style.textYellow}>
                    {translation('delivery.h1_delivery')}&nbsp;
                </span>
                {translation('delivery.h1_and')}&nbsp;
                <span className={style.textYellow}>
                    {translation('delivery.h1_payment')}&nbsp;
                </span>
            </h5>

            <div className="d-flex flex-column flex-md-row justify-content-center align-items-center w-100 gap-md-5 py-5">
                <div className={`${style.deliverPhotoContainer} rounded-circle overflow-hidden`}>
                    <img className={style.deliverPhoto} src={deliverPhoto} alt={deliverPhoto} />
                </div>

                <div className={`${style.deliveryDescription} pt-4 pt-md-0 d-flex flex-column text-center`}>
                    <div>
                        {translation('delivery.delivery_makes')}<br/>
                        {translation('delivery.around_city')}&nbsp;
                        <span className={style.textYellow}>
                            {translation('share_info.brovary')}
                        </span>
                    </div>

                    <div className="pt-3">
                        {translation('delivery.every_day')}&nbsp;
                        <span className={style.textYellow}>
                            {translation('share_info.schedule_time')}
                        </span>
                    </div>

                </div>
            </div>

            <div className={`${style.deliveryAdvantages} px-3  py-5 d-flex flex-column flex-md-row align-items-start gap-5 w-100`}>
                <div className={`${style.advantItem} ps-3`}>
                    <div className="d-flex align-items-center">
                        <FontAwesomeIcon className={style.icon} icon={faWallet} />
                        <span className="pt-1 ps-3 fw-bold">{translation('delivery.cost')}</span>
                    </div>

                    <div className="pt-3 ps-2">
                        <div className="d-flex">
                            <span>&#10027;&nbsp;</span>
                            <span className="ps-2">{translation('delivery.adv_cost_1')}</span>
                        </div>
                    </div>
                </div>

                <div className={`${style.advantItem} ps-3`}>
                    <div className="d-flex align-items-center">
                        <FontAwesomeIcon className={style.icon} icon={faClock} />
                        <span className="pt-1 ps-3 fw-bold">{translation('delivery.time')}</span>
                    </div>

                    <div className="pt-3 ps-2">
                        <div className="d-flex">
                            <span>&#10027;&nbsp;</span>
                            <span className="ps-2">{translation('delivery.adv_time_1')}</span>
                        </div>

                        <div className="d-flex">
                            <span>&#10027;&nbsp;</span>
                            <span className="ps-2">{translation('delivery.adv_time_3')}</span>
                        </div>
                    </div>
                </div>
                
                <div className={`${style.advantItem} ps-3`}>
                    <div className="d-flex align-items-center">
                        <FontAwesomeIcon className={style.icon} icon={faCreditCard} />
                        <span className="pt-1 ps-3 fw-bold">{translation('delivery.payment')}</span>
                    </div>

                    <div className="pt-3 ps-2">
                        <div className="d-flex">
                            <span>&#10027;&nbsp;</span>
                            <span className="ps-2">{translation('delivery.adv_payment_1')}</span>
                        </div>

                        <div className="d-flex">
                            <span>&#10027;&nbsp;</span>
                            <span className="ps-2">{translation('delivery.adv_payment_2')}</span>
                        </div>

                        <div className="d-flex">
                            <span>&#10027;&nbsp;</span>
                            <span className="ps-2">{translation('delivery.adv_payment_3')}</span>
                        </div>

                        <div className="d-flex">
                            <span>&#10027;&nbsp;</span>
                            <span className="ps-2">{translation('delivery.adv_payment_4')}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}