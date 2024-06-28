import.meta.env; 
function CountryDetail({ country }) {
    console.log(import.meta.env.VITE_WEATHER_API);
    return (
        <div>
        <h1>{country.name.official}</h1>
        <h5>{country.name.common}</h5>
        <p>{country.capital}</p>
        <p>{country.population}</p>
        <p>{country.area}</p>
        <ul>
            {Object.keys(country.languages).map((key) => (
            <li key={key}>{country.languages[key]}</li>
            ))}
        </ul>
        <p>{country.area}</p>
        <img src={`${country.flags.svg}`} alt={`${country.flags.alt}`} />
        </div>
    );
}

export default CountryDetail;
