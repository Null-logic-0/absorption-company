"use client";
import { sendMessage } from "@/_lib/actions";
import FormSubmit from "./FormSubmit";
import Input from "./Input";
import Tetxtarea from "./Tetxtarea";
import { useActionState } from "react";
import FormError from "./FormError";

function ContactsForm() {
  const [formState, formAction] = useActionState(sendMessage, {
    errors: {},
  });
  return (
    <form className="flex flex-col gap-4 p-5 " action={formAction}>
      <Input
        id="fullName"
        type="text"
        name="fullName"
        htmlFor="fullName"
        label="Full Name*"
      />
      <FormError error={formState?.errors?.fullName} />

      <Input
        type="email"
        name="email"
        id="email"
        htmlFor="email"
        label="Email adress*"
      />
      <FormError error={formState?.errors?.email} />

      <Input
        type="text"
        name="subject"
        id="subject"
        htmlFor="subject"
        label="Subject*"
      />
      <FormError error={formState?.errors?.subject} />

      <Tetxtarea name="message" placeholder="send a message" id="message" />
      <FormError error={formState?.errors?.message} />

      <FormSubmit>Submit</FormSubmit>
    </form>
  );
}

export default ContactsForm;
