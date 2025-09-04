import type { NextApiRequest } from "next";

export function isAuthenticated(request: NextApiRequest): boolean {
  return request.cookies?.auth === "1";
}
