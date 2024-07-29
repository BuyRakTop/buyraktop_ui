import { useState } from 'react';
import ReactLoading from 'react-loading';
import { useTranslation } from 'react-i18next';

import { AdvertisingBlockOne, AdvertisingBlockTwo, MainInfoContainer } from '../../components';
import { promotion_image_1, promotion_image_2, promotion_image_3, promotionsPhoto } from '../../assets';
import style from './promotions.module.scss';


export const Promotions: React.FC = () => {
    const [isLoading, setIsLoading] = useState(true);
    setTimeout(() => setIsLoading(false), 1500);

    return (
        <div className="d-flex flex-column">
            {
                !isLoading
                    ? (
                        <>
                            {/* Main Background Photo Block */}
                            <MainInfoContainer mainBackgroundPhoto={promotionsPhoto} />

                            {/* Advertising Block */}
                            <AdvertisingBlockOne />

                            {/* Products Block */}
                            <PromotionContent />

                            {/* Advertising Block */}
                            <AdvertisingBlockTwo />
                        </>
                    )
                    : (
                        <div className={`${style.loading} d-flex justify-content-center align-items-center`}>
                            <ReactLoading type="spinningBubbles" color="#cccccc" height={75} width={75} />
                        </div>
                    )
            }
        </div>
    );
}

const PromotionContent = () => {
    const { t: translation } = useTranslation();

    return (
        <div className={`${style.mainContainer} d-flex flex-column justify-content-center align-items-center px-3 py-5 px-md-4 px-xl-5`}>
            <h3 className={style.header}>{translation('promotions.promotions')}</h3>

            <div className="py-5 d-flex justify-content-center align-items-center w-100">
                <div className={`${style.promtItems} d-flex flex-column gap-5 w-100`}>
                    <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-5 w-100">
                        <div className={`${style.promtItem} rounded-5 overflow-hidden w-100`}>
                            <div className={`${style.promtImageBlock} position-relative overflow-hidden`}>
                                <img className="position-absolute top-0 left-0 w-100 h-100 object-fit-cover" src={promotion_image_1} alt={promotion_image_1} />
                                <div className={`${style.promtHeader} position-absolute z-1 top-0 left-0 right-0 d-flex justify-content-center align-items-center`}>
                                    <span className={`${style.textYellow} px-3 fw-bold fs-5`}>
                                        {translation('promotions.self_pick_up')}
                                    </span>
                                </div>
                            </div>

                            <div className={`${style.promtDescription} m-auto py-5 d-flex flex-column gap-2`}>
                                <div className="d-flex justify-content-start align-items-start">
                                    <span>&#10027;&nbsp;</span>
                                    <span className="ps-2">
                                        {translation('promotions.promt_first_1_1')}&nbsp;
                                        <span className={style.textYellow}>
                                            {translation('promotions.perc_10')}&nbsp;
                                        </span>
                                        {translation('promotions.promt_first_1_2')}&nbsp;
                                    </span>
                                </div>

                                <div className="d-flex justify-content-start align-items-start">
                                    <span>&#10027;&nbsp;</span>
                                    <span className="ps-2">
                                        {translation('promotions.promt_first_2')}&nbsp;
                                    </span>
                                </div>

                                <div className="pb-3 d-flex justify-content-start align-items-start">
                                    <span>&#10027;&nbsp;</span>
                                    <span className="ps-2">
                                        {translation('share_info.full_address')}&nbsp;
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className={`${style.promtItem} rounded-5 overflow-hidden w-100`}>
                            <div className={`${style.promtImageBlock} position-relative overflow-hidden`}>
                                <img className="position-absolute top-0 left-0 w-100 h-100 object-fit-cover" src={promotion_image_2} alt={promotion_image_2} />
                                <div className={`${style.promtHeader} position-absolute z-1 top-0 left-0 right-0 d-flex justify-content-center align-items-center`}>
                                    <span className={`${style.textYellow} px-3 fw-bold fs-5`}>{translation('promotions.birthday')}</span>
                                </div>
                            </div>

                            <div className={`${style.promtDescription} m-auto py-5 d-flex flex-column gap-2`}>
                                <div className="d-flex justify-content-start align-items-start">
                                    <span>&#10027;&nbsp;</span>
                                    <span className="ps-2">
                                        {translation('promotions.promt_second_1_1')}&nbsp;
                                        <span className={style.textYellow}>
                                            {translation('promotions.perc_20')}&nbsp;
                                        </span>
                                        {translation('promotions.promt_second_1_2')}&nbsp;
                                    </span>
                                </div>

                                <div className="d-flex justify-content-start align-items-start">
                                    <span>&#10027;&nbsp;</span>
                                    <span className="ps-2">
                                        {translation('promotions.promt_second_2')}&nbsp;
                                    </span>
                                </div>

                                <div className="pb-3 d-flex justify-content-start align-items-start">
                                    <span>&#10027;&nbsp;</span>
                                    <span className="ps-2">
                                        {translation('promotions.promt_second_3')}&nbsp;
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-5 w-100">
                        <div className={`${style.promtItem} rounded-5 overflow-hidden w-100`}>
                            <div className={`${style.promtImageBlock} position-relative overflow-hidden`}>
                                <img className="position-absolute top-0 left-0 w-100 h-100 object-fit-cover" src={promotion_image_3} alt={promotion_image_3} />
                                <div className={`${style.promtHeader} position-absolute z-1 top-0 left-0 right-0 d-flex justify-content-center align-items-center`}>
                                    <span className={`${style.textYellow} px-3 fw-bold fs-5`}>{translation('promotions.pre_order')}</span>
                                </div>
                            </div>

                            <div className={`${style.promtDescription} m-auto py-5 d-flex flex-column gap-2`}>
                                <div className="d-flex justify-content-start align-items-start">
                                    <span>&#10027;&nbsp;</span>
                                    <span className="ps-2">
                                        {translation('promotions.promt_first_1_1')}&nbsp;
                                        <span className={style.textYellow}>
                                            {translation('promotions.perc_5')}&nbsp;
                                        </span>
                                        {translation('promotions.promt_third_1_2')}&nbsp;
                                    </span>
                                </div>

                                <div className="d-flex justify-content-start align-items-start">
                                    <span>&#10027;&nbsp;</span>
                                    <span className="ps-2">
                                        {translation('promotions.promt_second_2')}&nbsp;
                                    </span>
                                </div>

                                <div className="pb-3 d-flex justify-content-start align-items-start">
                                    <span>&#10027;&nbsp;</span>
                                    <span className="ps-2">
                                        {translation('promotions.promt_third_2')}&nbsp;
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    )
}