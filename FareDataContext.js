import React, { createContext, useState, useContext } from 'react';

// Create Context for Fare Data
const FareDataContext = createContext();

// Custom hook to use Fare Data
export const useFareData = () => {
  return useContext(FareDataContext);
};

// FareDataProvider component
export const FareDataProvider = ({ children }) => {
  const [fareData, setFareData] = useState(null);

  const handleFareDataReceived = (data) => {
    setFareData(data);
  };

  return (
    <FareDataContext.Provider value={{ fareData, handleFareDataReceived }}>
      {children}
    </FareDataContext.Provider>
  );
};
