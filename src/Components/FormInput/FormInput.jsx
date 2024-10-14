import React, { useState } from "react";

const FormInput = ({ countryfrominputfield }) => {
  const [country, setcountry] = useState("");
  const submithandler = (e) => {
    e.preventDefault();
    console.log("country " + country);
    setcountry("");
    countryfrominputfield(country);
  };
  return (
    <div>
      <form onSubmit={submithandler}>
        <input
          type="text"
          onChange={(e) => {
            setcountry(e.target.value);
          }}
          placeholder="Please type the country "
          value={country}
        />
        <button onSubmit={submithandler}>Enter</button>
      </form>
      <h1>{country}</h1>
    </div>
  );
};

export default FormInput;
