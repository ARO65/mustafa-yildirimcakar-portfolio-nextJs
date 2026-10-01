import { notFound } from "next/navigation";
import Link from "next/link";
import { getProject, getProjects } from "@/services/project-service";
export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.filter((p) => p.featured).map((p) => ({ slug: p.slug }));
}
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = await getProject(slug);
  return p
    ? { title: p.title, description: p.summary }
    : { title: "Project not found" };
}
export default async function ProjectDetail({ params }) {
  const { slug } = await params;
  const p = await getProject(slug);
  if (!p) notFound();
  return (
    <article className="caseStudy">
      <Link href="/projects">← All projects</Link>
      <div className="caseHero">
        <p>{p.category}</p>
        <h1>{p.title}</h1>
        <p>{p.summary}</p>
      </div>
      <div className="caseGrid">
        <section>
          <h2>Architecture & focus</h2>
          <p>
            This case study combines repository data with curated portfolio
            context so technical work is presented as an engineering story
            rather than a raw repository list.
          </p>
          <h2>Highlights</h2>
          <ul>
            {p.highlights.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </section>
        <aside>
          <h3>Technology</h3>
          {p.stack.map((x) => (
            <span className="pill" key={x}>
              {x}
            </span>
          ))}
          {p.url && (
            <a className="button" href={p.url} target="_blank" rel="noreferrer">
              View repository ↗
            </a>
          )}
        </aside>
      </div>
    </article>
  );
}
