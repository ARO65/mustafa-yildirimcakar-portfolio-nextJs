import Link from "next/link";
import { auth } from "@/auth";
import { getRequestsForUser } from "@/services/request-service";
export default async function Requests() {
  const session = await auth();
  const requests = await getRequestsForUser(session?.user);
  return (
    <section className="page">
      <div className="pageIntro">
        <p>REQUESTS</p>
        <h1>My project requests.</h1>
      </div>
      <div className="dashboardGrid">
        {requests.map((r) => (
          <Link
            className="panel"
            key={r.id}
            href={`/dashboard/requests/${r.id}`}
          >
            <small>{r.id}</small>
            <h2>{r.title}</h2>
            <p>
              {r.service} · {r.status}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
