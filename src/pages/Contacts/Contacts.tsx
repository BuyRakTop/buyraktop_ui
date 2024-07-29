import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot, faMobileScreenButton } from '@fortawesome/free-solid-svg-icons';

import { AdvertisingBlockOne, AdvertisingBlockTwo, MainInfoContainer } from '../../components';
import { GOOGLE_LOCATION_URL, REVIEWS } from '../../utils';
import { crayfishPhoto } from '../../assets';
import style from './contacts.module.scss';

export const Contacts: React.FC = () => (
    <div className="d-flex flex-column">
        {/* Main Background Photo Block */}
        <MainInfoContainer mainBackgroundPhoto={crayfishPhoto} />

        {/* Advertising Block */}
        <AdvertisingBlockOne />

        {/* Contacts Block */}
        <ContactsBlock />

        {/* Advertising Block */}
        <AdvertisingBlockTwo />
    </div>
);

const ContactsBlock: React.FC = () => {
    const { t: translation } = useTranslation();
    const sliderSettings = {
        arrows: false,
        dots: false,
        infinite: true,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    return (
        <div className={`${style.mainContainer} d-flex flex-column justify-content-center align-items-center px-3 py-5 px-md-4 px-xl-5`}>
            <h2 className={style.header}>{translation('contacts.contacts')}</h2>

            <div className="d-flex flex-column flex-xl-row justify-content-center align-items-center w-100 gap-xl-3">
                {/* Contact Form */}
                <div className={`${style.contactForm} mt-5 py-4 px-3 px-md-4 w-100 rounded-3`}>
                    <h6 className={`${style.header} text-center py-3 py-md-4`}>{translation('contacts.send_message')}</h6>

                    <div className="d-flex flex-column flex-md-row gap-3">
                        <div className={`${style.formGroup} form-group pb-3 w-100`}>
                            <label htmlFor="firstName" className="form-label">{translation('contacts.name')}</label>
                            <input id="firstName" className={`${style.formControl} form-control`} type="text" />
                        </div>

                        <div className={`${style.formGroup} form-group pb-3 w-100`}>
                            <label htmlFor="email" className="form-label">{translation('contacts.email')}</label>
                            <input id="email" className={`${style.formControl} form-control`} type="text" />
                        </div>
                    </div>

                    <div className={`${style.formGroup} form-group pb-3`}>
                        <label htmlFor="topic" className="form-label">{translation('contacts.topic')}</label>
                        <input id="topic" className={`${style.formControl} form-control`} type="text" />
                    </div>

                    <div className={`${style.formGroup} form-group pb-3`}>
                        <label htmlFor="message" className="form-label">{translation('contacts.message')}</label>
                        <textarea id="message" className={`${style.formControl} form-control`}></textarea>
                    </div>

                    <div className={`${style.sendBtn} d-flex justify-content-center align-items-center mt-4 pt-2`}>
                        <h5>{translation('buttons.send')}</h5>
                    </div>
                </div>

                {/* Contact date */}
                <div className={`${style.contactInfo} d-flex flex-wrap flex-xl-column justify-content-center align-items-center mt-5 py-4 px-3 px-md-4 w-100 gap-5`}>
                    <div className={`${style.contactItem} d-flex align-items-center px-2 py-4`}>
                        <FontAwesomeIcon className={style.icon} icon={faMobileScreenButton} />
                        <div className="ps-4 text-start">
                            <span className="fw-bold">{translation('contacts.phone')}</span><br />
                            {translation('share_info.phone_delivery')}
                        </div>
                    </div>

                    <div className={`${style.contactItem} d-flex align-items-center px-2 py-4`}>
                        <FontAwesomeIcon className={style.icon} icon={faEnvelope} />
                        <div className="ps-4 text-start">
                            <span className="fw-bold">{translation('contacts.email')}</span><br />
                            {translation('share_info.email_address')}
                        </div>
                    </div>

                    <div className={`${style.contactItem} d-flex align-items-center px-2 py-4`}>
                        <FontAwesomeIcon className={style.icon} icon={faLocationDot} />
                        <div className="ps-4 text-start">
                            <span className="fw-bold">{translation('contacts.address')}</span><br />
                            {translation('share_info.m_brovary')}<br />
                            {translation('share_info.street')}
                        </div>
                    </div>
                </div>
            </div>

            <div className={`${style.mapContainer} position-relative my-5 w-100 h-0 overflow-hidden`}>
                <iframe
                    title='mapFrame'
                    className="position-absolute left-0 top-0 w-100 h-100"
                    src={GOOGLE_LOCATION_URL}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>

            <h3 className={`${style.header} py-5`}>{translation('contacts.review_our_clients')}</h3>

            <div className={`${style.sliderContainer} w-100`}>
                <Slider {...sliderSettings}>
                    {
                        REVIEWS.map((item) => (
                            <div className="px-3 py-5" style={{ width: '343px'}} key={item.id}>
                                <div className={`${style.slideCard} position-relative pt-5 pb-3`}>
                                    <img className={`${style.reviewerImg} position-absolute rounded-circle`} src={item.avatar} alt={item.avatar} />
                                    <h6 className='fw-bold pt-3 text-center'>{item.name}</h6>
                                    <div className='text-center'>{item.comment}</div>
                                </div>
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </div>
    )
}