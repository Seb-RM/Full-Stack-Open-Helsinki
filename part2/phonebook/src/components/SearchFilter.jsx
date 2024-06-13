
const SearchFilter = ({newSearch, handleSearchChange}) => {
  return (
    <div>
      <h2>search</h2>
      <div>
        filter shown with{" "}
        <input value={newSearch} onChange={handleSearchChange} />
      </div>
    </div>
  );
}

export default SearchFilter;