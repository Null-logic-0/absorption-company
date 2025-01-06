import dynamic from "next/dynamic";
import { useState } from "react";
import countries from "world-countries";

const Select = dynamic(() => import("react-select"), { ssr: false });

const countryOptions = countries.map((country) => ({
  value: country.cca2,
  label: `${country.name.common} (${country.cca2})`,
}));

function CountrySelect() {
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleCountryChange = (selectedOption) => {
    setSelectedCountry(selectedOption);
  };
  return (
    <div className="w-[300px] ">
      <label htmlFor="country" className="font-semibold text-sm pb-1">
        Country
      </label>
      <Select
        required
        id="country-select"
        name="country"
        options={countryOptions}
        value={selectedCountry}
        onChange={handleCountryChange}
        placeholder="Select your country"
        isSearchable
      />
    </div>
  );
}

export default CountrySelect;
