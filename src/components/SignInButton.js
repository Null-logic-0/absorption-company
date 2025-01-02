import { loginAction } from "@/_lib/actions";
import Image from "next/image";

function SignInButton() {
  return (
    <form action={loginAction}>
      <button className="flex items-center justify-center gap-6 text-md rounded-md border border-gray-800 px-10 py-4 font-medium">
        <Image
          src="https://authjs.dev/img/providers/google.svg"
          alt="Google logo"
          height="24"
          width="24"
        />
        <span>Continue with Google</span>
      </button>
    </form>
  );
}

export default SignInButton;
