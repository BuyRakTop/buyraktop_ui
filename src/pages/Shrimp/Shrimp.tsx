import {
    shrimpAtlantic, shrimpBlackSea, shrimpLangoust, shrimpsPhoto1280, shrimpsPhoto1851,
    shrimpsPhoto2797, shrimpsPhoto3308, shrimpsPhoto3702, shrimpsPhoto480, shrimpTiger,
} from '../../assets';
import { AdvertisingBlockOne, AdvertisingBlockTwo, MainInfoContainer, ShrimpCard, ShrimpType } from '../../components';
import style from './shrimp.module.scss';

export const Shrimp: React.FC = () => (
    <div className="d-flex flex-column">
        {/* Main Background Photo Block */}
        <MainInfoContainer
            photo480={shrimpsPhoto480}
            photo1280={shrimpsPhoto1280}
            photo1851={shrimpsPhoto1851}
            photo2797={shrimpsPhoto2797}
            photo3308={shrimpsPhoto3308}
            photo3702={shrimpsPhoto3702}
        />

        {/* Advertising Block */}
        <AdvertisingBlockOne />

        {/* Products Block */}
        <ShrimpBlock />

        {/* Advertising Block */}
        <AdvertisingBlockTwo />
    </div>
);

const ShrimpBlock: React.FC = () => (
    <div className={`${style.productContainer} d-flex flex-column justify-content-center align-items-center`}>
        <div className="d-flex flex-column justify-content-center align-items-center py-4">
            <div className={`${style.cardsBlock} d-flex flex-wrap justify-content-center align-items-center w-100 gap-3`}>
                <ShrimpCard isAvailable={true} shrampPhoto={shrimpAtlantic} crayType={ShrimpType.Atlantic} />
                <ShrimpCard isAvailable={true} shrampPhoto={shrimpLangoust} crayType={ShrimpType.Langoustines} />
                <ShrimpCard isAvailable={false} shrampPhoto={shrimpBlackSea} crayType={ShrimpType.BlackSea} />
                <ShrimpCard isAvailable={true} shrampPhoto={shrimpTiger} crayType={ShrimpType.Tigers} />
            </div>
        </div>
    </div>
)
