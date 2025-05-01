import React, {useState} from 'react';
import './styles/App.css';
import {Routes, Route } from 'react-router-dom';
import NavigationBar from "./Components/NavigationBar/NavigationBar";
import { lazy,Suspense } from 'react';
import ThemeContext from "./Contexts/ThemeContext";

const WeatherWindow = lazy (() => import("./Components/Weather/WeatherWindow"));
const Calculator = lazy (() => import("./Components/Calculator/Calculator"));
const ToDoList = lazy (() => import("./Components/ToDoList/ToDoList"));

function App() {

    const [isDarkTheme, setIsDarkTheme] = useState(false);

    return (
        <ThemeContext.Provider value={{isDarkTheme, setIsDarkTheme}}>
        <div className={`${(isDarkTheme)? "dark" : "light"}Theme appWindow`}>
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

// начать изучать redux https://www.youtube.com/watch?v=C0fBnil_Im4&list=PLiZoB8JBsdznQv3kAEvTzDP2qjaUI8Vo7
// https://restful-api.dev/
// реализовать все запросы к серверу через эффектор
// по подобию createNewPostFx переделать savePost и deletePost. В эффекте только фетч, обработка превент дефолта
// в отдельную ф-ию, в ней же вызов эффекта. Все операции после фетча обработать в .on Fx.doneData
// postIDs, post переделать на стор
// переделать семпл для postIDsUpdate, убрать клок, в качестве сорса => стор postIDs