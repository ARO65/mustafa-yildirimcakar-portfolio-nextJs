"use server";

import { signOut } from "@/auth";

// Replace this adapter with a real REST endpoint when the portfolio backend exists.
// Keeping authentication behind a service preserves the EasyGoingEducation architecture.
const DEMO_USERS = [
  {
    id: "1",
    name: "Portfolio Admin",
    email: "admin@example.com",
    password: "Admin123!",
    role: "ADMIN",
  },
  {
    id: "2",
    name: "Demo Client",
    email: "client@example.com",
    password: "Client123!",
    role: "CLIENT",
  },
];

const createDemoToken = (user) => {
  const header = Buffer.from(
    JSON.stringify({ alg: "none", typ: "JWT" }),
  ).toString("base64url");
  const payload = Buffer.from(
    JSON.stringify({
      sub: user.id,
      role: user.role,
      exp: Math.floor(Date.now() / 1000) + 60 * 60,
    }),
  ).toString("base64url");
  return `${header}.${payload}.demo`;
};

export const login = async (payload) => {
  const user = DEMO_USERS.find(
    (item) =>
      item.email === payload.email && item.password === payload.password,
  );

  if (!user) return { ok: false, status: 401, data: null };

  const { password, ...safeUser } = user;
  return {
    ok: true,
    status: 200,
    data: { ...safeUser, token: createDemoToken(safeUser) },
  };
};

export const logout = async () => {
  await signOut({ redirectTo: "/" });
};
