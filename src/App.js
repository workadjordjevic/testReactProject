import React, {useContext, useState} from 'react';
import './styles/App.css';
import {Routes, Route} from 'react-router-dom';
import NavigationBar from "./Components/NavigationBar/NavigationBar";
import { lazy,Suspense } from 'react';
import ThemeContext from "./Contexts/ThemeContext";
import {returnThemeString} from "./utils/returnThemeString";

const WeatherWindow = lazy (() => import("./Components/Weather/WeatherWindow"));
const Calculator = lazy (() => import("./Components/Calculator/Calculator"));
const ToDoList = lazy (() => import("./Components/ToDoList/ToDoList"));

function App() {

    const [isDarkTheme, setIsDarkTheme] = useState(false);

    return (
        <ThemeContext.Provider value={{isDarkTheme, setIsDarkTheme}}>
        <div className={`${returnThemeString(isDarkTheme)}Theme appWindow`}>
            <div className="appWindowLinks"><NavigationBar /></div>
            <div className="appWindowContent">
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path='weather' element={<WeatherWindow />} > </Route>
                        <Route path='calculator' element={<Calculator />}> </Route>
                        <Route path='todolist' element={<ToDoList />}> </Route>
                    </Routes>
                </Suspense>
            </div>
        </div>
        </ThemeContext.Provider>
    );
}

export default App;

// git repository , закомититься, изменения запушить
// на гитхабе. pull request
// тема для todolist, замена кнопки и инпута
// переделать задавание названия классов темы
// отрефакторить css
// начать изучать redux https://www.youtube.com/watch?v=C0fBnil_Im4&list=PLiZoB8JBsdznQv3kAEvTzDP2qjaUI8Vo7