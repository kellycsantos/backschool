import styles from '../styles/Navbar.module.css'

function Navbar(){
    return(
        <nav className={styles.menu}>
            <a href="/">Home</a>
            <a href="/about">Sobre nós</a>
            <a href="/fac">Fale Conosco</a>
        </nav>
    )
}
export default Navbar;
