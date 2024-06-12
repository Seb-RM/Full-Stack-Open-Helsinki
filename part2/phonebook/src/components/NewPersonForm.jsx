
const NewPersonForm = ({addNote, newName, newNumber, handleNameChange, handlePhoneChange}) => {
    return (
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
    );
}

export default NewPersonForm;