import {createContext} from 'react';
import {IThemeContext} from "../Interfaces/Interfaces"

const ThemeContext = createContext({} as IThemeContext);

export default ThemeContext;