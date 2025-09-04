import type { IncomingMessage } from "http";

export function isAuthenticated(
  req: IncomingMessage & { cookies?: Partial<Record<string, string>> }
): boolean {
  return req.cookies?.auth === "1";
}
