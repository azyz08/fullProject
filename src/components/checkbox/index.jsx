import React, { createContext, useState, useContext } from "react";

const CheckboxContext = createContext();

export const CheckboxProvider = ({ children }) => {
    const [isChecked, setIsChecked] = useState(false);

    return (
        <CheckboxContext.Provider value={{ isChecked, setIsChecked }}>
            {children}
        </CheckboxContext.Provider>
    );
};

export const useCheckbox = () => useContext(CheckboxContext);
