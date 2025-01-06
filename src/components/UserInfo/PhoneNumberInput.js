"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import "react-phone-input-2/lib/style.css";

const PhoneInput = dynamic(() => import("react-phone-input-2"), { ssr: false });

function PhoneNumberInput() {
  const [phoneNumber, setPhoneNumber] = useState("");
  return (
    <div>
      <label htmlFor="phoneNumber" className="font-semibold text-sm pb-1">
        Phone Number
      </label>
      <PhoneInput
        country={"us"}
        value={phoneNumber}
        onChange={(value) => setPhoneNumber(value)}
        inputProps={{
          name: "phoneNumber",
          required: true,
          autoFocus: false,
        }}
      />
    </div>
  );
}

export default PhoneNumberInput;
