"use client";

import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [userAccounts, setUserAccounts] = useState(null);
  const [selectedAccount, setSelectedAccount] = useState(null);

  return (
    <UserContext.Provider
      value={{
        userData,
        setUserData,
        userAccounts,
        setUserAccounts,
        selectedAccount,
        setSelectedAccount,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
