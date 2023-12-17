'use client';

const SearchBar = ({ searchTerm, handleSearchInput, handleSearchSubmit }) => {
  const handleSearch = (e) => {
    handleSearchInput(e.target.value);
  };

  const handleSubmit = () => {
    handleSearchSubmit();
  };

  return (
    <div className="flex justify-center p-8 mb-20 font-mono">
      <input
        type="text"
        placeholder="Search by restaurant, City, State or Zip Code..."
        className="border-2 rounded-md w-[30em] px-4 border-red-200 text-black"
        onChange={handleSearch}
      />
      <button
        className="rounded-md bg-indigo-600 ml-1 px-3.5 py-2.5 text-sm font-mono text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer disabled:cursor-not-allowed disabled:opacity-60"
        onClick={handleSubmit}
        disabled={!searchTerm}
      >
        Submit
      </button>
    </div>
  );
};

export default SearchBar;
