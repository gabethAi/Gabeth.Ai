import { Metadata } from "next";
import LeftSideIllustration from "../../../components/login/LeftSideIllustration";
import RightSideForm from "../../../components/login/RightSideForm";

export const metadata: Metadata = {
  title: "Gabeth.Ai | Login",
  description: " Login to Gabeth.Ai to get started.",
};

interface Props {
  readonly searchParams: { [key: string]: string | string[] | undefined };
}

async function Login({ searchParams }: Props): Promise<JSX.Element> {
  const path = searchParams.next ? searchParams.next : "/chat";

  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 min-h-screen'>
      <LeftSideIllustration />
      <RightSideForm path={path as string} />
    </div>
  );
}

export default Login;
