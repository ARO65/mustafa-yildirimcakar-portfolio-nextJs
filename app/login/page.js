import LoginForm from "@/components/forms/LoginForm/LoginForm";
export const metadata = { title: "Client Login" };
export default function LoginPage() {
  return (
    <section className="page">
      <div
        style={{
          maxWidth: 520,
          margin: "0 auto",
          background: "white",
          border: "1px solid #dfe7f0",
          borderRadius: 20,
          padding: "2.2rem",
          boxShadow: "0 16px 45px rgba(8,33,56,.10)",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div
            style={{
              fontSize: "2.4rem",
              fontWeight: 900,
              letterSpacing: "-.08em",
            }}
          >
            M<span style={{ color: "#087cf0" }}>Y</span> 👋
          </div>
          <h1 style={{ fontSize: "1.55rem", margin: ".6rem 0" }}>
            Client Portal
          </h1>
          <p style={{ color: "#617083" }}>
            Sign in to access your dashboard and project requests.
          </p>
        </div>
        <LoginForm />
      </div>
    </section>
  );
}
