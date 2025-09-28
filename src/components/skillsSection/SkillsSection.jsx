import SkillCard from "../skillCard/SkillCard";
import styles from "./SkillsSection.module.css";

export default function SkillsSection({ title, skills }) {
  return (
    <div className={styles.SkillsSection_container}>
      <h3 className={styles.SkillsSection_title}>{title}</h3>
      <section className={styles.SkillsSection}>
        {skills.map((skill, i) => (
          <SkillCard 
            key={i}
            title={skill.title}
            score={skill.score}
            maxScore={skill.maxScore}
          />
        ))}
      </section>
    </div>
  );
}
