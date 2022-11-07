import styles from "../styles/About.module.css";
import TextArea from "../components/TextArea";

function About() {
  return (
    <div className={styles.container}>
      <TextArea title="About us
" content="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."/>
    </div>
  );
}
export default About;

