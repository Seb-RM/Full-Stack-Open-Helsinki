import { useEffect, useState } from "react";
import countryServices from "./services/countries";

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    countryServices.getAll().then((initialPersons) => {
      setCountries(initialPersons);
    });
  }, []);

  console.log(countries);
  return (
    <div>
      <h1>Countries</h1>
      <input></input>
    </div>
  );
}

export default App;
