import styles from "./SkillCard.module.css";

export default function SkillCard({ title, nivel }) {
  return (
    <div className={styles.SkillCard}>
      <p className={styles.SkillCard_title}>{title}</p>
      <p className={styles.SkillCard_nivel_Container}>
        Nível: <span className={styles.SkillCard_nivel}>{nivel}</span>
      </p>
    </div>
  );
}
