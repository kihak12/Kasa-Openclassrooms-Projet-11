import styles from './CardListItem.module.css';
import { useNavigate } from "react-router-dom";

export const CardListItem = (prop) => {
    const navigate = useNavigate();

    const title = prop.value.title;
    const imageSrc = prop.value.cover;
    const id = prop.value.id;

    const navigateToLogementDetails = () => {
        const url = `/logement/${id}`;
        navigate(url);
    }

    return <>
        <div className={styles.content} onClick={navigateToLogementDetails}>
            <img src={imageSrc} alt=""/>
            <h1>{title}</h1>
        </div>
    </>
}
