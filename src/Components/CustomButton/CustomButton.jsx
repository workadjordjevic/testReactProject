import React from 'react';
import "./CustomButton.css";


const CustomButton = ({id,onClick,size,variant,text,isDisabled}) => {

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
        <button id={id} className={`${size} ${buttonBackgroundColor()} ${disabledButtonClass()}`} disabled={isDisabled} onClick={onClick}>
            <p className="textColorClass">{text}</p>
        </button>
    );
};

export default CustomButton;