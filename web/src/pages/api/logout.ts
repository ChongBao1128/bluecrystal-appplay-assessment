import type { NextApiResponse } from "next";
import { serialize } from "cookie";

const handler = (res: NextApiResponse) => {
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
};

export default handler;
