import styles from '../styles/contact.module.css'

export default function Contact() {
    return (
        <main className={styles.contactmain}>
            <div className={styles.greeting}>
                <h1>Contact Me</h1>
            </div>
            <section className={styles.contactinfo}>
                <p>Please see the below links to my Github and Linkedin pages.</p>
                <button><a href="https://www.linkedin.com/in/kaitlinshumake/">LinkedIn</a></button>
                <button><a href="https://github.com/keshumake">Github</a></button>
            </section>
        </main>
    )
}