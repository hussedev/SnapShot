import React, { useContext, useEffect } from "react";
import { PhotoContext } from "../context/PhotoContext";
import { FormContext } from "../context/FormContext"
import Gallery from "./Gallery";
import Loader from "./Loader";

const Container = ({ searchTerm }) => {
  const { images, loading, runSearch } = useContext(PhotoContext);
  const { clearSearchInput } = useContext(FormContext);
  useEffect(() => {
    runSearch(searchTerm);
    clearSearchInput();
    // eslint-disable-next-line
  }, [searchTerm]);

  return (
    <div className="photo-container">
      {loading ? <Loader /> : <Gallery data={images} />}
    </div>
  );
};

export default Container;
