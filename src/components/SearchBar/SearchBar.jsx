const SearchBar = ((onSubmit)) => {
  
  const handleSubmit = () => {
    
  }
  
  return (
    <>
      <header>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />
          <button type="submit">Search</button>
        </form>
      </header>
    </>
  );
};

export default SearchBar;
