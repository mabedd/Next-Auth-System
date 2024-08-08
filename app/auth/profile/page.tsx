import ProtectedRoute from "@/components/ProtectedRoute";
import Container from "@/components/Container";

const Profile = () => {
  return (
    <ProtectedRoute>
      <Container>
        <h1 className="text-2xl font-bold mb-6 text-center">Profile Page</h1>
        <p className="text-center">Welcome to your profile</p>
      </Container>
    </ProtectedRoute>
  );
};

export default Profile;
