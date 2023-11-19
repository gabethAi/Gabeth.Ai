import RightSideForm from "../../components/register/RightSideForm";
import LeftSideIllustration from "../../components/register/LeftSideIllustration";
import { Metadata } from "next";
import { auth, signOut } from "@/app/lib/auth";
import { logoutUser } from "@/app/lib/actions";

export const metadata: Metadata = {
  title: "Gabeth.Ai | Register",
  description: "Register to Gabeth.Ai to get started.",
};

async function Register() {
  const session = await auth();

  if (session?.user) {
    // logoutUser();
  }

  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 min-h-screen'>
      <LeftSideIllustration />
      <RightSideForm />
    </div>
  );
}

export default Register;
