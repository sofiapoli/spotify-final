import debounce from "lodash.debounce";
import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
const Searchbar = () => {
  const history = useHistory();
  const searchInputRef = useRef(null);
  const handleSubmit = (e) => {
  
    // e.preventDefault();
    const value=searchInputRef.current?.value;
    
    
    if (value) history.push("/artists?search=" + value);
  };
  const onChange = (event) => {
    event.preventDefault()
    const { target: { value } } = event
    const search = debounce(handleSubmit, 3000);
  
    search(value);
    
  };
  return (
    <form onKeyUp={onChange} className="w-full mt-4 mb-4 flex">
      <input
        ref={searchInputRef}
        type="search"
        placeholder="Type the name of your favorite artist"
        name=""
        className="w-11/12 rounded py-1 px-4 bg-pink-900"
      />
      <button className="bg-black-500 hover:bg-pink-900 text-gray-900 font-bold py-2 px-4 rounded">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          className="h-4"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
    </form>
  );
};
export default Searchbar;
