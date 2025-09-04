import { useRouter } from "next/router";
import { useState } from "react";

const Login = () => {
  const router = useRouter();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      router.push("/dashboard");
    } else {
      const data = await response.json();
      setError(data.message || "Login failed");
    }
  };

  return (
    <div className='flex min-h-screen items-center justify-center bg-gray-50'>
      <form
        className='w-full max-w-sm rounded-lg border bg-white p-6 shadow-sm space-y-4'
        onSubmit={handleSubmit}
      >
        <h1 className='text-xl font-bold text-gray-900'>Login</h1>

        <div>
          <label
            htmlFor='email'
            className='block text-sm font-medium text-gray-700'
          >
            Email
          </label>
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id='email'
            className='mt-1 w-full rounded-md border px-3 py-2 text-sm focus:border-gray-500 focus:ring focus:ring-gray-200'
            placeholder='you@example.com'
            required
          />
        </div>

        <div>
          <label
            htmlFor='password'
            className='block text-sm font-medium text-gray-700'
          >
            Password
          </label>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id='password'
            className='mt-1 w-full rounded-md border px-3 py-2 text-sm focus:border-gray-500 focus:ring focus:ring-gray-200'
            placeholder='••••••••'
            required
          />
        </div>

        <button
          type='submit'
          className='w-full rounded-md bg-gray-600 px-4 py-2 text-white font-medium hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500'
        >
          Sign in
        </button>

        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </div>
  );
};

export default Login;
