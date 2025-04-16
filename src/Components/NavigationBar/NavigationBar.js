import React, {useContext} from 'react';
import { Link,useLocation} from 'react-router-dom'
import './NavigationBar.scss';
import ChangeThemeButton from "../ChangeThemeButton/ChangeThemeButton";
import ThemeContext from "../../Contexts/ThemeContext";


const NavigationBar = () => {
    const location = useLocation();
    const {isDarkTheme} = useContext(ThemeContext);
    return (
        <nav className={`navbar navbar--${(isDarkTheme)? "dark" : "light"}`}>
            <Link className={`navbar__tab navbar__tab--${(isDarkTheme)? "dark" : "light"}${(location.pathname==="/calculator")? "--selected" : ""}  navbar__tab--${(isDarkTheme)? "dark" : "light"} navbar__tab__calculator`} to='/calculator'> Calculator </Link>
            <Link className={`navbar__tab navbar__tab--${(isDarkTheme)? "dark" : "light"}${(location.pathname==="/weather")? "--selected" : ""} navbar__tab--${(isDarkTheme)? "dark" : "light"} navbar__tab__weather`} to='/weather'> Weather </Link>
            <Link className={`navbar__tab navbar__tab--${(isDarkTheme)? "dark" : "light"}${(location.pathname==="/todolist")? "--selected" : ""} navbar__tab--${(isDarkTheme)? "dark" : "light"} navbar__tab__todolist`} to='/todolist'> To-do List </Link>
            <ChangeThemeButton />
        </nav>
    );
};

export default NavigationBar;