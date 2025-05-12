import React, {useContext} from 'react';
import './CustomInput.scss';
import ThemeContext from "../../../Contexts/ThemeContext";
import {PropsCustomInput} from "../../../Interfaces/Interfaces";

const CustomInput = (props:PropsCustomInput) => {
    const {isDarkTheme} = useContext(ThemeContext);
    return (
        <input disabled={props.disabled}  value={props.value} type={props.type} onChange={props.onChange} placeholder={props.placeholder} style={props.style} className={`input input--${(isDarkTheme)? "Dark" : "Light"}Theme`}/>
    );
};

export default CustomInput;
