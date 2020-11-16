import React, { createContext, useState } from 'react';

export const GlobalContext2 = createContext({
  state: '',
  updateState: (user) => {},
});

export const GlobalQuestionState = ({children}) => {
  const [state, setState] = useState();

  const updateState = (question) => {
    setState(question);
  };

  return (
    <GlobalContext.Provider value={{ state, updateState }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalQuestionState;
