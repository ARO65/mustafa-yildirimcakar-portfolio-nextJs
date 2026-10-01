import Link from "next/link";
import { navigation } from "@/data/navigation";
import { services } from "@/data/services";
import styles from "./Footer.module.scss";
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        <div className={styles.identity}>
          <Link className={styles.brand} href="/">
            <span>M</span>
            <b>Y</b> 👋
          </Link>
          <strong>Mustafa Yıldırımçakar</strong>
          <p>
            Frontend Developer
            <br />
            React & Next.js
          </p>
          <p>
            <i className="pi pi-map-marker" />
            Yverdon-les-Bains, Vaud, Switzerland
          </p>
          <div className={styles.social}>
            <a
              href="https://github.com/ARO65"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <i className="pi pi-github" />
            </a>
            <Link href="/contact" aria-label="Contact">
              <i className="pi pi-envelope" />
            </Link>
          </div>
        </div>
        <div>
          <h3>Quick Links</h3>
          {navigation.map((x) => (
            <Link key={x.href} href={x.href}>
              {x.label}
            </Link>
          ))}
        </div>
        <div>
          <h3>Services</h3>
          {services.map((x) => (
            <Link key={x.slug} href="/services">
              {x.title}
            </Link>
          ))}
        </div>
      </div>
      <div className={styles.bottom}>
        <span>© {year} Mustafa Yıldırımçakar. All rights reserved.</span>
        <span>
          Built with Next.js · <b>MY</b>
        </span>
      </div>
    </footer>
  );
}
