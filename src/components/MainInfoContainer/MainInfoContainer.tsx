import { useTranslation } from 'react-i18next';

import { crayfishPhoto, mainInfoLogo } from '../../assets';
import {
    photo480, photo631, photo712, photo831, photo946, photo1066, photo1173, photo1269, photo1285, photo1315,
    photo1397, photo1480, photo1562, photo1636, photo1716, photo1814, photo1884, photo1910, photo1920,
} from '../../assets/crayFishDiffPhoto';
import style from './mainInfoContainer.module.scss';

interface MainInfoContainerProps {
    mainBackgroundPhoto: string
}

export const MainInfoContainer: React.FC<MainInfoContainerProps> = (props: MainInfoContainerProps) => {
    // const {
    //     photo480, photo631, photo712, photo831, photo946, photo1066, photo1173, photo1269,
    // } = props;
    const { mainBackgroundPhoto } = props;
    const { t: translation } = useTranslation();

    return (
        <div className={`${style.mainInfoContainer} d-flex justify-content-center align-items-center position-relative w-100 overflow-hidden`}>
            {/* <img className="position-absolute w-100 h-100 top-0 left-0 z-1 object-fit-cover" src={mainBackgroundPhoto ?? crayfishPhoto} alt="mainBackgroundPhoto"/> */}
            {/* srcSet="crayfishPhoto-400w.avif 400w, crayfishPhoto-600w.avif 600w, crayfishPhoto-800w.avif 800w, crayfishPhoto-1000w.avif 1000w, crayfishPhoto-1200w.avif 1200w, crayfishPhoto-1600w.avif 1600w, crayfishPhoto-2000w.avif 2000w"
                sizes="(max-width: 400px) 400px, (max-width: 600px) 600px, (max-width: 800px) 800px, (max-width: 1000px) 1000px, (max-width: 1200px) 1200px, (max-width: 1600px) 1600px, (min-width: 1601px) 2000px"
                 */}
            
            <img
                className="position-absolute top-0 left-0 z-1 w-100 h-100 object-fit-cover"
                srcSet={`
                    ${photo631} 480w,
                    ${photo631} 631w,
                    ${photo712} 712w,
                    ${photo831} 831w,
                    ${photo946} 946w,
                    ${photo1066} 1066w,
                    ${photo1173} 1173w,
                    ${photo1269} 1269w,
                    ${photo1285} 1285w,
                    ${photo1315} 1315w,
                    ${photo1397} 1397w,
                    ${photo1480} 1480w,
                    ${photo1562} 1562w,
                    ${photo1636} 1636w,
                    ${photo1716} 1716w,
                    ${photo1814} 1814w,
                    ${photo1884} 1884w,
                    ${photo1910} 1910w,
                    ${photo1920} 1920w,
                `}
                sizes={`
                    (max-width: 480px) 480px,
                    (max-width: 631px) 631px,
                    (max-width: 712px) 712px,
                    (max-width: 831px) 831px,
                    (max-width: 946px) 946px,
                    (max-width: 1066px) 1066px,
                    (max-width: 1173px) 1173px,
                    (max-width: 1269px) 1269px,
                    (max-width: 1269px) 1269px,
                    (max-width: 1285px) 1285px,
                    (max-width: 1315px) 1315px,
                    (max-width: 1397px) 1397px,
                    (max-width: 1480px) 1480px,
                    (max-width: 1562px) 1562px,
                    (max-width: 1636px) 1636px,
                    (max-width: 1716px) 1716px,
                    (max-width: 1814px) 1814px,
                    (max-width: 1884px) 1884px,
                    (max-width: 1910px) 1910px,
                    (max-width: 1920px) 1920px,
                `}
                alt={photo480}
            />

            {/* <img
                className="position-absolute top-0 left-0 z-1 w-100 h-100 object-fit-cover"
                srcSet={`
                    ${mainBackgroundPhoto400} 400w,
                    ${mainBackgroundPhoto600} 600w,
                    ${mainBackgroundPhoto800} 800w,
                    ${mainBackgroundPhoto1000} 1000w,
                    ${mainBackgroundPhoto1200} 1200w,
                    ${mainBackgroundPhoto1600} 1600w,
                    ${mainBackgroundPhoto2000} 2000w,
                `}
                sizes="(max-width: 400px) 400px, (max-width: 600px) 600px, (max-width: 800px) 800px, (max-width: 1000px) 1000px, (max-width: 1200px) 1200px, (max-width: 1600px) 1600px, (min-width: 1601px) 2000px"
                alt={mainBackgroundPhoto400}
                width="4096"
                height="2734"
            /> */}

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
