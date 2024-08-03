import React, { useState, useRef, useContext } from "react";
import { CountryContext } from "../Context/CountryContext";
import axios from "axios";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);
  const { setCountries, setHistory } = useContext(CountryContext);

  const handleSearch = async () => {
    try {
      const res = await axios.get(`/api/countries/${query}`);
      setCountries(res.data);
      await axios.post("/api/history", { currencyCode: query });
      const historyRes = await axios.get("/api/history");
      setHistory(historyRes.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search by currency code..."
          value={query}
          onChange={handleChange}
          ref={inputRef}
        />
        <button type="submit" style={{ background: "ppalevioletred" }}>
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
