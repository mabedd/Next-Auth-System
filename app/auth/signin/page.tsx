import { signIn, getProviders } from "next-auth/react";
import Container from "@/components/Container";

export default async function SignIn() {
  const providers = await getProviders();

  if (!providers) {
    return (
      <Container>
        <h1 className="text-2xl font-bold mb-6 text-center">Sign In</h1>
        <p className="text-center text-red-500">
          No authentication providers available.
        </p>
      </Container>
    );
  }

  return (
    <Container>
      <h1 className="text-2xl font-bold mb-6 text-center">Sign In</h1>
      {Object.values(providers).map((provider) => (
        <div key={provider.name} className="mb-4">
          <button
            onClick={() => signIn(provider.id)}
            className="w-full bg-accent hover:bg-accent-dark text-white py-2 px-4 rounded transition duration-200"
          >
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </Container>
  );
}
