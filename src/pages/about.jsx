import styles from "../styles/about.module.css";

export default function About() {
  return (
    <main className={styles.aboutmain}>
      <div>
        <h1>About Me</h1>
      </div>
      <section>
        <p>
          Thank you for wanting to read a little about me! My name is Kaitlin
          Shumake and I am a born-and-raised Florida native. I studied at
          University of North Florida for my undergraduate program and am
          currently pursuing a master’s degree in Web Design from the University
          of Florida. Throughout my current program I’ve studied graphic design,
          HTML, CSS, and JavaScript. I am currently learning React and looking
          forward to my graduation later this year.
        </p>
        <p>
          My work history mainly includes positions revolving around data
          management and data quality, including the fields of logistics,
          healthcare, and banking. However, I am anxious to get started in my
          new field.
        </p>
        <p>
          When I'm not working or studying, I enjoy taking trips
          with my husband, spending time with our two dogs and three cats,
          reading for my book clubs, and playing video games. Please reach out
          if there is anything about me you would like to know more about!
        </p>
      </section>
    </main>
  );
}
