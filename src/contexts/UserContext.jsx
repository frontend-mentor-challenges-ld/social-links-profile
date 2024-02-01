import { createContext, useContext } from "react";

import userData from "../data/user.json";

const UserContext = createContext();

function UserProvider({ children }) {
  const user = userData;

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}

function useUser() {
  const context = useContext(UserContext);

  if (context === undefined)
    throw new Error("UserContext was used outside of the UserProvider");

  return context;
}

export { UserProvider, useUser };
