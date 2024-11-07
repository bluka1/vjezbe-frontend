import { createContext, useState } from "react";

export const UserContext = createContext(null);

const UserContextProvider = ({ children }) => {
  const [userDetails, setUserDetails] = useState({
    name: "Luka",
    age: "20",
    numberOfPurchases: 10,
  });

  return (
    <UserContext.Provider value={[userDetails, setUserDetails]}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
