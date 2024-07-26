import { useEffect, useState, useMemo } from "react";
import countryServices from "./services/countries";
import CountryDetail from "./components/CountryDetail";

function App() {
  const [countries, setCountries] = useState([]);
  const [newSearchString, setNewSearchString] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    countryServices.getAll().then((initialCountries) => {
      setCountries(initialCountries);
    });
  }, []);
  // console.log(countries);

  const handleSearchChange = (event) => {
    // console.log(event.target.value);
    setNewSearchString(event.target.value);
  };

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
  };

  const filteredCountries = useMemo(() => {
    const searchString = newSearchString.toLowerCase();
    const regex = new RegExp(`\\b${searchString}\\w*\\b`, "i");

    return countries.filter((country) => {
      const commonName = country.name.common.toLowerCase();
      const officialName = country.name.official.toLowerCase();
      return regex.test(commonName) || regex.test(officialName);
    });
  }, [newSearchString, countries]);

  return (
    <div>
      <h1>Countries</h1>
      <input value={newSearchString} onChange={handleSearchChange} />
      {filteredCountries.length>10? (
        <p>Too many countries, specify another filter.</p>
      ) : filteredCountries.length=== 1?(<CountryDetail country={filteredCountries[0]}/>) : (
        <ul>
          {filteredCountries.map((country) => (
            <li key={country.name.official}>{country.name.official}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
