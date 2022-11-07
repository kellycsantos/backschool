import styles from "../styles/TextArea.module.css";
function TextArea({ title, subtitle, content }) {
  return (
    <div className={styles.container}>
      <h1>{title}</h1>
      <h2>{subtitle} </h2>
      <p>{content}</p>
    </div>
  );
}
export default TextArea;
