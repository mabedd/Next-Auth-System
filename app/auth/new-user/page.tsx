import Container from "@/components/Container";

const NewUser = () => {
  return (
    <Container>
      <h1 className="text-2xl font-bold mb-6 text-center">Welcome!</h1>
      <p className="mb-4 text-center">
        Thank you for signing up. Please check your email to verify your
        account.
      </p>
    </Container>
  );
};

export default NewUser;
