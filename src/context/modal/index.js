import React from 'react';
import { reducer, initialState } from './reducer';

export const SubscribeModalContext = React.createContext({
  state: initialState,
  dispatch: () => null
})

export const SubscribeModalProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState)

  return (
    <SubscribeModalContext.Provider value={[state, dispatch]}>
      { children}
    </SubscribeModalContext.Provider>
  )
}