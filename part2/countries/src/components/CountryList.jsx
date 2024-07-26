const CountryList = ({ countries, onSelectCountry }) => (
    <ul>
        {countries.map((country) => (
            <li key={country.name.official} onClick={() => onSelectCountry(country)}>
                {country.name.official}
            </li>
        ))}
    </ul>
);

export default CountryList;