
function CountryDetail({country}) {
    return (
        <div>
            <h1>{country.name.official}</h1>
            <h5>{country.name.common}</h5>
            <p>{country.capital}</p>
            <p>{country.population}</p>
            <p>{country.area}</p>
            <ul>{Object.keys(country.languages).map(key => (
                <li key={key}>{country.languages[key]}</li>
            ))}</ul>
        </div>
    );
}

export default CountryDetail