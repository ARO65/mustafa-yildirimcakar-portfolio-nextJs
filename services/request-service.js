import { demoRequests } from "@/data/requests";
export async function getRequestsForUser(user) {
  if (!user) return [];
  if (user.role === "ADMIN") return demoRequests;
  return demoRequests.filter((r) => r.userId === user.id);
}
export async function getRequestById(id, user) {
  const request = demoRequests.find((r) => r.id === id);
  if (!request) return null;
  if (user?.role === "ADMIN" || request.userId === user?.id) return request;
  return null;
}
