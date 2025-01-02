import { auth } from "@/_lib/auth";
import Link from "next/link";

function page() {
  return (
    <div>
      <p>Home</p>
      <Link href="/account">account</Link>
    </div>
  );
}

export default page;
