import Heading from "@/components/Heading";
import SignInButton from "@/components/SignInButton";

function LoginPage() {
  return (
    <div className="flex flex-col justify-center items-center gap-8 pt-[10vh] px-8">
      <Heading>Login</Heading>
      <SignInButton />
    </div>
  );
}

export default LoginPage;
