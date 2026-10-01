"use client";
import { useState } from "react";
import Link from "next/link";
import Offcanvas from "react-bootstrap/Offcanvas";
import { navigation } from "@/data/navigation";
import styles from "./Header.module.scss";
export default function Header() {
  const [show, setShow] = useState(false);
  const close = () => setShow(false);
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link className={styles.brand} href="/">
          <span>M</span>
          <b>Y</b>
          <em>👋</em>
        </Link>
        <nav className={styles.desktopNav} aria-label="Main navigation">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href}>
              <i className={item.icon} aria-hidden="true" />
              {item.label}
            </Link>
          ))}
        </nav>
        <Link className={styles.login} href="/login">
          <i className="pi pi-user" aria-hidden="true" />
          Client Portal
        </Link>
        <button
          className={styles.menuButton}
          type="button"
          onClick={() => setShow(true)}
          aria-label="Open navigation"
          aria-controls="main-navigation-offcanvas"
        >
          <i className="pi pi-bars" aria-hidden="true" />
        </button>
      </div>
      <Offcanvas
        id="main-navigation-offcanvas"
        show={show}
        onHide={close}
        placement="end"
        className={styles.offcanvas}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <span className={styles.mobileBrand}>
              M<b>Y</b> 👋
            </span>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <nav className={styles.mobileNav} aria-label="Mobile navigation">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} onClick={close}>
                <i className={item.icon} aria-hidden="true" />
                <span>{item.label}</span>
              </Link>
            ))}
            <Link className={styles.mobileLogin} href="/login" onClick={close}>
              <i className="pi pi-sign-in" />
              <span>Client Login</span>
            </Link>
            <Link href="/dashboard/requests/new" onClick={close}>
              <i className="pi pi-plus" />
              <span>Start a Project</span>
            </Link>
          </nav>
        </Offcanvas.Body>
      </Offcanvas>
    </header>
  );
}
