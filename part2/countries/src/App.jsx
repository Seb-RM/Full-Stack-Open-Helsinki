import { useEffect, useState } from "react";
import countryServices from "./services/countries";

function App() {
  const [countries, setCountries] = useState([]);
  const [newSearchString, setNewSearchString] = useState("");

  useEffect(() => {
    countryServices.getAll().then((initialCountries) => {
      setCountries(initialCountries);
    });
  }, []);
  console.log(countries);

  const handleSearchChange = (event) => {
    console.log(event.target.value);
    setNewSearchString(event.target.value);
  };

  return (
    <div>
      <h1>Countries</h1>
      <input value={newSearchString} onChange={handleSearchChange} />
    </div>
  );
}

export default App;
