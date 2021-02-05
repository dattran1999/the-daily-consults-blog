import React from 'react';
import { reducer, initialState } from './reducer';

export const ModalContext = React.createContext({
  state: initialState,
  dispatch: () => null
})

export const ModalProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState)

  return (
    <ModalContext.Provider value={[state, dispatch]}>
      { children}
    </ModalContext.Provider>
  )
}