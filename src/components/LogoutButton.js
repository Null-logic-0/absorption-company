import { LogOutAction } from "@/_lib/actions";
import { CiLogout } from "react-icons/ci";
function LogOutButton() {
  return (
    <form action={LogOutAction}>
      <button className="py-3 px-5  text-lg flex items-center gap-2 font-semibold  w-full">
        <CiLogout className="w-6 h-6" />
        <span>Log out</span>
      </button>
    </form>
  );
}

export default LogOutButton;
