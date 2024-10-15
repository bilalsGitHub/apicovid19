import React from "react";
import "./CountryList.css";
const CountryList = ({ countrylist }) => {
  return (
    <div>
      <h2>All Countries</h2>
      <ul>
        {countrylist.map((each, index) => {
          return (
            <li key={index}>
              {each.name} {/* Hier wird der Name des Landes angezeigt */}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CountryList;
