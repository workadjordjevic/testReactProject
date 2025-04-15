import React, {useContext, useEffect, useState} from 'react';
import './ChangeThemeButton.scss';
import ThemeContext from "../../Contexts/ThemeContext";
import {returnThemeString} from "../../utils/returnThemeString";

const ChangeThemeButton = () => {

    const {isDarkTheme, setIsDarkTheme} = useContext(ThemeContext);

    function changeTheme() {
        setIsDarkTheme(!isDarkTheme);
    }

    function printThemeName() {
        return isDarkTheme? "Dark" : "Light";
        }

    return (
        <button className={`${returnThemeString(isDarkTheme)}ButtonTheme`} onClick={changeTheme}>
            {printThemeName()}
        </button>
    );
};

export default ChangeThemeButton;