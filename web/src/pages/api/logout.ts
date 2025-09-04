import type { NextApiRequest, NextApiResponse } from "next";
import { serialize } from "cookie";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader(
    "Set-Cookie",
    serialize("auth", "", {
      path: "/",
      expires: new Date(0),
      httpOnly: true,
      sameSite: "lax",
    })
  );

  res.status(200).json({ success: true });
}
