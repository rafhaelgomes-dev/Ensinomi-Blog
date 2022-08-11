import styles from "./Footer.module.css"

const Footer = () => {
  return (
    <div>
     <footer className={styles.footer}>
       <h3>Compartilhe seus conhecimentos sobre tecnologia!</h3>
       <p>EnsinomiBlog &copy; 2022</p>
     </footer>
    </div>
  )
}

export default Footer;