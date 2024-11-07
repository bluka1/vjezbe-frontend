import { useState } from "react";
import Komponenta4 from "./Komponenta4";
import { useContext } from "react";
import { UserContext } from "./UserContextProvider";

const Komponenta3 = () => {
  const [userDetails, setUserDetails] = useContext(UserContext);

  const increasePurchasesHandler = () => {
    setUserDetails((prevState) => {
      return {
        ...prevState,
        numberOfPurchases: prevState.numberOfPurchases + 1,
      };
    });
  };

  return (
    <div>
      <p>Komponenta3</p>
      <div>
        <p>Number of Purchases: {userDetails.numberOfPurchases}</p>
        <button onClick={increasePurchasesHandler}>INCREASE PURCHASES</button>
      </div>
      <Komponenta4 />
    </div>
  );
};

export default Komponenta3;
