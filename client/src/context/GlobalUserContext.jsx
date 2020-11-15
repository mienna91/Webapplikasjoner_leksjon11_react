import React, { createContext, useState } from 'react';

const initialState = {
  name: '',
  email: '',
};

const Context = createContext();

const GlobalUserState = ({children}) => {
  const [state, setState] = useState();

  return (
    <Context.Provider value={[state, setState]}>{children}</Context.Provider>
  );
};

export { GlobalUserState, Context };
