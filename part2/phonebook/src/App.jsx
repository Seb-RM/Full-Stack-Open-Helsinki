import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");
  console.log(persons);

  const handleNameChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  const addNote = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
    };

    setPersons(persons.concat(personObject));
    setNewName("");
  };

  return (
    <div>
      <div>debug: {newName}</div>
      <h2>Phonebook</h2>
      <form onSubmit={addNote}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        <ul>
          {persons.map((person)=><li key={person.name}>{person.name}</li>)}
        </ul>
      </div>
    </div>
  );
};

export default App;
