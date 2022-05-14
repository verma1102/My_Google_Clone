import React, { createContext, useContext, useReducer } from "react";
/* Preparing the Data Layer */
export const StateContext = createContext();
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer,
        initialState)}>
        {children}
    </StateContext.Provider>
);
/* Hook which allows us to pull Information from the Data */
export const useStateValue = () => useContext(StateContext);