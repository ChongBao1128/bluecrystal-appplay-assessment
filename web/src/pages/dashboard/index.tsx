import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import isAuthenticated from "../lib/auth";

// Demonstration Purpose
const buttonStyle: React.CSSProperties = {
  padding: "0.5rem 1rem",
  borderRadius: "6px",
  border: "none",
  backgroundColor: "#3b82f6",
  color: "white",
  cursor: "pointer",
  fontSize: "1rem",
};

export default function Dashboard() {
  const router = useRouter();

  const handleLogout = async () => {
    await fetch("/api/logout", { method: "POST" });
    router.push("/");
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Dashboard</h1>
      <p>Only visible if logged in.</p>

      <button
        onClick={handleLogout}
        style={{
          marginTop: "1rem",
          padding: "0.5rem 1rem",
          borderRadius: "6px",
          border: "none",
          backgroundColor: "#ef4444",
          color: "white",
          cursor: "pointer",
          fontSize: "1rem",
        }}
      >
        Logout
      </button>

      <div style={{ marginTop: "2rem", display: "flex", gap: "1rem" }}>
        <button onClick={() => router.push("/users")} style={buttonStyle}>
          Go to /users
        </button>
        <button onClick={() => router.push("/posts/2")} style={buttonStyle}>
          Go to /posts/2
        </button>
        <button onClick={() => router.push("/blogs/3")} style={buttonStyle}>
          Go to /blogs/3
        </button>
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { req } = context;

  if (!isAuthenticated(req)) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return { props: {} };
};
