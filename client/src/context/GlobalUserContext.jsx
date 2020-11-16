import React, { createContext, useState } from 'react';

export const GlobalContext = createContext({
  state: '',
  questionState: '',
  updateState: (user) => {},
  updateQuestionState: (question) => {},
});

export const GlobalUserState = ({children}) => {
  const [state, setState] = useState();

  const updateState = (user) => {
    setState(user);
  };

  const [questionState, setQuestionState] = useState();

  const updateQuestionState = (question) => {
    setQuestionState(question);
  };

  return (
    <GlobalContext.Provider
      value={{ state, questionState, updateState, updateQuestionState }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalUserState;
