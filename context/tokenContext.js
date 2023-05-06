import { createContext, useEffect, useReducer } from 'react';

export const TokenContext = createContext();

export const tokenReducer = (state, action) => {
  switch (action.type) {
    case 'TOKEN_VALUE':
      return { token: action.payload };

    default:
      return state;
  }
};

export const TokenContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(tokenReducer, {
    user: null,
  });

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('token'));
    if (token) {
      dispatch({ type: 'TOKEN_VALUE', payload: token });
    }
  }, []);
  // console.log('AuthContext state: ', state);

  return (
    <TokenContext.Provider value={{ ...state, dispatch }}>
      {children}
    </TokenContext.Provider>
  );
};
