import React, { useEffect, useState } from "react";
import axios from "axios";
import FormInput from "./Components/FormInput/FormInput";
import CountryStats from "./Components/CountryStats/CountryStats.jsx";
import "./App.css";
import CountryList from "./Components/CountryList/CountryList.jsx";
const App = () => {
  const [data, setData] = useState([]); // API'den gelen tüm veri
  const [filteredData, setFilteredData] = useState(null); // Filtrelenmiş ülke verisi
  const [countryFromInput, setCountryFromInput] = useState(""); // Kullanıcıdan gelen ülke
  const [countryList, setcountryList] = useState([]); // Kullanıcıdan gelen ülke

  // API çağrısını yapan fonksiyon
  const fetchData = async () => {
    try {
      const response = await axios.get("https://covid-api.com/api/reports"); // API çağrısı
      setData(response.data.data);
    } catch (error) {
      console.error("Veri çekilirken bir hata oluştu:", error);
    }
  };

  const fetchData2 = async () => {
    try {
      const regions = await axios.get("https://covid-api.com/api/regions"); // API çağrısı
      console.log(regions.data.data);
      setcountryList(regions.data.data);
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
  }, [countryFromInput, data]);

  useEffect(() => {
    fetchData();
    fetchData2();
  }, []);

  return (
    <div>
      <h1>COVID-19 Country Stats</h1>
      <FormInput countryfrominputfield={setCountryFromInput} />

      {filteredData ? (
        <CountryStats stats={filteredData} />
      ) : (
        <p>Data is loading or no country found.</p>
      )}

      {countryList ? (
        <CountryList countrylist={countryList}></CountryList>
      ) : (
        <p>Data is loading or no country found.</p>
      )}
    </div>
  );
};

export default App;
