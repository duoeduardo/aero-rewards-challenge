import React, { useState, useContext, useReducer, useEffect } from "react";
import reducer from "../reducer";
const productItems = [];

const token = process.env.REACT_APP_API_KEY;

const url = "https://coding-challenge-api.aerolab.co/products";
const AppContext = React.createContext();

const initialState = {
  loading: false,
  products: productItems,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchData = async () => {
    dispatch({ type: "LOADING" });
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const products = await response.json();
    dispatch({ type: "DISPLAY_ITEMS", payload: products });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AppContext.Provider
      value={{
        ...state,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
