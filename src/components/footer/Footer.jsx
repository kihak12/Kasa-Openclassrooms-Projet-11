import styles from './Footer.module.css';
import {KasaIcon} from "../kasa-icon/KasaIcon.jsx";

export const Footer = () => {
    return <>
        <footer className={styles.content}>
            <KasaIcon fill="white"></KasaIcon>
            <span>© 2020 Kasa. All rights reserved</span>
        </footer>
    </>
}
