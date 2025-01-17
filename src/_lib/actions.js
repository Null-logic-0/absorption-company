"use server";
import { revalidatePath } from "next/cache";
import { auth, signIn, signOut } from "./auth";
import { supabase } from "./supabase";
import { redirect } from "next/navigation";
import Stripe from "stripe";
import { stripeKey } from "./data-service";
import Product from "@/components/Products/Product";

export async function loginAction() {
  await signIn("google", { redirectTo: "/account" });
}

export async function LogOutAction() {
  await signOut({ redirectTo: "/" });
}

export async function sendMessage(prevState, formData) {
  const fullName = formData.get("fullName");
  const email = formData.get("email");
  const subject = formData.get("subject");
  const message = formData.get("message");

  const data = {
    fullName,
    email,
    subject,
    message,
  };

  let errors = {};

  if (!fullName) errors.fullName = "Full Name is required";
  if (!email) {
    errors.email = "Email is required.";
  } else if (!email.includes("@")) {
    errors.email = "Please enter a valid email address.";
  }
  if (!subject?.trim()) errors.subject = "Subject is required";
  if (!message?.trim()) errors.message = "Message is required";

  const { data: insertedData, error } = await supabase
    .from("contacts")
    .insert([data]);

  if (error) {
    console.error("Error inserting data:", error.message);
    return {
      errors: {
        database: "Failed to save the message. Please try again later.",
      },
    };
  }

  revalidatePath("/contacts");
  redirect("/contacts");

  return insertedData;
}

export async function updateUserInfo(prevState, formData) {
  const fullName = formData.get("fullName");
  const email = formData.get("email");
  const phoneNumber = formData.get("phoneNumber");
  const adress = formData.get("adress");
  const country = formData.get("country");
  const city = formData.get("city");

  const errors = {};

  if (!phoneNumber) errors.phoneNumber = "Phone Number is required";
  if (!adress) errors.adress = "Address is required";
  if (!country) errors.country = "Country is required";
  if (!city) errors.city = "City is required";

  if (Object.keys(errors).length > 0) {
    return { errors };
  }

  const data = {
    fullName,
    phoneNumber,
    adress,
    country,
    city,
  };

  const { data: userData, error } = await supabase
    .from("customers")
    .update(data)
    .eq("email", email)
    .select();

  if (error) {
    console.error("Error inserting data:", error.message);
    return {
      errors: {
        database: "Failed to save user info. Please try again later.",
      },
    };
  }

  revalidatePath("/account");
  redirect("/account");

  return userData;
}

export async function createReview(formData) {
  const content = formData.get("review");
  const rating = formData.get("rating");

  const session = await auth();
  if (!session) throw new Error("You must be logged in");

  const data = {
    content,
    rating,
    customer_id: session.user.customer,
  };

  const { data: insertedData, error } = await supabase
    .from("reviews")
    .insert([data]);

  if (error) {
    console.error("Error inserting data:", error.message);
    return {
      errors: {
        database: "Failed to write review. Please try again later.",
      },
    };
  }

  revalidatePath("/reviews/thanks");
  redirect("/reviews/thanks");
  return insertedData;
}

// export async function createCheckoutSession() {
//   const stripeInstance = new Stripe(stripeKey);
//   const checkoutSession = await stripeInstance.checkout.sessions.create({
//     ui_mode: "embedded",
//     invoice_creation: {
//       enabled: true,
//     },
//     customer_email: "test@gmail.com",
//     submit_type: "pay",
//     billing_address_collection: "auto",
//     shipping_address_collection: {
//       allowed_countries: ["all"],
//     },
//     line_items: [
//       {
//         price_data: {
//           currency: "usd",
//           product_data: {
//             name: "Camu camu",
//           },
//           unit_amount: 1000,
//         },
//         quantity: 2,
//       },
//     ],

//     mode: "payment",
//     return_url: `http://localhost:3000/payment-status?session_id={CHECKOUT_SESSION_ID}`,
//   });
//   return {
//     clientSecret: checkoutSession.client_secret,
//   };
// }

// export async function createOrder(product) {
//   const session = await auth();
//   if (!session) throw new Error("You must be logged in");

//   const customerId = session.user.customer;

//   const data = {
//     product_id: product,
//     customer_id: customerId,
//   };
//   const { data: insertedData, error } = await supabase
//     .from("order_items")
//     .insert([data]);

//   if (error) {
//     console.error("Error inserting data:", error.message);
//     return {
//       errors: {
//         database: "Failed to checkout. Please try again later.",
//       },
//     };
//   }

//   revalidatePath("/payment-status");
//   redirect("/payment-status");
//   return insertedData;
// }

///////////////////////////////////////////

export async function createOrder(products) {
  const session = await auth();
  if (!session) throw new Error("You must be logged in");

  const customerId = session.user.customer;

  const productIds = Array.isArray(products) ? products : [products];

  const data = productIds.map((product) => ({
    product_id: product,
    customer_id: customerId,
  }));

  const { data: insertedData, error } = await supabase
    .from("order_items")
    .insert(data);

  if (error) {
    console.error("Error inserting data:", error.message);
    return {
      errors: {
        database: "Failed to checkout. Please try again later.",
      },
    };
  }

  revalidatePath("/payment-status");
  redirect("/payment-status");

  return insertedData;
}
