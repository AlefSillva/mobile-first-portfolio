import ProjectCard from "../projectCard/ProjectCard";
import styles from './ProjectsSection.module.css';

export default function ProjectsSection({ title, projects }) {
    return (
        <>
            <h3 className={styles.ProjecsSection_tTitle}>{title}</h3>
            <section className={styles.ProjectsSection}>
                {projects.map((project, i) => (
                    <ProjectCard
                        key={i}
                        projectName={project.projectName}
                        projectImage={project.projectImage}
                        projectLink={project.projectLink}
                    />
                ))}
            </section>
        </>
    )
}

