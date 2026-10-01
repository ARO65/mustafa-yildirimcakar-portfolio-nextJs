"use client";
export default function Error({ reset }) {
  return (
    <section style={{ padding: "4rem 0" }}>
      <h1>Something went wrong</h1>
      <button onClick={() => reset()}>Try again</button>
    </section>
  );
}
