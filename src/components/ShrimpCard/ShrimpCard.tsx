import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';

import style from './shrimpCard.module.scss';

interface ShrimpCardProps {
    isAvailable: boolean;
    shrampPhoto: string;
    crayType: ShrimpType;
}

export enum ShrimpType {
    Atlantic = "Atlantic",
    Langoustines = "Langoustines",
    BlackSea = "BlackSea",
    Tigers = "Tigers",
}

const shrimpData = {
    [ShrimpType.Atlantic]: {
        weightItem: "1",
        sizeItem: "5 - 10",
        countItem: "90 - 120",
        priceItem: "450",
    },
    [ShrimpType.Langoustines]: {
        weightItem: "1",
        sizeItem: "25",
        countItem: "20 - 30",
        priceItem: "500",
    },
    [ShrimpType.BlackSea]: {
        weightItem: "1",
        sizeItem: "2 - 5",
        countItem: "120 - 140",
        priceItem: "600",
    },
    [ShrimpType.Tigers]: {
        weightItem: "1",
        sizeItem: "10",
        countItem: "21 - 30",
        priceItem: "1099",
    },
}

export const ShrimpCard: React.FC<ShrimpCardProps> = (props: ShrimpCardProps) => {
    const { t: translation } = useTranslation();
    const { isAvailable, shrampPhoto, crayType } = props;
    const { weightItem, sizeItem, countItem, priceItem } = shrimpData[crayType];

    return (
        <div className={`${style.card} d-flex flex-column gap-3 pb-3 rounded-5`}>
            <div className={`${style.shrampView} position-relative overflow-hidden`}>
                <img className="position-absolute top-0 left-0 w-100 h-100 rounded-4 rounded-bottom-0 object-fit-cover" src={shrampPhoto} alt={shrampPhoto} />
                <div className={`${style.shrimpTypeBlock} position-absolute z-1 top-0 left-0 right-0`}>
                    <h4 className={`${style.shrimpType} px-4 pt-3 pb-2`}>{crayType}</h4>
                </div>
            </div>

            <div className={`${style.shrampInfo} px-3 d-flex flex-column gap-1`}>
                <h6>{translation('cray_fish.weight_item')} : {weightItem} {translation('cray_fish.weight_unit_item')}</h6>
                <h6>{translation('cray_fish.size_item')} : {sizeItem} {translation('cray_fish.size_unit_item')}</h6>
                <h6>{translation('cray_fish.count_item')} : {countItem} {translation('cray_fish.count_unit_item')}</h6>
            </div>

            <h3 className={`${style.shrampPrice} py-2 text-center`}>
                {priceItem} {translation('cray_fish.price_unit_item')}
            </h3>

            <div className="d-flex justify-content-center pb-3">
                {
                    isAvailable
                        ? (
                            <div className={`${style.shrampOrderBtn} d-flex justify-content-center align-items-center pt-2`}>
                                <FontAwesomeIcon className={`${style.icon} d-flex justify-content-center align-items-center pb-3 pe-2`} icon={faBasketShopping} />
                                <h4 className="fw-bold">{translation('buttons.to_cart')}</h4>
                            </div>
                        )
                        : (
                            <div className={`${style.shrampNotAvailableBtn} d-flex flex-column justify-content-center align-items-center py-2`}>
                                <span className="fw-bold px-3">{translation('buttons.not_available_1')}</span>
                                <span className="fw-bold px-3">{translation('buttons.not_available_2')}</span>
                            </div>
                        )
                }
            </div>
        </div>
    )
}