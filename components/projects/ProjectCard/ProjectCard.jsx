"use client";
import Link from "next/link";
import Card from "react-bootstrap/Card";
import styles from "./ProjectCard.module.scss";

export default function ProjectCard({ project }) {
  return (
    <Card as="article" className={styles.card}>
      <div className={styles.preview}>
        <i className="pi pi-code" aria-hidden="true" />
        <span>{project.category || "Frontend Project"}</span>
      </div>
      <Card.Body className={styles.body}>
        <div className={styles.meta}>
          <span>{project.language || "Frontend"}</span>
          <span><i className="pi pi-github" aria-hidden="true" /> Code</span>
        </div>
        <Card.Title as="h3">{project.title}</Card.Title>
        <Card.Text>{project.summary}</Card.Text>
        <div className={styles.tags}>
          {project.stack?.slice(0, 4).map((item) => <span key={item}>{item}</span>)}
        </div>
        <div className={styles.links}>
          <Link href={`/projects/${project.slug}`}>View Details <i className="pi pi-arrow-right" aria-hidden="true" /></Link>
          {project.url && <a href={project.url} target="_blank" rel="noreferrer"><i className="pi pi-github" aria-hidden="true" /> GitHub</a>}
        </div>
      </Card.Body>
    </Card>
  );
}
