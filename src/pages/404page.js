import styles from '../styles/404page.module.css'
function errorPage(){
    return(
        <div className={styles.container}>
            <h1> 404 Pagina não encontrada.</h1>
            <h2>Essa pagina ainda está em contrução, o que achar de voltar ao <a className={styles.back} href="/">inicio</a>?</h2>
        </div>
           
   
    )
}

export default errorPage