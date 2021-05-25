
import React, { createContext, useState } from "react";

export const FormContext = createContext();


const FormContextProvider = props => {
  const [searchEntry, setSearchEntry] = useState("");

  const clearSearchInput = () => { !!searchEntry && setSearchEntry("")}

  const handleSubmit = (e, history, searchInput) => {
    e.preventDefault();
    let url = `/search/${searchInput}`;
    history.push(url);
  };

  return (
    <FormContext.Provider value={{ searchEntry, setSearchEntry, clearSearchInput, handleSubmit }}>
      {props.children}
    </FormContext.Provider>
  );
}

export default FormContextProvider;
