import styles from '../styles/home.module.css'

export default function Projects({ children }) {
    return(
        <div className={styles.homebody}>
        <section className={styles.projectone}>
           { children }
        </section>
        <section className={styles.projecttwo}>
            { children }
        </section>
        <section className={styles.projectthree}>
            { children }
        </section>
        </div>
        );
}