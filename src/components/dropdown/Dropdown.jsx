import styles from './Dropdown.module.css';
import {useRef, useState} from "react";
import roundedArrow from "/src/assets/icons/rounded-arrow.svg";

export const Dropdown = (prop) => {
    const [opened, setOpened] = useState(!!prop.open);
    const dropdownContentRef = useRef(null); // Create a reference

    const title = prop.title;
    const content = prop.content;
    const type = prop.type === 'text' ? 'text' : 'list';

    const toggleDropdown = () => {
        setOpened(!opened)
        console.dir(dropdownContentRef.current)
    };

    return <>
        <div >
            <div className={styles.content}>
                <div className={styles.buttonContent}>
                    <button onClick={toggleDropdown}>
                        <span>{title}</span>
                        <div className={opened ? styles.rotate180 : ''}>
                            <img src={roundedArrow} alt="Dropdown open orientation"/>
                        </div>
                    </button>
                    <div className={styles.buttonBackground} open={opened}></div>
                </div>
                <div className={styles.dropdownContainer} open={opened}
                     style={opened ? {height: dropdownContentRef.current.clientHeight} : {height: 0}}>
                    <div ref={dropdownContentRef} className={styles.dropdownContent}>
                        {
                            type === 'text' && content
                        }
                        {
                            type === 'list' && content.map((item, index) => <p key={index}>{item}</p>)
                        }
                    </div>
                </div>
            </div>
        </div>
    </>
}
