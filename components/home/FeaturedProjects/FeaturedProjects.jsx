"use client";

import Carousel from "react-bootstrap/Carousel";
import ProjectCard from "@/components/projects/ProjectCard/ProjectCard";
import styles from "./FeaturedProjects.module.scss";

export default function FeaturedProjects({ projects = [] }) {
  return (
    <section className={`section ${styles.wrap}`}>
      <div className="sectionHeading">
        <p>FEATURED PROJECTS</p>
        <h2>Selected work, connected to real code.</h2>
      </div>

      <Carousel interval={6500}>
        {projects.map((project) => (
          <Carousel.Item key={project.slug || project.id}>
            <div className={styles.item}>
              <ProjectCard project={project} />
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
}
