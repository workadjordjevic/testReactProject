import React, {useContext, useState, FC} from 'react';
import {getOperands} from "../../utils/calculator";
import {calcCalculatorResult} from "../../utils/calculator"
import {deleteLastSymbol} from "../../utils/string";
import CalculatorButtonT from "./CalculatorButtonT";
import CustomInputT from "../UI/CustomInput/CustomInputT";
import CustomButtonT from "../UI/CustomButton/CustomButtonT";
import ThemeContext from "../../Contexts/ThemeContext";
import './Calculator.css';

const Calculator: FC = () => {
    const [value, setValue] = useState <string> ("");
    let operands: string[] = getOperands();
    let options: string[] = operands.concat([...Array(10)].map((_, index) => index.toString()) , ["="] , ["Clear"]);
    const {isDarkTheme} = useContext(ThemeContext);

    function handleSetValue(buttonValue :string) {
        let tempValue :string = value;

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
        return <CalculatorButtonT value={element} key={element} onButtonClick={handleSetValue}/>
    })
    }
    <CustomInputT disabled value={value} placeholder={"Enter number here "} style={{width:"25%", height:"12%"}}/>
    <CustomButtonT id="resetButton" text="Reset" size="small" variant="primary"  onClick={resetInput}/>
        </div>
    );
};

export default Calculator;