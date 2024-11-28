import React, { useState, useEffect} from "react";
import smartphoneListData from "./data";
import Card from "./Components/Card";

/*lb4 */
import useStatus from "./Hooks/useStatus";
//import useLogState from "./Hooks/useLogState";

const SmartphoneList = () => {
  const [currency, setCurrency] = useState("UAH");
  const [exchangeRate] = useState(41.65); 
  
  /*lb4 */
  const [status, updateStatus] = useStatus("Loading");
  // useLogState(status);
  useEffect(() => {
    console.log(`Status has changed to: ${status}`);
  }, [status]);
  const changeStatus = () => {
    updateStatus("Complete");
  };

  const toggleCurrency = () => {
    setCurrency((prevCurrency) => (prevCurrency === "UAH" ? "USD" : "UAH"));
  };

  const calculatePrice = (priceInUAH) => {
    return currency === "USD"
      ? (priceInUAH / exchangeRate).toFixed(2) 
      : priceInUAH;
  };

  return (
    <div>
      <div class="header"> 
        <h2>Smartphone List</h2>
        <button onClick={toggleCurrency}>
          Change to {currency === "UAH" ? "USD" : "UAH"}
        </button>
        {/*lb4 */}
        <h4>Status: {status}</h4>
        <button onClick={changeStatus}>Change Status</button>
      </div>
      <ul className="SmartphoneList">
        {smartphoneListData.map((phone, index) => (
          <Card key={index}
          smartphone={phone}
          currency={currency}
          calculatePrice={calculatePrice} />
        ))}
      </ul>
    </div>
  );
};

export default SmartphoneList;
