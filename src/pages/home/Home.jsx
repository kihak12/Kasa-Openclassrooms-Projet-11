import styles from './Home.module.css'
import {HeroBanner} from "../../components/hero-banner/HeroBanner.jsx";
import {CardList} from "../../components/card-list/CardList.jsx";
import {Footer} from "../../components/footer/Footer.jsx";
import {Header} from "../../components/header/Header.jsx";

export const Home = () => {
    return <>
        <Header></Header>
        <div className={styles.content}>
            <div className={styles.padded}>
                <HeroBanner title="Chez vous, partout et ailleurs" src="./assets/images/Image%20source%201.jpg"/>
            </div>
            <div className={styles.mobilePadded}>
                <CardList/>
            </div>
        </div>
        <Footer/>
    </>
}
