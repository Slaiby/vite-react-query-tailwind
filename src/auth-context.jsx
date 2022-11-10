import { createContext, useContext, useEffect, useReducer } from "react";
import getUser from "./userApi";
import {
  retrieveLocalStorageData,
  setLocalStorageData,
  removeFromLocalStorage,
} from "./hooks/useLocalStorage";

const AuthStateContext = createContext(null);
const AuthDispatchContext = createContext(null);

const reducer = (currentState, newState) => {
  return { ...currentState, ...newState };
};

const useAuthState = () => {
  const context = useContext(AuthStateContext);
  if (!context) throw new Error("useAuthState must be used in AuthProvider");

  return context;
};

const useAuthDispatch = () => {
  const context = useContext(AuthDispatchContext);
  if (!context) throw new Error("useAuthDispatch must be used in AuthProvider");

  return context;
};

const isAuthenticated = () => {
  const context = useContext(AuthStateContext);
  console.log(
    "🚀 ~ file: auth-context.jsx ~ line 32 ~ isAuthenticated ~ context",
    context
  );
  return !!context.access_token && !!context.refresh_token;
};

const AuthProvider = (props) => {
  const { access_token, refresh_token, user, roles } =
    retrieveLocalStorageData("auth");
  const initialState = {
    access_token,
    refresh_token,
    user,
    roles,
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    console.log(
      "🚀 ~ file: auth-context.jsx ~ line 40 ~ AuthProvider ~ state",
      state
    );
  }, [state]);

  return (
    <AuthStateContext.Provider value={state}>
      <AuthDispatchContext.Provider value={dispatch}>
        {props.children}
      </AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  );
};

const doLogin = async (dispatch, user) => {
  try {
    dispatch({ status: "pending" });

    const result = await getUser(user);
    setLocalStorageData("auth", result);
    dispatch({ ...result });
  } catch (error) {
    dispatch({ status: "rejected", error });
  }
};

const doLogout = (dispatch) => {
  removeFromLocalStorage("auth");
  dispatch(null);
};

export {
  AuthProvider,
  useAuthState,
  useAuthDispatch,
  doLogin,
  doLogout,
  isAuthenticated,
};
