import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { isAuthenticated } from "../lib/auth";

export default function Dashboard() {
  const router = useRouter();

  const handleLogout = async () => {
    await fetch("/api/logout", { method: "POST" });
    router.push("/login");
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
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  if (!isAuthenticated(req as any)) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return { props: {} };
};
