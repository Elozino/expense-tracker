// Reducer is a function that takes in the old state and an action and return a new one



const contextReducer = (state, action) => {
  let transaction;
  
  switch (action.type) {
    case "DELETE_TRANSACTION":
      transaction = state.filter(trans => trans.id !== action.payload);
      return transaction;

    case "ADD_TRANSACTION":
      transaction = [action.payload, ...state];
      return transaction;

    default:
      return state;
  }

}

export default contextReducer