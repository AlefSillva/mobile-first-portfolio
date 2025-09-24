export default function ProjectCard({ projectName, projectImage }) {
  return (
    <div>
      <h4>{projectName}</h4>
      <img src={projectImage} alt={projectName} />
    </div>
  );
}
