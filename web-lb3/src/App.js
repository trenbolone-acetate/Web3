import React, { useState} from "react";
import smartphoneListData from "./data";
import Card from "./Components/Card";

const SmartphoneList = () => {
  const [currency, setCurrency] = useState("UAH");
  const [exchangeRate] = useState(41.65); 

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
