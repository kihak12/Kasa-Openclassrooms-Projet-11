import styles from './Header.module.css';
import {HeaderLink} from "../header-link/HeaderLink.jsx";
import {useLocation, useNavigate} from "react-router-dom";
import {KasaIcon} from "../kasa-icon/KasaIcon.jsx";
import {colorMain} from "../../shared/variables.module.scss";

export const Header = () => {
    const location = useLocation();

    const navigate = useNavigate();

    const navigateToMainPage = () => {
        navigate('/');
    }
    return <>
        <header className={styles.header}>
            <div className={styles.content}>
                <div onClick={navigateToMainPage} className={styles.logo}>
                    <KasaIcon fill={colorMain} />
                </div>
                <nav>
                    <HeaderLink text="Accueil" path="/" selected={location.pathname === "/"}></HeaderLink>
                    <HeaderLink text="A Propos" path="/about" selected={location.pathname === "/about"}></HeaderLink>
                </nav>
            </div>
        </header>
    </>
}
