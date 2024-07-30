import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ReactLoading from 'react-loading';

import {
    crayBoilPhoto,
    crayRawPhoto,
    crayfishPhoto,
} from '../../assets';
import {
    AdvertisingBlockOne,
    AdvertisingBlockTwo,
    MainInfoContainer,
    CrayCard,
    CraySize,
    CrayType,
} from '../../components';
import style from './crayFish.module.scss';

export const CrayFish: React.FC = () => {
    // const [isLoading, setIsLoading] = useState(true);
    // setTimeout(() => setIsLoading(false), 1500);
    const isLoading = false;

    return (
        <div className="d-flex flex-column">
            {
                !isLoading
                    ? (
                        <>
                            {/* Main Background Photo Block */}
                            <MainInfoContainer mainBackgroundPhoto={crayfishPhoto} />

                            {/* Advertising Block */}
                            <AdvertisingBlockOne />

                            {/* Products Block */}
                            <CrayBlock />

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

const CrayBlock: React.FC = () => {
    const { t: translation } = useTranslation();
    const [isActiveCrayType, setIsActiveCrayType] = useState(true);

    return (
        <div className={`${style.productContainer} d-flex flex-column justify-content-center align-items-center`}>
            <div className="d-flex flex-column justify-content-center align-items-center py-4">
                <ul id="pills-tab" className="nav nav-pills" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button
                            id="cray-boil-tab"
                            className="nav-link active crayBoilLink"
                            data-bs-toggle="pill"
                            data-bs-target="#cray-boil-pills"
                            type="button"
                            role="tab"
                            aria-controls="cray-boil-pills"
                            aria-selected="true"
                            style={isActiveCrayType
                                ? { backgroundColor: 'transparent', color: '#4DE0CD', textDecoration: 'underline' }
                                : { backgroundColor: 'transparent', color: '#FFFFFF', textDecoration: 'none' }
                            }
                            onClick={() => setIsActiveCrayType(true)}
                        >{translation('cray_fish.boil')}</button>
                    </li>

                    <li className="nav-item" role="presentation">
                        <button
                            id="cray-raw-tab"
                            className="nav-link"
                            data-bs-toggle="pill"
                            data-bs-target="#cray-raw-pills"
                            type="button"
                            role="tab"
                            aria-controls="cray-raw-pills"
                            aria-selected="false"
                            style={isActiveCrayType
                                ? { backgroundColor: 'transparent', color: '#FFFFFF', textDecoration: 'none' }
                                : { backgroundColor: 'transparent', color: '#4DE0CD', textDecoration: 'underline' }
                            }
                            onClick={() => setIsActiveCrayType(false)}
                        >{translation('cray_fish.raw')}</button>
                    </li>
                </ul>

                <div id="pills-tabContent" className="tab-content pt-4">
                    <div id="cray-boil-pills" className="tab-pane fade show active" role="tabpanel" aria-labelledby="cray-boil-tab">
                        <div className={`${style.cardsBlock} d-flex flex-wrap justify-content-center align-items-center w-100 gap-3`}>
                            <CrayCard isAvailable={true} crayPhoto={crayBoilPhoto} craySize={CraySize.XS} crayType={CrayType.BOIL} />
                            <CrayCard isAvailable={true} crayPhoto={crayBoilPhoto} craySize={CraySize.S} crayType={CrayType.BOIL} />
                            <CrayCard isAvailable={false} crayPhoto={crayBoilPhoto} craySize={CraySize.M} crayType={CrayType.BOIL} />
                            <CrayCard isAvailable={true} crayPhoto={crayBoilPhoto} craySize={CraySize.L} crayType={CrayType.BOIL} />
                            <CrayCard isAvailable={true} crayPhoto={crayBoilPhoto} craySize={CraySize.XL} crayType={CrayType.BOIL} />
                            <CrayCard isAvailable={true} crayPhoto={crayBoilPhoto} craySize={CraySize.XXL} crayType={CrayType.BOIL} />
                        </div>
                    </div>

                    <div id="cray-raw-pills" className="tab-pane fade" role="tabpanel" aria-labelledby="cray-raw-tab">
                        <div className={`${style.cardsBlock} d-flex flex-wrap justify-content-center align-items-center w-100 gap-3`}>
                            <CrayCard isAvailable={true} crayPhoto={crayRawPhoto} craySize={CraySize.XS} crayType={CrayType.RAW} />
                            <CrayCard isAvailable={true} crayPhoto={crayRawPhoto} craySize={CraySize.S} crayType={CrayType.RAW} />
                            <CrayCard isAvailable={true} crayPhoto={crayRawPhoto} craySize={CraySize.M} crayType={CrayType.RAW} />
                            <CrayCard isAvailable={true} crayPhoto={crayRawPhoto} craySize={CraySize.L} crayType={CrayType.RAW} />
                            <CrayCard isAvailable={true} crayPhoto={crayRawPhoto} craySize={CraySize.XL} crayType={CrayType.RAW} />
                            <CrayCard isAvailable={true} crayPhoto={crayRawPhoto} craySize={CraySize.XXL} crayType={CrayType.RAW} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
