import ProjectCard from "@/components/projects/ProjectCard/ProjectCard";
import { getProjects } from "@/services/project-service";
export const metadata = { title: "Projects" };
export default async function Projects() {
  const projects = await getProjects();
  return (
    <section className="page">
      <div className="pageIntro">
        <p>PROJECTS</p>
        <h1>Frontend work and experiments.</h1>
        <p>
          Selected case studies are enriched with portfolio metadata; the
          remaining public repositories are synchronized from GitHub.
        </p>
      </div>
      <div className="projectGrid">
        {projects.map((p) => (
          <ProjectCard key={p.id || p.repoName} project={p} />
        ))}
      </div>
    </section>
  );
}
