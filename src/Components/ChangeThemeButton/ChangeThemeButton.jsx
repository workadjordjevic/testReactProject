import React, {useContext, useEffect, useState} from 'react';
import './ChangeThemeButton.scss';
import ThemeContext from "../../Contexts/ThemeContext";

const ChangeThemeButton = () => {

    const {isDarkTheme, setIsDarkTheme} = useContext(ThemeContext);

    function changeTheme() {
        setIsDarkTheme(!isDarkTheme);
    }

    function printThemeName() {
        return isDarkTheme? "Dark" : "Light";
        }

    return (
        <button className={isDarkTheme? "buttonThemeDark" : "buttonThemeLight"} onClick={changeTheme}>
            {printThemeName()}
        </button>
    );
};

export default ChangeThemeButton;