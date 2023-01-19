import styles from '../styles/home.module.css'
import Header from '../components/header'
import Footer from '../components/footer'

export default function Home() {
  return (
    <Header />
    <main>
      <div>
      <h1 className={styles.placeholder}>Kaitlin Shumake Portfolio</h1>
      </div>
      <div className='homebody'>
        <section className={projectone}>
          
        </section>
        <section className={projecttwo}>
          
        </section>
        <section className={projectthree}>
          
        </section>
      </div>
    </main>
  )
}