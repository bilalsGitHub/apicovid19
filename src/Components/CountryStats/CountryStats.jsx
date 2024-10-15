import React from "react";
import "./CountryStats.css";
const CountryStats = ({ stats }) => {
  const { date, confirmed, deaths, recovered, active, region } = stats;

  return (
    <div>
      <h2>{region.name} COVID-19 Statistics</h2>
      <p>Date: {date}</p>
      <p>Total Cases: {confirmed}</p>
      <p>Deaths: {deaths}</p>
      <p>Recovered: {recovered}</p>
      <p>Active Cases: {active}</p>
      <p>ISO Code: {region.iso}</p>
      <p>
        Latitude: {region.lat}, Longitude: {region.long}
      </p>
    </div>
  );
};

export default CountryStats;
