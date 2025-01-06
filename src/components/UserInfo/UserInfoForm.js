"use client";
import { useActionState, useState } from "react";
import FormSubmit from "../FormSubmit";
import Input from "../Input";
import CountrySelect from "./CountrySelect";
import PhoneNumberInput from "./PhoneNumberInput";
import { updateUserInfo } from "@/_lib/actions";
import FormError from "../FormError";

function UserInfoForm({ user }) {
  const [formState, formAction] = useActionState(updateUserInfo, {
    errors: {},
  });

  const [formData, setFormData] = useState({
    id: user?.id || "",
    name: user?.name || "",
    email: user?.email || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <form className="flex flex-col gap-5 " action={formAction}>
      {formData.id && (
        <input
          type="hidden"
          name="id"
          defaultValue={formData.id}
          id="id"
          onChange={handleChange}
        />
      )}
      <Input
        id="fullName"
        type="text"
        name="fullName"
        htmlFor="fullName"
        label="Full Name*"
        onChange={handleChange}
        defaultValue={formData.name}
      />

      <Input
        type="email"
        name="email"
        id="email"
        htmlFor="email"
        label="Email address*"
        onChange={handleChange}
        defaultValue={formData.email}
        readOnly={true}
      />

      <div className="flex items-center gap-4 justify-start flex-wrap">
        <div>
          <PhoneNumberInput />
          <FormError error={formState?.errors?.phoneNumber} />
        </div>
        <div>
          <CountrySelect />
          <FormError error={formState?.errors?.country} />
        </div>
      </div>
      <Input type="text" name="city" id="city" htmlFor="city" label="City" />
      <Input
        type="text"
        name="adress"
        id="adress"
        htmlFor="adress"
        label="Adress"
        onChange={handleChange}
        defaultValue={formData.adress}
      />
      <FormError error={formState?.errors?.adress} />
      <FormSubmit>Save</FormSubmit>
    </form>
  );
}

export default UserInfoForm;
