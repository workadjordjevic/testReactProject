import React, {useContext} from 'react';
import './CustomInput.scss';
import ThemeContext from "../../../Contexts/ThemeContext";

const CustomInput = (props) => {
    const {isDarkTheme} = useContext(ThemeContext);
    return (
        <input value={props.value} type={props.type} onChange={props.onChange} placeholder={props.placeholder} style={props.style} className={`input input--${(isDarkTheme)? "Dark" : "Light"}Theme`}/>
    );
};

export default CustomInput;