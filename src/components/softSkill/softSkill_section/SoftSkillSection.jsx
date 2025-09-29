import SoftSkillCard from "../softSkill_card/SoftSkillCard";
import styles from "./SoftSkillSection.module.css";

export default function SoftSkillSection({ title, softSkills }) {
  return (
    <div className={styles.SoftSkillSection_Container}>
      <h3 className={styles.SoftSkillSection_title}>{title}</h3>
      <section className={styles.SoftSkillSection}>
        <>
          {softSkills.map((skill, i) => (
            <SoftSkillCard
              key={i}
              title={skill.title}
              description={skill.description}
            />
          ))}
        </>
      </section>
    </div>
  );
}
