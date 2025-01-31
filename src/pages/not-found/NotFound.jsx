import styles from './NotFound.module.css';
import {Footer} from "../../components/footer/Footer.jsx";
import {Header} from "../../components/header/Header.jsx";
import {Link} from "react-router-dom";

export const NotFound = () => {
    return <>
        <Header></Header>
        <div className={styles.content}>
            <h1>404</h1>
            <h2>Oups! La page que vous demandez n'existe pas.</h2>
            <Link to="/" className={styles.buttonLink}>Retourner sur la page d’accueil</Link>
        </div>
        <Footer />
    </>
}
