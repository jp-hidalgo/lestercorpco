import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        Hecho con <img src="/netliheart.svg" alt="Netlify Logo" className={styles.logo} /> para ustedes
      </footer>
    </>
  )
}
