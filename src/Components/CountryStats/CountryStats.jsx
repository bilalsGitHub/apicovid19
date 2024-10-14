import React from "react";

const CountryStats = ({ stats }) => {
  const { date, confirmed, deaths, recovered, active, region } = stats;

  return (
    <div>
      <h2>{region.name} COVID-19 İstatistikleri</h2>
      <p>Tarih: {date}</p>
      <p>Toplam Vaka: {confirmed}</p>
      <p>Ölüm: {deaths}</p>
      <p>İyileşen: {recovered}</p>
      <p>Aktif Vaka: {active}</p>
      <p>ISO Kodu: {region.iso}</p>
      <p>
        Enlem: {region.lat}, Boylam: {region.long}
      </p>
    </div>
  );
};

export default CountryStats;
