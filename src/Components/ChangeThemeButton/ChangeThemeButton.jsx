import React, {useContext, useEffect, useState} from 'react';
import './ChangeThemeButton.scss';
import ThemeContext from "../../Contexts/ThemeContext";
import {returnThemeString} from "../../utils/returnThemeString";
import {returnCapitalLetterThemeString} from "../../utils/returnCapitalLetterThemeString";

const ChangeThemeButton = () => {

    const {isDarkTheme, setIsDarkTheme} = useContext(ThemeContext);

    function changeTheme() {
        setIsDarkTheme(!isDarkTheme);
    }

    return (
        <button className={(isDarkTheme)? "darkButtonTheme" : "lightButtonTheme"} onClick={changeTheme}>
            {returnCapitalLetterThemeString(isDarkTheme)}
        </button>
    );
};

export default ChangeThemeButton;