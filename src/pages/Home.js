import styles from "../styles/Home.module.css";
import TextArea from "../components/TextArea";
function home() {
  return (
    <>
      <div className={styles.container}>
        <TextArea 
        title="Back to School" subtitle="New goals to achieve
        " content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu enim eget ligula lacinia accumsan. Mauris congue luctus tortor non laoreet. Proin in nibh volutpat, posuere dolor vel, vulputate eros.
        Aliquam purus est, suscipit non nunc eu, sagittis porta nisi. Class aptent taciti sociosqu ad litora torquent per conubia.
        Quisque vestibulum efficitur mollis." />
      </div>
    </>
  );
}
export default home;
