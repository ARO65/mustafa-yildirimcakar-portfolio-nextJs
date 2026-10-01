"use client";
import Link from "next/link";
import Card from "react-bootstrap/Card";
import styles from "./DashboardCards.module.scss";

const cards = [
  {
    href: "/dashboard/requests",
    icon: "pi pi-inbox",
    title: "My Requests",
    text: "Review existing project requests and status.",
  },
  {
    href: "/dashboard/requests/new",
    icon: "pi pi-plus",
    title: "New Request",
    text: "Send a structured project brief.",
  },
  {
    href: "/dashboard/profile",
    icon: "pi pi-user",
    title: "Profile",
    text: "Review your client account details.",
  },
];

export default function DashboardCards() {
  return (
    <div className={styles.grid}>
      {cards.map((item) => (
        <Card
          as={Link}
          href={item.href}
          key={item.href}
          className={styles.card}
        >
          <Card.Body>
            <i className={`${item.icon} ${styles.icon}`} aria-hidden="true" />
            <Card.Title as="h2">{item.title}</Card.Title>
            <Card.Text>{item.text}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}
