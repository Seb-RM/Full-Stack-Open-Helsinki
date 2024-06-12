import { useState } from "react";
import SearchFilter from "./components/SearchFilter";
import NewPersonForm from "./components/NewPersonForm";
import NumbersList from "./components/NumbersList";

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

  console.log(persons.map(person => person.name.toLowerCase()));

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

    if(persons.find(person=>person.name.toLowerCase()===newName.toLowerCase())) {
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
      <SearchFilter newSearch={newSearch} handleSearchChange={handleSearchChange} />
      <NewPersonForm addNote={addNote} newName={newName} newNumber={newNumber} handleNameChange={handleNameChange} handlePhoneChange={handlePhoneChange}/>
      <NumbersList newSearch={newSearch} persons={persons} filteredList={filteredList}/>
    </div>
  );
};

export default App;
