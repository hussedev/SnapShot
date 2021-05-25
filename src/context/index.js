import React from "react";
import PhotoContextProvider from "./PhotoContext";
import FormContextProvider from "./FormContext";

const ContextProvider = props => (
  <PhotoContextProvider>
    <FormContextProvider>
      {props.children}
    </FormContextProvider>
  </PhotoContextProvider>
);


export default ContextProvider;