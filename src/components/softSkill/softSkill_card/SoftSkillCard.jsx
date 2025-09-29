import styles from "./SoftSkillCard.module.css";

export default function SoftSkillCard({ title, description }) {
  return (
    <div className={styles.SoftSkillCard_Container}>
      <h4 className={styles.SoftSkillCard_title}>{title}</h4>
      <p className={styles.description}>{description}</p>
    </div>
  );
}
