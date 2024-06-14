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

  const filteredList = persons.filter((person)=> person.name.toLowerCase().includes(newSearch.toLowerCase()))

  const handleNameChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  const handlePhoneChange = (event) => {
    console.log(event.target.value);
    setNewNumber(event.target.value);
  };

  const addPerson = (event) => {
    event.preventDefault();
    
    const personObject = {
      name: newName,
      number: newNumber,
    };

    if (
      persons.find(
        (person) => person.name.toLowerCase() === newName.toLowerCase()
      )
    ) {
      if(confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)){
        const personToUpdate = persons.find(
          (person) => person.name.toLowerCase() === newName.toLowerCase()
        );
        console.log(personToUpdate.id);
        personService.update(personToUpdate.id, personObject).then((returnedPerson) => {
          setPersons(persons.map(person => person.id !== personToUpdate.id ? person : returnedPerson));
          setNewName("");
          setNewNumber("");
        });
        return;
        }
        setNewName("");
        setNewNumber("");
        return;
    }


    personService.create(personObject).then((returnedPerson) => {
      setPersons(persons.concat(returnedPerson));
      setNewName("");
      setNewNumber("");
    });
  };

  const deletePerson = (id) => {
    const personToDelete = persons.find((person) => person.id === id)
    console.log(personToDelete)
    const message = `Delete ${personToDelete.name}?`;
    if(confirm(message)){
      personService.erase(id);
      setPersons(persons.filter(person => person.id !== id));
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <SearchFilter
        newSearch={newSearch}
        handleSearchChange={handleSearchChange}
      />
      <NewPersonForm
        addPerson={addPerson}
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handlePhoneChange={handlePhoneChange}
      />
      <NumbersList
        newSearch={newSearch}
        persons={persons}
        filteredList={filteredList}
        deletePerson={deletePerson}
      />
    </div>
  );
};

export default App;
