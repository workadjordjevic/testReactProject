import React, {useContext} from 'react';
import {returnThemeString} from "../../utils/returnThemeString";
import ThemeContext from "../../Contexts/ThemeContext";
import "./CalculatorButton.scss";

const CalculatorButton = ({value, onButtonClick}) => {
    const {isDarkTheme} = useContext(ThemeContext);
    return (
        <button onClick={() => onButtonClick(value)} className={`calculatorButton ${returnThemeString(isDarkTheme)}ThemeCalculatorButton`}>
            {value}
        </button>
    );
};

export default CalculatorButton;