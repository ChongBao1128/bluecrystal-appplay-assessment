import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  if (request.method !== "POST") {
    return response.status(405).end();
  }

  const { email, password } = request.body;

  // Mock authentication
  if (email === "test@example.com" && password === "password123") {
    response.setHeader(
      "Set-Cookie",
      `auth=1; Path=/; HttpOnly; SameSite=Strict`
    );
    return response.status(200).json({ success: true });
  }

  return response
    .status(401)
    .json({ success: false, message: "Invalid credentials" });
}
