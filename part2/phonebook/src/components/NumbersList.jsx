
const NumbersList = ({newSearch, persons, filteredList}) => {
    return (
        <div>
            <h2>Numbers</h2>
            <div>
                {!newSearch ? (
                <>
                    {persons.map((person) => (
                    <p key={person.name}>
                        {person.name} {person.number}
                    </p>
                    ))}
                </>
                ) : (
                <>
                    {filteredList.map((person) => (
                    <p key={person.name}>
                        {person.name} {person.number}
                    </p>
                    ))}
                </>
                )}
            </div>
        </div>
    );
}

export default NumbersList