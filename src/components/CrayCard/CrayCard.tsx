import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';

import style from './crayCard.module.scss';
import { crayfish } from '../../assets';

interface CrayCardProps {
    isAvailable: boolean;
    crayPhoto: string;
    craySize: CraySize;
    crayType: CrayType;
}

export enum CraySize {
    XS = "XS",
    S = "S",
    M = "M",
    L = "L",
    XL = "XL",
    XXL = "XXL",
}

export enum CrayType {
    RAW = "raw",
    BOIL = "boil",
}

const crayData = {
    [CrayType.BOIL]: {
        [CraySize.XS]: {
            weightItem: "10 - 20",
            sizeItem: "6 - 8",
            countItem: "50 - 100",
            priceItem: "500",
        },
        [CraySize.S]: {
            weightItem: "20 - 40",
            sizeItem: "8 - 12",
            countItem: "30 - 33",
            priceItem: "600",
        },
        [CraySize.M]: {
            weightItem: "40 - 60",
            sizeItem: "12 - 15",
            countItem: "20 - 23",
            priceItem: "700",
        },
        [CraySize.L]: {
            weightItem: "60 - 80",
            sizeItem: "15 - 17",
            countItem: "15 - 17",
            priceItem: "800",
        },
        [CraySize.XL]: {
            weightItem: "80 - 100",
            sizeItem: "17 - 20",
            countItem: "10 - 12",
            priceItem: "900",
        },
        [CraySize.XXL]: {
            weightItem: "100+",
            sizeItem: "20+",
            countItem: "10",
            priceItem: "1000",
        },
    },
    [CrayType.RAW]: {
        [CraySize.XS]: {
            weightItem: "10 - 20",
            sizeItem: "6 - 8",
            countItem: "50 - 100",
            priceItem: "400",
        },
        [CraySize.S]: {
            weightItem: "20 - 40",
            sizeItem: "8 - 12",
            countItem: "30 - 33",
            priceItem: "500",
        },
        [CraySize.M]: {
            weightItem: "40 - 60",
            sizeItem: "12 - 15",
            countItem: "20 - 23",
            priceItem: "600",
        },
        [CraySize.L]: {
            weightItem: "60 - 80",
            sizeItem: "15 - 17",
            countItem: "15 - 17",
            priceItem: "700",
        },
        [CraySize.XL]: {
            weightItem: "80 - 100",
            sizeItem: "17 - 20",
            countItem: "10 - 12",
            priceItem: "800",
        },
        [CraySize.XXL]: {
            weightItem: "100+",
            sizeItem: "20+",
            countItem: "10",
            priceItem: "900",
        },
    },
}

export const CrayCard: React.FC<CrayCardProps> = (props: CrayCardProps) => {
    const { t: translation } = useTranslation();

    const { isAvailable, crayPhoto, craySize, crayType } = props;
    const { weightItem, sizeItem, countItem, priceItem } = crayData[crayType][craySize];

    return (
        <div className={`${style.card} d-flex flex-column gap-3 pb-3 rounded-5`}>
            <div className={`${style.crayView} position-relative overflow-hidden`}>
                <img className="position-absolute top-0 left-0 w-100 h-100 rounded-4 rounded-bottom-0 object-fit-cover" src={crayPhoto} alt={crayPhoto} />
                <div className="position-absolute z-1 top-0 left-0 right-0 d-flex justify-content-between align-items-center w-100 ps-3">
                    <h3 className={`${style.sizeText} ps-1 pt-3`}>{craySize}</h3>
                    <div className={`${style.craySizeBlock} px-1 pb-2 d-flex align-items-end`}>
                        <img className={craySize === CraySize.XS ? `${style.activeSize}` : ''} src={crayfish} alt={crayfish} />
                        <img className={craySize === CraySize.S ? `${style.activeSize}` : ''} src={crayfish} alt={crayfish} />
                        <img className={craySize === CraySize.M ? `${style.activeSize}` : ''} src={crayfish} alt={crayfish} />
                        <img className={craySize === CraySize.L ? `${style.activeSize}` : ''} src={crayfish} alt={crayfish} />
                        <img className={craySize === CraySize.XL ? `${style.activeSize}` : ''} src={crayfish} alt={crayfish} />
                        <img className={craySize === CraySize.XXL ? `${style.activeSize}` : ''} src={crayfish} alt={crayfish} />
                    </div>
                </div>
            </div>

            <div className={`${style.crayInfo} px-3 d-flex flex-column gap-1`}>
                <h6>{translation('cray_fish.weight_item')} : {weightItem} {translation('cray_fish.weight_unit_item')}</h6>
                <h6>{translation('cray_fish.size_item')} : {sizeItem} {translation('cray_fish.size_unit_item')}</h6>
                <h6>{translation('cray_fish.count_item')} : {countItem} {translation('cray_fish.count_unit_item')}</h6>
            </div>

            <h3 className={`${style.crayPrice} py-2 text-center`}>{priceItem} {translation('cray_fish.price_unit_item')}</h3>

            <div className="d-flex justify-content-center pb-3">
                {
                    isAvailable
                        ? (
                            <div className={`${style.crayOrderBtn} d-flex justify-content-center align-items-center pt-2`}>
                                <FontAwesomeIcon className={`${style.icon} d-flex justify-content-center align-items-center pb-3 pe-2`} icon={faBasketShopping} />
                                <h4 className="fw-bold">{translation('buttons.to_cart')}</h4>
                            </div>
                        )
                        : (
                            <div className={`${style.crayNotAvailableBtn} d-flex flex-column justify-content-center align-items-center py-2`}>
                                <span className="fw-bold px-3">{translation('buttons.not_available_1')}</span>
                                <span className="fw-bold px-3">{translation('buttons.not_available_2')}</span>
                            </div>
                        )
                }
            </div>
        </div>
    )
}