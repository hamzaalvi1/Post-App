import { createContext, useState } from "react";
import { ApiHook } from "../ApiHook/ApiHook";

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
  const { postData, checkCache, setCheckCache } = ApiHook();
  console.log(postData);

  return (
    <GlobalContext.Provider value={{ postData, checkCache, setCheckCache }}>
      {props.children}
    </GlobalContext.Provider>
  );
};
