import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import SearchFilter from "./components/SearchFilter";
import NewPersonForm from "./components/NewPersonForm";
import NumbersList from "./components/NumbersList";

const App = () => {
  const [persons , setPersons] = useState([])
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newSearch, setNewSearch] = useState("");

  useEffect(() => {
    console.log("effect");
    axios.get("http://localhost:3001/persons").then((response) => {
      console.log("promise fulfilled");
      setPersons(response.data);
    });
  }, [])
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
