import { useRouter } from "next/router";
import Container from "@/components/Container";

const Error = () => {
  const router = useRouter();
  const { error } = router.query;

  return (
    <Container>
      <h1 className="text-2xl font-bold mb-6 text-center">Error</h1>
      <p className="mb-4 text-center">An error occurred: {error}</p>
      <button
        onClick={() => router.push("/auth/signin")}
        className="w-full bg-accent hover:bg-accent-dark text-white py-2 px-4 rounded transition duration-200"
      >
        Go to Sign In
      </button>
    </Container>
  );
};

export default Error;
