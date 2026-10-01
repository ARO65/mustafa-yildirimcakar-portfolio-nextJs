import Link from "next/link";
import styles from "./Hero.module.scss";
export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay} />
      <div className={styles.content}>
        <p className={styles.eyebrow}>FRONTEND DEVELOPER · REACT & NEXT.JS</p>
        <h1>
          <small>Hi, I’m</small>Mustafa <span>Yıldırımçakar</span>
        </h1>
        <h2>Frontend Developer</h2>
        <p className={styles.lead}>
          I build modern, user-friendly and secure web applications with
          Next.js, React and maintainable frontend architecture.
        </p>
        <div className={styles.actions}>
          <Link className="button" href="/projects">
            <i className="pi pi-code" />
            View My Projects
          </Link>
          <Link className={styles.contact} href="/contact">
            <i className="pi pi-envelope" />
            Contact Me
          </Link>
        </div>
        <div className={styles.stack}>
          <span>Next.js</span>
          <span>React</span>
          <span>JavaScript</span>
          <span>SCSS</span>
          <span>PrimeReact</span>
          <span>
            <i className="pi pi-github" />
            GitHub
          </span>
        </div>
      </div>
      <div className={styles.visual}>
        <div className={styles.codeCard}>
          <span>MY 👋</span>
          <strong>
            Frontend systems
            <br />
            built with structure.
          </strong>
          <code>Next.js · React · UI · QA</code>
        </div>
      </div>
    </section>
  );
}
