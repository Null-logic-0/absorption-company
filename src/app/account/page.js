import { auth } from "@/_lib/auth";
import Heading from "@/components/Heading";
import LogOutButton from "@/components/LogoutButton";

async function AccountPage() {
  const session = await auth();
  return (
    <>
      <Heading>User account</Heading>
      {session && (
        <div>
          <p>Welcome , {session.user.name}</p>
          <p>{session.user.email}</p>
        </div>
      )}
      <LogOutButton />
    </>
  );
}

export default AccountPage;
