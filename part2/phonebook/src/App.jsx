import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newSearch, setNewSearch] = useState("");

  console.log(persons);

  const handleSearchChange = (event) => {
    console.log(event.target.value);
    setNewSearch(event.target.value);
  }

  const filteredList = persons.filter((person)=> person.name.toLowerCase().includes(newSearch))

  const handleNameChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  const handlePhoneChange = (event) => {
    console.log(event.target.value);
    setNewNumber(event.target.value);
  };

  const addNote = (event) => {
    event.preventDefault();

    if(persons.find(person=>person.name===newName)) {
      alert(`${newName} is already added to phonebook`)
      return
    }

    const personObject = {
      name: newName,
      number: newNumber
    };

    setPersons(persons.concat(personObject));
    setNewName("");
    setNewNumber("");
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        <h2>search</h2>
        <div>
          filer shown with <input value={newSearch} onChange={handleSearchChange} />
        </div>
      </div>
      <div>
        <h2>add a new</h2>
        <form onSubmit={addNote}>
          <div>
            name: <input value={newName} onChange={handleNameChange} />
          </div>
          <div>
            number: <input value={newNumber} onChange={handlePhoneChange} />
          </div>
          <div>
            <button type="submit">add</button>
          </div>
        </form>
      </div>
      <h2>Numbers</h2>
      <div>
        {!newSearch ?
        <>
        {persons.map((person) => (
          <p key={person.name}>{person.name} {person.number}</p>
          ))}
        </>
        :
        <>
        {filteredList.map((person) => (
          <p key={person.name}>{person.name} {person.number}</p>
          ))}
        </>
        }
      </div>
    </div>
  );
};

export default App;
