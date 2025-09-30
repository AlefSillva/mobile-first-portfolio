import styles from "./ProjectCard.module.css";

export default function ProjectCard({ projectName, projectImage, projectLink, nameLink }) {
  return (
    <div className={styles.ProjectCard}>
      <h3 className={styles.ProjectCard_title}>{projectName}</h3>
      <div className={styles.ProjectImageContainer}>
        <img src={projectImage} alt={projectName} />
      </div>
      
        <a 
          href={projectLink}
          target="_blank"
          rel="noopener noreferrer">
            {nameLink}
        </a>
    </div>
  );
}
