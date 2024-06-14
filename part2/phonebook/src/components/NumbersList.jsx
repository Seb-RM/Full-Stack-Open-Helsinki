
const NumbersList = ({newSearch, persons, filteredList, deletePerson}) => {
    return (
      <div>
        <h2>Numbers</h2>
        <div>
          {!newSearch ? (
            <>
              {persons.map((person) => (
                <p key={person.name}>
                  {person.name} {person.number}
                  {" "}
                  <button onClick={() => deletePerson(person.id)}>
                    delete
                  </button>
                </p>
              ))}
            </>
          ) : (
            <>
              {filteredList.map((person) => (
                <p key={person.name}>
                  {person.name} {person.number}{" "}
                  <button onClick={() => deletePerson(person.id)}>
                    delete
                  </button>
                </p>
              ))}
            </>
          )}
        </div>
      </div>
    );
}

export default NumbersList