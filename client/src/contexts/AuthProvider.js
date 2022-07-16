import React, { useReducer, useContext, createContext } from 'react'

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

const initialState = {
  isLoggedIn: false,
  user: null
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload.user
      }
    case 'LOGOUT':
      return {
        ...state,
        isLoggedIn: false,
      }
    default:
      return state;
  }
}

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider