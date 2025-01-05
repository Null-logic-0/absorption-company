"use server";
import { revalidatePath } from "next/cache";
import { signIn, signOut } from "./auth";
import { supabase } from "./supabase";
import { redirect } from "next/navigation";

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

  if (Object.keys(errors).length > 0) {
    return { errors };
  }

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
