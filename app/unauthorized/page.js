import Link from "next/link";
export default function Unauthorized() {
  return (
    <section className="page">
      <div className="pageIntro">
        <p>403</p>
        <h1>You do not have access to this route.</h1>
        <p>
          Authentication succeeded, but the current role is not authorized for
          this page.
        </p>
      </div>
      <Link className="button" href="/dashboard">
        Back to dashboard
      </Link>
    </section>
  );
}
