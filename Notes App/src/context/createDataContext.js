import React, { useReducer } from "react";

export default (reducer, action, intialState) => {
  const context = React.createContext();

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, intialState);
    // action are going to be objects that might have key of like adblogpost and thats going to be a func that expect to be called by dipatch and inside there we are gonna return a func that actuallly do something
    // action === {addBlogPost:(dispatch)=>{return () =>{}}}

    const boundActions = {};

    for (let key in action) {
      //key==='addBlogPost'
      boundActions[key] = action[key](dispatch);
    }

    return (
      <context.Provider value={{ state, ...boundActions }}>
        {children}
      </context.Provider>
    );
  };

  return { context, Provider };
};
