const CountryList = ({ countries, onSelectCountry }) => (
    <ul>
        {countries.map((country) => (
        <li key={country.name.official} >
            {country.name.official}
            {" "}
            <button onClick={() => onSelectCountry(country)}>Show</button>
        </li>
        ))}
    </ul>
);

export default CountryList;