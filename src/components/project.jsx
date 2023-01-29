import styles from '../styles/home.module.css'

export default function Projects(props) {
    return(
        <div className={styles.homebody}>
        <div className={styles.projectcard}>
            <h2>{props.description}</h2>
            <button>
              <a href={props.link}>
                {props.title}
              </a>
            </button>
            </div>
        </div>
        );
}