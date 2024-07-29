import { useTranslation } from "react-i18next";

import style from './advertisingBlockOne.module.scss';

export const AdvertisingBlockOne: React.FC = () => {
    const { t: translation } = useTranslation();

    return (
        <div className={`${style.advBackground} d-flex justify-content-center align-items-center px-3 px-md-4 text-center`}>
            <h3>
                <span>{translation('adv.free_delivery_brovary_p1')}</span>
                &nbsp;
                {translation('adv.free_delivery_brovary_p2')}
            </h3>
        </div>
    )
}