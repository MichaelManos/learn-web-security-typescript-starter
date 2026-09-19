import type { CookieOptions, Response } from "express";

const SESSION_COOKIE_NAME = "session_id";

const sessionCookieOptions = {
  path: "/",
} satisfies CookieOptions;

type CookieSession = {
  token: string;
  expires_at: string;
};

export function setSessionCookie(
  response: Response,
  session: CookieSession,
): void {
  const exp_date = new Date(session.expires_at);
  response.cookie(SESSION_COOKIE_NAME, session.token, {...sessionCookieOptions, expires: exp_date});
}

export function clearSessionCookie(response: Response): void {
  response.clearCookie(SESSION_COOKIE_NAME, sessionCookieOptions);
}
