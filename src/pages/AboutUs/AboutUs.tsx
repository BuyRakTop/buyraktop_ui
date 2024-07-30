import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf, faThumbsUp, faTruck, faWallet } from '@fortawesome/free-solid-svg-icons';

import { AdvertisingBlockOne, AdvertisingBlockTwo, MainInfoContainer } from '../../components';
import { HOW_COOK_YOUTUBE_URL } from '../../utils';
import { aboutUsPhoto1280, aboutUsPhoto1851, aboutUsPhoto2797, aboutUsPhoto3308, aboutUsPhoto3702, aboutUsPhoto480 } from '../../assets';
import style from './aboutUs.module.scss';

export const AboutUs: React.FC = () => (
    <div className="d-flex flex-column">
        {/* Main Background Photo Block */}
        <MainInfoContainer
            photo480={aboutUsPhoto480}
            photo1280={aboutUsPhoto1280}
            photo1851={aboutUsPhoto1851}
            photo2797={aboutUsPhoto2797}
            photo3308={aboutUsPhoto3308}
            photo3702={aboutUsPhoto3702}
        />

        {/* Advertising Block */}
        <AdvertisingBlockOne />

        {/* Content Block */}
        <AboutUsBlock />

        {/* Advertising Block */}
        <AdvertisingBlockTwo />
    </div>
);

const AboutUsBlock: React.FC = () => {
    const { t: translation } = useTranslation();

    return (
        <div className={`${style.mainContainer} d-flex flex-column justify-content-center align-items-center px-3 py-5`}>
            <h2 className={style.header}>{translation('about_us.about_us')}</h2>

            <div className={`${style.description} py-5 text-break text-center`}>
                {translation('about_us.about_description_1')}&nbsp;
                <span>"{translation('share_info.name_company')}"</span>&nbsp;
                {translation('about_us.about_description_2')}.
            </div>

            <h2 className={style.header}>{translation('about_us.why_we')}?</h2>

            <div className={`${style.description} py-5 text-break text-center w-100`}>
                <div className="d-flex flex-column flex-md-row justify-content-around gap-4">
                    <div className="d-flex flex-column gap-4 px-3 w-100">
                        <div className={`${style.qualityItem} d-flex align-items-center px-2 py-4`}>
                            <FontAwesomeIcon className={style.icon} icon={faThumbsUp} />
                            <div className="ps-3 text-start">{translation('about_us.quality_1')}</div>
                        </div>
                        <div className={`${style.qualityItem} d-flex align-items-center px-2 py-4`}>
                            <FontAwesomeIcon className={style.icon} icon={faTruck} />
                            <div className="ps-3 text-start">{translation('about_us.quality_2')}</div>
                        </div>
                    </div>

                    <div className="d-flex flex-column gap-4 px-3 w-100">
                        <div className={`${style.qualityItem} d-flex align-items-center px-2 py-4`}>
                            <FontAwesomeIcon className={style.icon} icon={faLeaf} />
                            <div className="ps-3 text-start">{translation('about_us.quality_3')}</div>
                        </div>
                        <div className={`${style.qualityItem} d-flex align-items-center px-2 py-4`}>
                            <FontAwesomeIcon className={style.icon} icon={faWallet} />
                            <div className="ps-3 text-start">{translation('about_us.quality_4')}</div>
                        </div>
                    </div>
                </div>
            </div>

            <h2 className={style.header}>{translation('about_us.how_we_cook')}?</h2>

            <div className={`${style.videoContainer} position-relative my-5 w-100 h-0 overflow-hidden`}>
                <iframe
                    title='videoFrame'
                    className="position-absolute left-0 top-0 w-100 h-100"
                    src={HOW_COOK_YOUTUBE_URL}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
            </div>
        </div>
    )
}