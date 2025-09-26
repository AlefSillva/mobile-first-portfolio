import styles from "./ProjectCard.module.css";

export default function ProjectCard({ projectName, projectImage, projectLink }) {
  return (
    <div className={styles.ProjectCard}>
      <h3 className={styles.ProjecCard_tTitle}>{projectName}</h3>
      <div className={styles.ProjectImageContainer}>
        <img src={projectImage} alt={projectName} />
      </div>
      <div className={styles.ProjectLink}>
        <a 
          href={projectLink}
          target="_blank"
          rel="noopener noreferrer">
            acessar
        </a>
      </div>
    </div>
  );
}
