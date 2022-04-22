import React, { useReducer, createContext } from "react";
import contextReducer from "./contextReducer";

const initialState = [];

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
  //state reps transactions
  const [transactions, dispatch] = useReducer(contextReducer, initialState)
  console.log(transactions)
  // Action Creators
  const deleteTransaction = id => {
    dispatch({ type: "DELETE_TRANSACTION", payload: id })
  }

  const addTransaction = id => {
    dispatch({ type: "ADD_TRANSACTION", payload: id })
  }

  return (
    <ExpenseTrackerContext.Provider
      value={{ transactions, deleteTransaction, addTransaction }}>
      {children}
    </ExpenseTrackerContext.Provider >
  );
};
