

import React, { createContext } from "react";
import all_product from "../Componets/Assets/all_product.js"; // assuming it's an array


// Create the context with a default value (e.g., empty array for all_product)
export const ShopContext = createContext({
  all_product: [...all_product], // Default value as an empty array
});

const ShopContextProvider = (props) => {
 





  const contextValue = { all_product };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;


