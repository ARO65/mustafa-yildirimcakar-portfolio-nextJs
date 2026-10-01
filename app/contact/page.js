import ContactForm from "@/components/forms/ContactForm/ContactForm";
export const metadata = { title: "Contact" };
export default function Contact() {
  return (
    <section className="page">
      <div className="pageIntro">
        <p>CONTACT</p>
        <h1>
          Contact <span style={{ color: "#087cf0" }}>Me</span>
        </h1>
        <p>
          For frontend work, project discussions or technical training, send the
          requirement with enough context to understand the goal.
        </p>
      </div>
      <div className="contentGrid">
        <aside>
          <h2>Let’s connect</h2>
          <p>
            <i className="pi pi-map-marker" /> Yverdon-les-Bains, Vaud,
            Switzerland
          </p>
          <p>
            <i className="pi pi-code" /> Frontend Development · React & Next.js
          </p>
          <p>
            <i className="pi pi-github" />{" "}
            <a href="https://github.com/ARO65" target="_blank" rel="noreferrer">
              github.com/ARO65
            </a>
          </p>
          <p>
            <i className="pi pi-envelope" /> Use the form to send a project
            message.
          </p>
        </aside>
        <div className="formShell">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
