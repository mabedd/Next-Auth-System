"use client";

import { signIn, getProviders } from "next-auth/react";
import { useEffect, useState } from "react";
import Container from "@/components/Container";

export default function SignIn() {
  const [providers, setProviders] = useState<Record<string, any> | null>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProviders = async () => {
      const res = await getProviders();
      setProviders(res);
    };

    fetchProviders();
  }, []);

  const handleCredentialsSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (result?.error) {
      setError(result.error);
    } else {
      setError("");
      // Redirect to the home page or any other page after successful login
      window.location.href = "/";
    }
  };

  const handleMagicLinkSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await signIn("email", {
      redirect: false,
      email,
    });

    if (result?.error) {
      setError(result.error);
    } else {
      setError("");
      // Inform the user to check their email for the magic link
      alert("Check your email for the magic link!");
    }
  };

  return (
    <Container>
      <h1 className="text-2xl font-bold mb-6 text-center">Sign In</h1>
      {error && <p className="text-center text-red-500 mb-4">{error}</p>}

      {/* Credentials Form */}
      <form onSubmit={handleCredentialsSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-accent hover:bg-accent-dark text-white py-2 px-4 rounded transition duration-200"
        >
          Sign In
        </button>
      </form>

      <div className="relative my-8">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white text-gray-500">
            Or sign in with a Magic Link
          </span>
        </div>
      </div>

      {/* Magic Link Form */}
      <form onSubmit={handleMagicLinkSubmit} className="max-w-md mx-auto mb-8">
        <div className="mb-4">
          <label
            htmlFor="magic-email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="magic-email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition duration-200"
        >
          Send Magic Link
        </button>
      </form>

      {/* Third-Party Providers */}
      {providers &&
        Object.values(providers)
          .filter(
            (provider) =>
              provider.id !== "credentials" && provider.id !== "email"
          )
          .map((provider) => (
            <div key={provider.name} className="mb-4">
              <button
                onClick={() => signIn(provider.id)}
                className="w-full bg-gray-100 hover:bg-gray-200 text-black py-2 px-4 rounded transition duration-200"
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
    </Container>
  );
}
