import React,{ChangeEvent} from "react";

type ButtonSize =
    | "small"
    | "medium"
    | "large";

type ButtonVariant =
    | "primary"
    | "secondary";

export interface IPropsCalculatorButton {
    value: string;
    onButtonClick: (value:string)=> void;
}

export interface IPropsCustomButton {
    id: string;
    onClick: (e:React.MouseEvent<HTMLButtonElement>)=> void;
    size: ButtonSize;
    variant: ButtonVariant;
    text: string;
    isDisabled?: boolean;
}

export interface IStylesObj{
    width: string;
    height?: string;
    padding?: string;
    margin?: string;
}

export interface IPropsCustomInput{
    disabled?: boolean;
    value: string;
    placeholder?: string;
    style: IStylesObj;
    type?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

export interface IThemeContext{
    isDarkTheme:boolean;
}

export interface IPropsDailyWeather{
    day: string;
    weatherIcon: string;
    avgTemp: string;
    minTemp: string;
    onClick: React.MouseEventHandler<HTMLDivElement>;
}

export interface ICurrentCardDayInfo{
    maxwind_kph : number;
    avghumidity : number;
    uv : number;
    daily_chance_of_rain : number;
}

export interface IForecastDayInfo extends ICurrentCardDayInfo{
    avgtemp_c: number;
    mintemp_c: number;
    condition: {
        icon: string;
    }
}

export interface ICurrentCard {
    astro: {
        sunrise : string;
        sunset : string;
        moonrise : string;
        moonset : string;
    }
    date : string;
    date_epoch : number;
    day: ICurrentCardDayInfo;
}

export interface IForecastDay extends ICurrentCard{
    day: IForecastDayInfo;
}

export interface IResponseData{
    forecast:{
        forecastday: IForecastDay[];
    }
}

export interface IPostItem{
    title : string;
    body: string;
    id?: string;
}

export interface IPropsPostItem{
    number : number;
    id : string;
    post:IPostItem;
}

export interface IPostData{
    id: string;
    data: {
        body:string;    // empty string?
        title: string;  // ...
    }
}

export interface IPropsPostList{
    title: string;
    posts: IPostData[];
}