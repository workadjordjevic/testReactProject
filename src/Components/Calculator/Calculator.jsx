import React, {useContext, useState} from 'react';
import CalculatorButton from "./CalculatorButton";
import {getOperands} from "../../utils/calculator";
import {calcCalculatorResult} from "../../utils/calculator"
import {deleteLastSymbol} from "../../utils/string";
import './Calculator.css';
import ThemeContext from "../../Contexts/ThemeContext";
import CustomButton from "../UI/CustomButton/CustomButton";
import CustomInput from "../UI/CustomInput/CustomInput";

const Calculator = () => {
    const [value, setValue] = useState("");
    let operands = getOperands();
    let options = operands.concat([...Array(10)].map((_, index) => index) , ["="] , ["Clear"]);
    const {isDarkTheme} = useContext(ThemeContext);

    function handleSetValue(buttonValue) {
        let tempValue = value;

        if (value === "" && operands.includes(buttonValue)) {
            return;
        }

        if (buttonValue === "=") {
            setValue(calcCalculatorResult(value));
            return;
        }

        if (value === "" && operands.includes(buttonValue)) {
            return;
        }

        if (buttonValue === "Clear") {
            setValue(deleteLastSymbol(tempValue));
            return;
        }

        if (operands.includes(value[value.length - 1]) && operands.includes(buttonValue)) {
             tempValue = deleteLastSymbol(tempValue);
        }

        setValue(tempValue + buttonValue.toString());
    }

    function resetInput(){
        setValue("");
    }

    return (
        <div className={`${(isDarkTheme)? "dark" : "light"}ThemeCalculatorWindow calculatorWindow`}>
            {options.map((element) => {
                return <CalculatorButton value={element} key={element} onButtonClick={handleSetValue}/>
            })
            }
            <CustomInput disabled value={value} placeholder={"Enter number here "} style={{width:"25%", height:"12%"}}/>
            <CustomButton id="resetButton" text="Reset" size="small" variant="primary"  onClick={resetInput}>Reset</CustomButton>
        </div>
    );
};

export default Calculator;


// как получить данные о погоде