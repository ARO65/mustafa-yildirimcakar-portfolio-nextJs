import Hero from "@/components/home/Hero/Hero";
import FeaturedProjects from "@/components/home/FeaturedProjects/FeaturedProjects";
import ServicesPreview from "@/components/home/ServicesPreview/ServicesPreview";
import Skills from "@/components/home/Skills/Skills";
import { getFeaturedProjects } from "@/services/project-service";

export default async function Home() {
  const projects = await getFeaturedProjects();

  return (
    <>
      <Hero />
      <ServicesPreview />
      <FeaturedProjects projects={projects} />
      <Skills />

      <section className="cta">
        <p>HAVE A PROJECT IN MIND?</p>
        <h2>Let’s turn the requirement into a structured frontend.</h2>
        <a className="button" href="/dashboard/requests/new">
          Start a Project
        </a>
      </section>
    </>
  );
}
