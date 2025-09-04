import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(response: NextApiResponse) {
  response.setHeader(
    "Set-Cookie",
    `auth=; Path=/; HttpOnly; Max-Age=0; SameSite=Strict`
  );
  return response.status(200).json({ success: true });
}
