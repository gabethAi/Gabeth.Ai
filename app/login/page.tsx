import { Metadata } from "next";
import React from "react";
import LeftSideIllustration from "../components/login/LeftSideIllustration";
import RightSideForm from "../components/login/RightSideForm";

export const metadata: Metadata = {
  title: "Gabeth.Ai | Login",
  description: " Login to Gabeth.Ai to get started.",
};

function Login() {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 min-h-screen'>
      <LeftSideIllustration />
      <RightSideForm />
    </div>
  );
}

export default Login;
