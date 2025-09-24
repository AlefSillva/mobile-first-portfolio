import styles from './SkillCard.module.css'

export default function SkillCard({ title, score, maxScore }) {
  return (
    <div className={styles.SkillCard}>
      <p className={styles.SkillCard_title}>{title}</p>
      <p className={styles.SkillCard_scoreContainer}>
        <span className={styles.SkillCard_score}>{score}</span> de {maxScore}
      </p>
    </div>
  );
}
