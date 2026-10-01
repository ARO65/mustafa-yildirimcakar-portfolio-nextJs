import { services } from "@/data/services";
export const metadata = { title: "Services" };
export default function Services() {
  return (
    <section className="page">
      <div className="pageIntro">
        <p>SERVICES</p>
        <h1>Frontend services built around real requirements.</h1>
      </div>
      <div className="serviceList">
        {services.map((s, i) => (
          <article key={s.slug}>
            <span>0{i + 1}</span>
            <div>
              <h2>{s.title}</h2>
              <p>{s.description}</p>
              <ul>
                {s.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
