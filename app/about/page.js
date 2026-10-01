import { skillGroups } from "@/data/skills";
export const metadata = { title: "About" };
export default function About() {
  return (
    <section className="page">
      <div className="pageIntro">
        <p>ABOUT</p>
        <h1>Frontend engineering with structure.</h1>
        <p>
          I focus on React and Next.js frontend development: component
          architecture, forms, validation, authentication flows, API integration
          and maintainable UI.
        </p>
      </div>
      <div className="contentGrid">
        <article>
          <h2>How I work</h2>
          <p>
            I prefer clear boundaries between UI, actions, services, validation
            and authorization. The goal is not only to make a screen work, but
            to keep the code understandable as the product grows.
          </p>
          <p>
            My QA experience also influences how I build: expected states, error
            paths and user feedback are part of the implementation rather than
            an afterthought.
          </p>
        </article>
        <aside>
          {skillGroups.map((g) => (
            <div key={g.title}>
              <h3>{g.title}</h3>
              <p>{g.items.join(" · ")}</p>
            </div>
          ))}
        </aside>
      </div>
    </section>
  );
}
