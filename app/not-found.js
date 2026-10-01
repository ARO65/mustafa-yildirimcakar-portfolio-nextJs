import Link from "next/link";
export default function NotFound() {
  return (
    <section style={{ padding: "4rem 0" }}>
      <h1>404</h1>
      <p>The page could not be found.</p>
      <Link href="/">Back home</Link>
    </section>
  );
}
