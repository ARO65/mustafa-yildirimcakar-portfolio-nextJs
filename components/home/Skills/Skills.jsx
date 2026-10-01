import { skillGroups } from "@/data/skills";
import styles from "./Skills.module.scss";
export default function Skills() {
  return (
    <section className="section">
      <div className="sectionHeading">
        <p>ENGINEERING APPROACH</p>
        <h2>Frontend beyond the screen.</h2>
      </div>
      <div className={styles.grid}>
        {skillGroups.map((g) => (
          <article key={g.title}>
            <h3>{g.title}</h3>
            <div>
              {g.items.map((i) => (
                <span key={i}>{i}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
