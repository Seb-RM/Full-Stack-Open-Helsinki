import { useEffect, useState } from "react";
import countryServices from "./services/countries";

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
    console.log(event.target.value);
    setNewSearchString(event.target.value);
  };
  useEffect(()=> {
    setFilteredCountries(countries.filter((country)=> {
      const searchString = newSearchString.toLowerCase();
      console.log(searchString);
      const commonName = country.name.common.toLowerCase();
      // console.log(commonName);
      const officialName = country.name.official.toLowerCase();
      
      const regex = new RegExp(`\\b${searchString}\\w*\\b`, "i");
      // console.log(regex.test(commonName));
      
      return regex.test(commonName) || regex.test(officialName);
    }))
  }, [newSearchString, setFilteredCountries, countries]);
  console.log(filteredCountries.length)

  return (
    <div>
      <h1>Countries</h1>
      <input value={newSearchString} onChange={handleSearchChange} />
    </div>
  );
}

export default App;
