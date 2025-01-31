import styles from './HeroBanner.module.css';

export const HeroBanner = (prop) => {
    const title = prop.title ? prop.title : '';
    return <>
        <section className={styles.content}>
            <img src={prop.src} alt={title}/>
            <h1>{ title }</h1>
        </section>
    </>
}
