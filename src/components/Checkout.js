"use client";
// import { createCheckoutSession } from "@/_lib/actions";
// import { stripeKey } from "@/_lib/data-service";
// import {
//   EmbeddedCheckout,
//   EmbeddedCheckoutProvider,
// } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
// import { useEffect, useState } from "react";

function Checkout() {
  //   const StripePromise = loadStripe(stripeKey);
  //   const [options, setOptions] = useState();
  //   const fetchClientSecret = async () => {
  //     const session = await createCheckoutSession();
  //     setOptions({ clientSecret: session.clientSecret });
  //   };

  //   useEffect(() => {
  //     fetchClientSecret();
  //   }, []);
  return (
    <div>
      {/* {options?.clientSecret && (
        <EmbeddedCheckoutProvider stripe={StripePromise} options={options}>
          <div className="my-10">
            <EmbeddedCheckout />
          </div>
        </EmbeddedCheckoutProvider>
      )} */}
      Checkout
    </div>
  );
}

export default Checkout;
