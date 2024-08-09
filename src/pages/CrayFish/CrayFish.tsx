import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { crayfishPhoto480, crayfishPhoto1280, crayfishPhoto1851, crayfishPhoto2797, crayfishPhoto3308, crayfishPhoto3702 } from '../../assets';
import { MainInfoContainer, AdvertisingBlockOne, AdvertisingBlockTwo, CrayCard } from '../../components';
import { CRAYFISH, CrayType } from '../../utils';
import style from './crayFish.module.scss';

export const CrayFish: React.FC = () => (
    <div className="d-flex flex-column">
        {/* Main Background Photo Block */}
        <MainInfoContainer
            photo480={crayfishPhoto480}
            photo1280={crayfishPhoto1280}
            photo1851={crayfishPhoto1851}
            photo2797={crayfishPhoto2797}
            photo3308={crayfishPhoto3308}
            photo3702={crayfishPhoto3702}
        />

        {/* Advertising Block */}
        <AdvertisingBlockOne />

        {/* Products Block */}
        <CrayBlock />

        {/* Advertising Block */}
        <AdvertisingBlockTwo />
    </div>
);

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
                            {
                                CRAYFISH.map(({ id, isAvailable, photo, craySize, crayType, weight, size, count, price }) => (
                                    crayType === CrayType.BOIL
                                    && <CrayCard
                                        key={id}
                                        isAvailable={isAvailable}
                                        crayPhoto={photo}
                                        craySize={craySize}
                                        weightItem={weight}
                                        sizeItem={size}
                                        countItem={count}
                                        priceItem={price}
                                    />
                                ))
                            }
                        </div>
                    </div>

                    <div id="cray-raw-pills" className="tab-pane fade" role="tabpanel" aria-labelledby="cray-raw-tab">
                        <div className={`${style.cardsBlock} d-flex flex-wrap justify-content-center align-items-center w-100 gap-3`}>
                            {
                                CRAYFISH.map(({ id, isAvailable, photo, craySize, crayType, weight, size, count, price }) => (
                                    crayType === CrayType.RAW
                                    && <CrayCard
                                        key={id}
                                        isAvailable={isAvailable}
                                        crayPhoto={photo}
                                        craySize={craySize}
                                        weightItem={weight}
                                        sizeItem={size}
                                        countItem={count}
                                        priceItem={price}
                                    />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
