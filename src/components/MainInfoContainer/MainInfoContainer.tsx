import { useTranslation } from 'react-i18next';

import { crayfishPhoto, mainInfoLogo } from '../../assets';
import style from './mainInfoContainer.module.scss';

interface MainInfoContainerProps {
    mainBackgroundPhoto: string
}

export const MainInfoContainer: React.FC<MainInfoContainerProps> = (props: MainInfoContainerProps) => {
    const { mainBackgroundPhoto } = props;
    const { t: translation } = useTranslation();

    return (
        <div className={`${style.mainInfoContainer} d-flex justify-content-center align-items-center position-relative w-100 overflow-hidden`}>
            <img className="position-absolute w-100 h-100 top-0 left-0 z-1 object-fit-cover" src={mainBackgroundPhoto ?? crayfishPhoto} alt="mainBackgroundPhoto"/>
            <div className="d-flex flex-column justify-content-center align-items-center position-absolute">
                <div className={`${style.infoLogo}`}>
                    <img src={mainInfoLogo} alt={mainInfoLogo}/>
                </div>
                <div className={`${style.infoDelivery} d-flex flex-column justify-content-center align-items-center`}>
                    <div className={`${style.infoDeliveryText} fw-bold pt-3 pt-md-4`}>{translation('cray_fish.cray_delivery')}</div>
                    <div className={`${style.infoDeliveryPhone} pt-2`}>{translation('share_info.phone_delivery')}</div>
                </div>
            </div>
        </div>
    )
}
