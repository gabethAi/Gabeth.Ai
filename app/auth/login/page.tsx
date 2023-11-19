import { Metadata } from "next";
import React from "react";
import LeftSideIllustration from "../../components/login/LeftSideIllustration";
import RightSideForm from "../../components/login/RightSideForm";
import { auth } from "@/app/lib/auth";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Gabeth.Ai | Login",
  description: " Login to Gabeth.Ai to get started.",
};

async function Login() {
  const session = await auth();

  if (session?.user) {
    redirect("/chat");
  }
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 min-h-screen'>
      <LeftSideIllustration />
      <RightSideForm />
    </div>
  );
}

export default Login;
