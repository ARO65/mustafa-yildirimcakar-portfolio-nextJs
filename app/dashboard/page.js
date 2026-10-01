import { auth } from "@/auth";
import DashboardCards from "@/components/dashboard/DashboardCards/DashboardCards";

export default async function Dashboard() {
  const session = await auth();
  return (
    <section className="page">
      <div className="pageIntro">
        <p>CLIENT PORTAL</p>
        <h1>Dashboard</h1>
        <p>
          Welcome, {session?.user?.name || "Client"}. Track requests, create a
          new brief and manage your project communication.
        </p>
      </div>
      <DashboardCards />
    </section>
  );
}
