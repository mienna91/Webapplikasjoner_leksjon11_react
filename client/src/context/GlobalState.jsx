import React, { useReducer } from 'react';

import { createContainer } from 'react-tracked';

const useValue = ({ reducer, initialState }) =>
  useReducer(reducer, initialState);
const { Provider, useTracked } = createContainer(useValue);

const initialState = {
  user: '',
  question: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'updateUser':
      return { ...state, user: action.text };
    case 'updateQuestion':
      return { ...state, question: action.text };
    default:
      throw new Error(`unknow action type: ${action.type}`);
  }
};

const GlobalState = ({children}) => (
  <Provider reducer={reducer} initialState={initialState}>
    {children}
  </Provider>
);

export default GlobalState;
