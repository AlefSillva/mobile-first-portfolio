import Typewriter from "../effects/Typewriter";
import styles from "./Header.module.css";

export default function Header({ title }) {
  return (
    <header className={styles.Header}>
      <Typewriter text={title} speed={120} errorChance={0.2} />
    </header>
  );
}
