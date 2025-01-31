import styles from './Logement.module.css';

import {colorMain, colorGray} from "../../shared/variables.module.scss";

import {useNavigate, useParams} from "react-router-dom";
import {Header} from "../../components/header/Header.jsx";
import {useEffect, useState} from "react";
import {Carousel} from "../../components/carousel/Carousel.jsx";
import {StarIcon} from "../../components/star-icon/StarIcon.jsx";
import {Footer} from "../../components/footer/Footer.jsx";
import {Dropdown} from "../../components/dropdown/Dropdown.jsx";

export const Logement = () => {
    const navigate = useNavigate();

    let { id } = useParams();

    const [state, setState] = useState("PENDING");
    const [logementDetails, setLogementDetails] = useState({});

    useEffect(() => {
        fetch('/FETCH/logements.json')
            .then(async response => await response.json())
            .then((data) => {
                const logement = data.find(item => item.id === id);
                if (logement) {
                    setLogementDetails(logement);
                    setTimeout(() => {
                        setState("SUCCESS")
                    }, 750)
                }else {
                    navigate('/not-found');
                }
            }).catch((error) => {
                console.error(error)
                setState("ERROR"); });
    }, [])

    const fillStarIcon = () => {
        const starsDOMElements = [];
        for (let i = 0; i < parseInt(logementDetails.rating); i++) {
            starsDOMElements.push(<StarIcon fill={colorMain} />)
        }
        for (let i = starsDOMElements.length; starsDOMElements.length < 5; i++) {
            starsDOMElements.push(<StarIcon fill={colorGray} />)
        }
        return starsDOMElements;
    }

    return <>
        <Header></Header>
        <div className={styles.content}>
            {
                state === "PENDING" &&
                <>
                    <div className={styles.pulseAnimation}>
                        <div style={{height: 350 + 'px', width: 100 + '%', backgroundColor: "#C4C4C4"}}></div>
                        <div className={styles.logementDetailsContainer}>
                            <div className={styles.logementDetails}>
                                <div style={{display: "flex", flexDirection: "column", gap: 5 + 'px'}}>
                                    <div style={{height: 48 + 'px', width: 70 + '%', backgroundColor: "#C4C4C4"}}></div>
                                    <div style={{height: 30 + 'px', width: 100 + 'px', backgroundColor: "#C4C4C4"}}></div>
                                </div>
                                <div className={styles.logementTags}>
                                    <div style={{height: 24 + 'px', width: 150 + 'px', backgroundColor: "#C4C4C4"}}></div>
                                    <div style={{marginLeft: 10 + 'px', height: 24 + 'px', width: 150 + 'px', backgroundColor: "#C4C4C4"}}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            }
            {
                state === "ERROR" &&
                <>
                    <div className={styles.errorBlock}>
                        <h1>
                            Une erreur est survenu lors du chargement de la page, merci de réessayer ultérieurement.
                        </h1>
                    </div>
                </>
            }
            {
                state === "SUCCESS" &&
                <>
                    <Carousel images={logementDetails.pictures}/>
                    <div className={styles.logementDetailsContainer}>
                        <div className={styles.logementDetails}>
                            <div>
                                <h1>{logementDetails.title}</h1>
                                <h2>{logementDetails.location}</h2>
                            </div>
                            <div className={styles.logementTags}>
                                {
                                    logementDetails.tags.map(tag => (
                                        <span key={tag} className={styles.tag}>{tag}</span>
                                    ))
                                }
                            </div>
                        </div>
                        <div className={styles.logementSecondaryDetails}>
                            <div className={styles.hostDetails}>
                                <div className={styles.hostName}>
                                    {logementDetails.host.name.split(" ").map((word, index) => (
                                        <div key={index}>{word}</div>)
                                    )}
                                </div>
                                <img src={logementDetails.host.picture} alt={logementDetails.host.name}/>
                            </div>
                            <div className={styles.starsLine}>
                                {
                                    fillStarIcon().map((icon, index) => (
                                        <span key={index}>{icon}</span>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className={styles.logementDropdowns}>
                        <Dropdown title="Description" content={logementDetails.description} type="text"/>
                        <Dropdown title="Équipements" content={logementDetails.equipments} type="list"/>
                    </div>
                </>
            }
        </div>
        <Footer/>
    </>
}
