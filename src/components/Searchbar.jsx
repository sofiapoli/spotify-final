import React, { useState } from "react";

import { useHistory } from "react-router-dom";

const Searchbar = () => {
  const history = useHistory();

  const [input, setInput] = useState("");

  const handleChange = (event) => setInput(event.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    history.push("/artists?search=" + input);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full mt-5 mb-4">
      <input
        type="search"
        placeholder="Type the name of your favorite artist"
        name=""
        id=""
        className="w-11/12 rounded py-1 px-4 bg-pink-900"
        onChange={handleChange}
      />

      <button className="bg-black-300 hover:bg-black-400 text-gray-800 font-bold py-2 px-4 rounded w-1/12">
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
            strokeWidth="4"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
    </form>
  );
};

export default Searchbar;
