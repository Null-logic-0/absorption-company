import { auth } from "@/_lib/auth";
import Heading from "@/components/Heading";
import LogOutButton from "@/components/LogoutButton";
import User from "@/components/UserInfo/User";
import UserInfoForm from "@/components/UserInfo/UserInfoForm";

async function AccountPage() {
  const session = await auth();

  return (
    <div>
      <div className="flex justify-between items-center p-8 flex-wrap max-md:justify-center max-md:gap-4">
        <Heading>User account</Heading>
        {session && (
          <p className="text-lg font-semibold ">
            Welcome 👋, {session.user.name}{" "}
          </p>
        )}
      </div>
      {session && (
        <div className="px-14 py-8 flex  items-center flex-col gap-8">
          <User data={session.user} />
          <UserInfoForm user={session.user} />
          <LogOutButton />
        </div>
      )}
    </div>
  );
}

export default AccountPage;
