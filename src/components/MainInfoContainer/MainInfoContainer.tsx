import { useTranslation } from 'react-i18next';

import { mainInfoLogo } from '../../assets';
import style from './mainInfoContainer.module.scss';

interface MainInfoContainerProps {
    photo480: string;
    photo1280: string;
    photo1851: string;
    photo2797: string;
    photo3308: string;
    photo3702: string;
}

export const MainInfoContainer: React.FC<MainInfoContainerProps> = (props: MainInfoContainerProps) => {
    const { photo480, photo1280, photo1851, photo2797, photo3308, photo3702 } = props;
    const { t: translation } = useTranslation();

    return (
        <div className={`${style.mainInfoContainer} d-flex justify-content-center align-items-center position-relative w-100 overflow-hidden`}>
            <img
                className="position-absolute w-100 h-100 top-0 left-0 z-1 object-fit-cover"
                sizes="(max-width: 480px) 1x, (max-width: 1280px) 2x, (max-width: 2797px) 3x, (max-width: 3308px) 4x, (max-width: 3702px) 5x"
                srcSet={`${photo480} 480w, ${photo1280} 1280w, ${photo1851} 1851w, ${photo2797} 2797w, ${photo3308} 3308w, ${photo3702} 3702w `}
                src={photo3702}
                alt={photo3702}
                loading="lazy"
            />

            <div className="d-flex flex-column justify-content-center align-items-center position-absolute">
                <div className={`${style.infoLogo}`}>
                    <img src={mainInfoLogo} alt={mainInfoLogo}/>
                </div>
                <div className={`${style.infoDelivery} d-flex flex-column justify-content-center align-items-center`}>
                    <div className={`${style.infoDeliveryText} fw-bold pt-1 pt-md-2`}>{translation('cray_fish.cray_delivery')}</div>
                    <div className={`${style.infoDeliveryPhone} pt-2`}>{translation('share_info.phone_delivery')}</div>
                </div>
            </div>
        </div>
    )
}
