import styles from './Carousel.module.css';
import {useState} from "react";
import arrow from "/src/assets/icons/arrow.svg";

export const Carousel = (props) => {
    const [currentImage, setCurrentImage] = useState(0);
    const images = props.images;

    const totalLength = images.length;

    const previousImage = () => {
        if (currentImage > 0) {
            setCurrentImage(currentImage - 1)
        }else {
            setCurrentImage(totalLength - 1);
        }
    }
    const nextImage = () => {
        if (currentImage < (totalLength - 1)) {
            setCurrentImage(currentImage + 1)
        }else {
            setCurrentImage(0);
        }
    }

    const getCarouselStepLabel = () => {
        return `${currentImage + 1} / ${totalLength}`
    }

    return <>
        <div className={styles.content}>
            <div className={styles.imageContainer}>
                {
                    images.map((image, index) => (
                        <img src={image} alt="" key={index}
                             style={currentImage === index ? {display: "block"} : {display: "none"}}/>
                    ))
                }
            </div>
            {
                totalLength > 1 &&
                    <div className={styles.imageInfo}>
                        <img src={arrow} className={styles.rotate180} onClick={previousImage} alt="See previous image"/>
                        <span>{getCarouselStepLabel()}</span>
                        <img src={arrow} onClick={nextImage} alt="See next image"/>
                    </div>
            }
    </div>
</>
}
