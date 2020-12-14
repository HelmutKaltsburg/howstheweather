import React, { useState } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";
import API from "../ApiKey";
import WeatherCard from "./WeatherCard";
import Header from "./Layout/Header";
import WeatherSearch from "./Layout/WeatherSearch";
import Error from "./Error";
import Context from "../Context";
import "../App.css";

const MainContainer = () => {
  // State variables
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const weatherApiCall = async (event) => {
    event.preventDefault();

    // Initializes a location variable based on the value in the searchbox
    // Applies .trim() to remove whitespaces
    const searchLocation = event.target.elements.city.value.trim();

    // Returns an error if the search value is empty
    if (!searchLocation) {
      return (
        setError("Please enter the name of the city"), setWeatherData(null)
      );
    }

    // URL for the Open Weather Map 5-day forecast API, based on the search location and personal API Key
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${searchLocation}&appid=${API.API_KEY}&units=metric`;

    // API axios get() request
    try {
      const request = axios.get(url);
      const response = await request;
      setError(null);
      setWeatherData(response.data);
    } catch (error) {
      setError("Please enter the city/country name correctly");
      setWeatherData(null);
    }
  };

  // Accepts API response as an argument, maps through the JSON data
  // Returns only daily data, no 3-hourly data
  // Renders WeatherCard components from an object
  const loadWeatherCards = (weatherData) => {
    const weatherCards = weatherData.list.map((listItem, listItemIndex) => {
      if (listItemIndex % 8 === 0) {
        return (
          <WeatherCard
            className="weather-card"
            style={{ display: "inline-flex", flexDirection: "row" }}
            weatherData={listItem}
            cityName={weatherData.city.name}
            key={listItemIndex}
          />
        );
      }
    });
    return weatherCards;
  };

  return (
    <div
      className="bg-light"
      style={{ height: "100vh", width: "100vw", overflow: "auto" }}
    >
      <Header />
      <Context.Provider value={{ weatherApiCall }}>
        <Card
          className="bg-primary"
          style={{
            width: "80vw",
            marginLeft: "10vw",
            marginTop: "5vh",
          }}
        >
          <Card.Header className="bg-secondary">
            Search for a city/country
          </Card.Header>
          <WeatherSearch />
          <Card.Body style={{ display: "flex", flexDirection: "row" }}>
            {error !== null && <Error error={error} />}
            {weatherData ? loadWeatherCards(weatherData) : <></>}
          </Card.Body>
        </Card>
      </Context.Provider>
    </div>
  );
};

export default MainContainer;
