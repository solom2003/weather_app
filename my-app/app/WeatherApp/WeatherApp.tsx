"use client"

import React, { useState } from "react";
import style from "./Weather.module.css";

const Weather = () => {
    // =====================================================
    const [weatherData, setWeatherData] = useState<any>(null);
    const [city, setCity] = useState<any>("");

    const apiKey = "be400e3be68dbdd50af4c19c6187e2ea";

    const search = async () => {
        if (city === "") return;

        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
            const response = await fetch(url);
            const data = await response.json();
            setWeatherData(data);
        } catch (error) {
            console.error("Error fetching weather data:", error);
        }
    };
    // ======================================================
    return (
        <div className={style.weatherContainer} >
            <h2 className={style.titel}>Weather program</h2>
            <input
                type="text"
                className={style.cityInput}
                placeholder="Enter city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />
            <button className={style.searchButton} onClick={search}>Search</button>

            {weatherData && (
                <div className={style.main}>

                     <div className={style.data}>
                        <div className={style.windRate}>{weatherData.wind.speed} km/h</div>
                        <div className={style.text}>Wind Speed</div>
                    </div>

                    <div className={style.data0}>
                        <div className={style.weatherTemp}>{weatherData.main.temp} °C</div>
                        <div className={style.weatherLocation}>{weatherData.name}</div>
                    </div>
                    
                    <div className={style.data}>
                        <div className={style.humidityPercent}>{weatherData.main.humidity}%</div>
                        <div className={style.text}>Humidity</div>
                    </div>

                </div>
            )}
        </div>
    );
};

export default Weather;

