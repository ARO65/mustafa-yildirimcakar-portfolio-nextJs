import { auth } from "@/auth";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getRequestById } from "@/services/request-service";
export default async function RequestDetail({ params }) {
  const { id } = await params;
  const session = await auth();
  const request = await getRequestById(id, session?.user);
  if (!request) notFound();
  return (
    <section className="page">
      <Link href="/dashboard/requests">← Requests</Link>
      <div className="pageIntro">
        <p>{request.id}</p>
        <h1>{request.title}</h1>
        <p>
          {request.service} · {request.status}
        </p>
      </div>
      <article className="panel">
        <h2>Project brief</h2>
        <p>{request.description}</p>
        <p>Created: {request.createdAt}</p>
      </article>
    </section>
  );
}
