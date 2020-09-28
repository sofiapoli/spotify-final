import React, { Component, useState } from "react";

import { useHistory } from "react-router-dom";

export function SearchForm() {
  const history = useHistory();
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/artist?search=" + input);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="home-view__s">
        <input
          className="input"
          onChange={handleChange}
          type="text"
          placeholder="Type the name of your favorite artist..."
        />
        <button className="button_is_info">Search</button>
      </div>
    </form>
  );
}
