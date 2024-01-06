export const apiUrl =
  process.env.NEXT_PUBLIC_VERCEL_URL ?? "http://localhost:3000";

export const publicRoutes = ["/"];

export const authRoutes = ["/auth/login", "/auth/register"];

export const apiAuthPrefix = "/api/auth";

export const DEFAULT_LOGIN_REDIRECT_URL = "/chat";
