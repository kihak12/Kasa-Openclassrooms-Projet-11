import {Link} from "react-router-dom";
import styles from "./HeaderLink.module.css";

export const HeaderLink = (prop) => {
    const classList = () =>  {
        return `${styles.headerLink} ${prop.selected ? styles.underline : ""}`;
    }

    return <>
        <Link to={prop.path} className={classList()}>{prop.text}</Link>
    </>
}
