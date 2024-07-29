import { useTranslation } from "react-i18next";

import style from './advertisingBlockTwo.module.scss'; 

export const AdvertisingBlockTwo: React.FC = () => {
    const { t: translation } = useTranslation();

    return (
        <div className={`${style.advBackground} d-flex justify-content-center align-items-center px-3 px-md-4 text-center`}>
            <h4 className="d-block d-md-none">
                {translation('adv.discont_20percent_brsd_p1')}&nbsp;
                <span>{translation('adv.discont_20percent_brsd_p2')}</span>
                <br />&nbsp;
                {translation('adv.discont_20percent_brsd_p3')}
                <br />&nbsp;
                {translation('adv.discont_20percent_brsd_p4')}
            </h4>

            <h4 className="d-none d-md-block">
                {translation('adv.discont_20percent_brsd_p1')}&nbsp;
                <span>{translation('adv.discont_20percent_brsd_p2')}</span>&nbsp;
                {translation('adv.discont_20percent_brsd_p3')}<br />
                {translation('adv.discont_20percent_brsd_p4')}
            </h4>
        </div>
    )
}
