import styles from './CardList.module.css';
import {CardListItem} from "../card-list-item/CardListItem.jsx";
import {useEffect, useState} from "react";

export const CardList = () => {
    const [state, setState] = useState("PENDING");
    const [listItems, setListItems] = useState([]);

    useEffect(() => {
        fetch('/FETCH/logements.json')
            .then(async response => await response.json())
            .then((data) => {
                setListItems(data);
                setState("SUCCESS")
            });
    }, [])

    return <>
        <div className={styles.content}>
            { state === "PENDING" ?
                <h1>Pending</h1> :
                listItems.map((item, index) =>
                    <CardListItem value={item} key={index}></CardListItem>
                )
            }
        </div>
    </>
}
