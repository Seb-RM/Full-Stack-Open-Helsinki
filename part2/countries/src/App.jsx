import { useEffect, useState } from "react";
import countryServices from "./services/countries";
import CountryDetail from "./components/CountryDetail";

function App() {
  const [countries, setCountries] = useState([]);
  const [newSearchString, setNewSearchString] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);

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
  useEffect(()=> {
    setFilteredCountries(countries.filter((country)=> {
      const searchString = newSearchString.toLowerCase();
      // console.log(searchString);
      const commonName = country.name.common.toLowerCase();
      // console.log(commonName);
      const officialName = country.name.official.toLowerCase();
      
      const regex = new RegExp(`\\b${searchString}\\w*\\b`, "i");
      // console.log(regex.test(commonName));
      
      return regex.test(commonName) || regex.test(officialName);
    }))
  }, [newSearchString, setFilteredCountries, countries]);
  // console.log(filteredCountries.length);
  // console.log(filteredCountries[0])

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
