import {ChangeEvent} from "react";

export interface PropsCalculatorButton {
    value: string;
    key?: string;
    onButtonClick: (value:string)=> void;
}

export interface PropsCustomButton {
    id: string;
    onClick: ()=> void;
    size: string
    variant: string;
    text: string;
    isDisabled?: boolean;
}

export interface StylesObj{
    width: string;
    height: string;
}

export interface PropsCustomInput{
    disabled?: boolean;
    value: string;
    placeholder?: string;
    style: StylesObj;
    type?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

export interface IThemeContext{
    isDarkTheme:boolean;
}