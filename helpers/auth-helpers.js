import { decodeJwt } from "jose";

const ROLE_ROUTES = {
  ADMIN: ["/dashboard", "/dashboard/requests", "/dashboard/profile", "/dashboard/admin"],
  CLIENT: ["/dashboard", "/dashboard/requests", "/dashboard/profile"],
};

export const getIsTokenValid = (accessToken) => {
  if (!accessToken) return false;

  try {
    const payload = decodeJwt(accessToken);
    if (!payload?.exp) return true;
    return payload.exp * 1000 > Date.now();
  } catch {
    return false;
  }
};

export const getIsUserAuthorized = (role, pathname) => {
  if (!role || !pathname) return false;
  const allowedRoutes = ROLE_ROUTES[role] ?? [];
  return allowedRoutes.some((route) => pathname === route || pathname.startsWith(`${route}/`));
};
