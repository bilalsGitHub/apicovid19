import React, { useEffect, useState } from "react";
import axios from "axios";
import FormInput from "./Components/FormInput/FormInput";
import CountryStats from "./Components/CountryStats/CountryStats.jsx";

const App = () => {
  const [data, setData] = useState([]); // API'den gelen tüm veri
  const [filteredData, setFilteredData] = useState(null); // Filtrelenmiş ülke verisi
  const [countryFromInput, setCountryFromInput] = useState(""); // Kullanıcıdan gelen ülke

  // API çağrısını yapan fonksiyon
  const fetchData = async () => {
    try {
      const response = await axios.get("https://covid-api.com/api/reports"); // API çağrısı
      setData(response.data.data); // Gelen veriyi state'e kaydediyoruz
    } catch (error) {
      console.error("Veri çekilirken bir hata oluştu:", error);
    }
  };

  // Ülke adına göre filtreleme
  useEffect(() => {
    if (countryFromInput) {
      const filtered = data.find(
        (item) =>
          item.region.name.toLowerCase() === countryFromInput.toLowerCase()
      );
      setFilteredData(filtered);
    }
  }, [countryFromInput, data]); // countryFromInput veya data değişirse filtreleme yapılır

  // Component yüklendiğinde API çağrısını yap
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>COVID-19 Country Stat</h1>

      {/* FormInput componentinden gelen ülke bilgisi */}
      <FormInput countryfrominputfield={setCountryFromInput} />

      {/* Eğer filtrelenmiş veri varsa CountryStats componentine gönder */}
      {filteredData ? (
        <CountryStats stats={filteredData} />
      ) : (
        <p>Veri bekleniyor veya ülke bulunamadı.</p>
      )}
    </div>
  );
};

export default App;
