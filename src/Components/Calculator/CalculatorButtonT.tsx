import React, {FC, useContext} from "react";
import ThemeContext from "../../Contexts/ThemeContext";
import "./CalculatorButton.scss";
import {IPropsCalculatorButton} from "../../Interfaces/Interfaces";

const CalculatorButton: FC<IPropsCalculatorButton> = ({value, onButtonClick}) => {
    const {isDarkTheme} = useContext(ThemeContext);
    return (
        <button onClick={() => onButtonClick(value)} className={`calculatorButton ${(isDarkTheme)? "dark" : "light"}ThemeCalculatorButton`}>
            {value}
        </button>
    );
};

export default CalculatorButton;