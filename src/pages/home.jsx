import styles from "../styles/home.module.css";
import Header from "../components/header";
import Footer from "../components/footer";
import Projects from "../components/project";

export default function Home() {
  return (
    <main>
      <div className={styles.namecard}>
        <div className={styles.greeting}>
          <h2>
            Thank you for visiting my portfolio site. Please see the projects
            linked below!
          </h2>
        </div>
      </div>
      <div className={styles.placeholder}>
        <h1>Kaitlin Shumake Portfolio</h1>
      </div>
      <div className={styles.homebody}>
      <section>
        <div className={styles.projectone}>
        <div className={styles.projectcard}>
        <Projects
          title={"Project 1"}
          description={"This project included a design for a local business."}
          link={
            "https://stephaniemarzan.github.io/p1-wallshein-lewis-marzan-shumake/"
          }
        />
        </div>
      </div>
      </section>
      <section>
      <div className={styles.projecttwo}>
        <div className={styles.projectcard}>
          <Projects title={"Project 2"} description={"This project was completed as part of an assignment to create a website for a non-profit organization."} link={"https://kjm2023.github.io/p2-shumake-lewis-cigarroa-mcleod/"} />
        </div>
        </div>
        </section>
        <section>
          <div className={styles.projectthree}>
          <div className={styles.projectcard}>
          <Projects title={"Project 3"} description={"This project was to design a website based on a movie."} link={"https://keshumake.github.io/gw3_shumake_wallshein_bennington/"} />
        </div>
        </div>
        </section>
        </div>
    </main>
  );
}
