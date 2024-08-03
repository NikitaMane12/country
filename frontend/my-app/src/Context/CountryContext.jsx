import React, { createContext, useState } from "react";

const CountryContext = createContext();

const CountryProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [history, setHistory] = useState([]);

  return (
    <CountryContext.Provider
      value={{
        countries,
        setCountries,
        favorites,
        setFavorites,
        history,
        setHistory,
      }}
    >
      {children}
    </CountryContext.Provider>
  );
};

export { CountryProvider, CountryContext };
