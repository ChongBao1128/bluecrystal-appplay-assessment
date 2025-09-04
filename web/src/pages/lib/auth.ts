import type { IncomingMessage } from "http";

const isAuthenticated = (
  req: IncomingMessage & { cookies?: Partial<Record<string, string>> }
): boolean => {
  return req.cookies?.auth === "1";
};

export default isAuthenticated;
