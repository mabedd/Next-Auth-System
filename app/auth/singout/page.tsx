import { signOut } from "next-auth/react";
import Container from "@/components/Container";

const SignOut = () => {
  return (
    <Container>
      <h1 className="text-2xl font-bold mb-6 text-center">Sign Out</h1>
      <button
        onClick={() => signOut()}
        className="w-full bg-accent hover:bg-accent-dark text-white py-2 px-4 rounded transition duration-200"
      >
        Sign Out
      </button>
    </Container>
  );
};

export default SignOut;
