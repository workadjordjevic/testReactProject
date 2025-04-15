import React, {useState,createContext} from 'react';
import { Link,useLocation} from 'react-router-dom'
import './NavigationBar.scss';
import ChangeThemeButton from "../ChangeThemeButton/ChangeThemeButton";


const NavigationBar = () => {
    const location = useLocation();
    return (
        <nav className="navbar">
            <Link className={`${(location.pathname==="/calculator")? "navbar__tab--selected" : ""}  navbar__tab navbar__tab__calculator`} to='/calculator'> Calculator </Link>
            <Link className={`${(location.pathname==="/weather")? "navbar__tab--selected" : ""} navbar__tab navbar__tab__weather`} to='/weather'> Weather </Link>
            <Link className={`${(location.pathname==="/todolist")? "navbar__tab--selected" : ""} navbar__tab navbar__tab__todolist`} to='/todolist'> To-do List </Link>
            <ChangeThemeButton />
        </nav>
    );
};

export default NavigationBar;