import Link from "next/link";
export const metadata = { title: "Register" };
export default function Register() {
  return (
    <section className="page">
      <div className="pageIntro">
        <p>CLIENT ACCESS</p>
        <h1>
          Registration architecture is reserved for the persistent user store.
        </h1>
        <p>
          The current demo uses credential accounts so authentication,
          JWT/session and role authorization can be exercised without pretending
          a database exists.
        </p>
      </div>
      <Link className="button" href="/login">
        Use demo login
      </Link>
    </section>
  );
}
