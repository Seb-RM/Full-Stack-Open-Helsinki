import { useState } from "react";
import { useEffect } from "react";

import NumbersList from "./components/NumbersList";
import SearchFilter from "./components/SearchFilter";
import NewPersonForm from "./components/NewPersonForm";

import personService from './services/persons';


const App = () => {

  const [persons , setPersons] = useState([])
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newSearch, setNewSearch] = useState("");

  useEffect(() => {
    personService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

  const handleSearchChange = (event) => {
    console.log(event.target.value);
    setNewSearch(event.target.value);
  };

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

    personService.create(personObject).then((returnedPerson) => {
      setPersons(persons.concat(returnedPerson));
      setNewName("");
    setNewNumber("");
    });
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
