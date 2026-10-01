import { auth } from "@/auth";
export default async function Profile() {
  const session = await auth();
  return (
    <section className="page">
      <div className="pageIntro">
        <p>PROFILE</p>
        <h1>Client account.</h1>
      </div>
      <div className="panel">
        <p>
          <strong>Name:</strong> {session?.user?.name}
        </p>
        <p>
          <strong>Email:</strong> {session?.user?.email}
        </p>
        <p>
          <strong>Role:</strong> {session?.user?.role}
        </p>
      </div>
    </section>
  );
}
