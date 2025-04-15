import React, {useState, createContext, useContext} from 'react';
import { Link,useLocation} from 'react-router-dom'
import './NavigationBar.scss';
import ChangeThemeButton from "../ChangeThemeButton/ChangeThemeButton";
import {returnThemeString} from "../../utils/returnThemeString";
import ThemeContext from "../../Contexts/ThemeContext";


const NavigationBar = () => {
    const location = useLocation();
    const {isDarkTheme} = useContext(ThemeContext);
    return (
        <nav className={`navbar navbar--${returnThemeString(isDarkTheme)}`}>
            <Link className={`${(location.pathname==="/calculator")? `navbar__tab--selected--${returnThemeString(isDarkTheme)}` : ""}  navbar__tab--${returnThemeString(isDarkTheme)} navbar__tab__calculator`} to='/calculator'> Calculator </Link>
            <Link className={`${(location.pathname==="/weather")? `navbar__tab--selected--${returnThemeString(isDarkTheme)}` : ""} navbar__tab--${returnThemeString(isDarkTheme)} navbar__tab__weather`} to='/weather'> Weather </Link>
            <Link className={`${(location.pathname==="/todolist")? `navbar__tab--selected--${returnThemeString(isDarkTheme)}` : ""} navbar__tab--${returnThemeString(isDarkTheme)} navbar__tab__todolist`} to='/todolist'> To-do List </Link>
            <ChangeThemeButton />
        </nav>
    );
};

export default NavigationBar;