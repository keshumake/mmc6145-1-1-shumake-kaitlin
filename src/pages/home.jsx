import styles from "../styles/home.module.css";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Home() {
  return (
    <main>
      <div className={styles.namecard}>
        <div className={styles.greeting}>
          <h2>Thank you for visiting my portfolio site. Please see the projects
          linked below!</h2>
        </div>
      </div>
      <div className={styles.placeholder}>
        <h1>Kaitlin Shumake Portfolio</h1>
      </div>
      <div className={styles.homebody}>
        <section className={styles.projectone}>
          <div className={styles.projectcard}>
            <h2>This project included a design for a local business.</h2>
            <button>
              <a href="https://stephaniemarzan.github.io/p1-wallshein-lewis-marzan-shumake/">
                Project 1
              </a>
            </button>
          </div>
        </section>
        <section className={styles.projecttwo}>
          <div className={styles.projectcard}>
            <h2>
              This project was completed as part of an assignment to create a
              website for a non-profit organization.
            </h2>
            <button>
              <a href="https://kjm2023.github.io/p2-shumake-lewis-cigarroa-mcleod/">
                Project 2
              </a>
            </button>
          </div>
        </section>
        <section className={styles.projectthree}>
          <div className={styles.projectcard}>
            <h2>This project was to design a website based on a movie.</h2>
            <button>
              <a href="https://keshumake.github.io/gw3_shumake_wallshein_bennington/">
                Project 3
              </a>
            </button>
            <h2></h2>
          </div>
        </section>
      </div>
    </main>
  );
}
