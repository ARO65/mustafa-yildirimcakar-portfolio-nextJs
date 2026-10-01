"use client";
import Link from "next/link";
import Card from "react-bootstrap/Card";
import { services } from "@/data/services";
import styles from "./ServicesPreview.module.scss";

const icons = ["pi pi-code", "pi pi-desktop", "pi pi-check-square", "pi pi-graduation-cap"];

export default function ServicesPreview() {
  return (
    <section className="section">
      <div className="sectionHeading"><p>WHAT I DO</p><h2>Frontend solutions for real product needs.</h2></div>
      <div className={styles.grid}>
        {services.map((service, index) => (
          <Card as="article" key={service.slug}>
            <Card.Body>
              <div className={styles.icon}><i className={icons[index]} aria-hidden="true" /></div>
              <Card.Title as="h3">{service.title}</Card.Title>
              <Card.Text>{service.description}</Card.Text>
              <Link href="/services">Explore service <i className="pi pi-arrow-right" aria-hidden="true" /></Link>
            </Card.Body>
          </Card>
        ))}
      </div>
    </section>
  );
}
