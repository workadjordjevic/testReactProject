import React, {useContext} from 'react';
import "./CustomButton.css";
import ThemeContext from "../../Contexts/ThemeContext";
import {returnCapitalLetterThemeString} from "../../utils/returnCapitalLetterThemeString";


const CustomButton = ({id,onClick,size,variant,text,isDisabled}) => {

    const {isDarkTheme} = useContext(ThemeContext);

    function buttonBackgroundColor() {
        if (variant === "secondary"){
            return "backgroundColorSecondary";
        }
        else
            return "backgroundColorPrimary";
    }

    function disabledButtonClass() {
        if(isDisabled)
            return "disabled"
        else
            return "";
    }

    return (
        <button id={id} className={`${size} ${buttonBackgroundColor()}${returnCapitalLetterThemeString(isDarkTheme)} ${disabledButtonClass()}`} disabled={isDisabled} onClick={onClick}>
            <p className="textColorClass">{text}</p>
        </button>
    );
};

export default CustomButton;