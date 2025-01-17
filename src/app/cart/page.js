import { auth } from "@/_lib/auth";
import CartList from "@/components/Cart/CartList";

async function CartPage() {
  const session = await auth();
  return (
    <>
      <CartList session={session} />
    </>
  );
}

export default CartPage;
