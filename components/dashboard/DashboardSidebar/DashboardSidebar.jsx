"use client";

import { useState } from "react";
import Link from "next/link";
import Offcanvas from "react-bootstrap/Offcanvas";
import { dashboardNavigation } from "@/data/navigation";
import styles from "./DashboardSidebar.module.scss";

function Links({ onNavigate }) {
  return dashboardNavigation.map((item) => (
    <Link key={item.href} href={item.href} onClick={onNavigate}>
      <i className={item.icon} aria-hidden="true" /><span>{item.label}</span>
    </Link>
  ));
}

export default function DashboardSidebar() {
  const [show, setShow] = useState(false);
  const close = () => setShow(false);

  return (
    <>
      <aside className={styles.side} aria-label="Client portal navigation">
        <strong>Client Portal</strong><Links />
      </aside>
      <button className={styles.mobileTrigger} type="button" onClick={() => setShow(true)} aria-label="Open client portal menu">
        <i className="pi pi-bars" aria-hidden="true" /> <span>Client Portal</span>
      </button>
      <Offcanvas show={show} onHide={close} placement="start" className={styles.offcanvas}>
        <Offcanvas.Header closeButton><Offcanvas.Title>Client Portal</Offcanvas.Title></Offcanvas.Header>
        <Offcanvas.Body><nav className={styles.mobileLinks}><Links onNavigate={close} /></nav></Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
