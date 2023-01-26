import styles from "../styles/home.module.css";
import Header from "../components/header";
import Footer from "../components/footer";
import Projects from "../components/project";

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
      <Projects />
    </main>
  );
}
