import React from "react";
import { Card } from "react-bootstrap";

const WeatherCard = ({ weatherData }) => {
  return (
    <>
      <Card
        style={{ width: "12rem", margin: "0.2rem" }}
      >
        <Card.Img
          variant="top"
          src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
        ></Card.Img>
        <Card.Title className="bg-info">
          {weatherData.weather[0].main}
        </Card.Title>
        <Card.Subtitle className="bg-secondary">
          {weatherData.weather[0].description}
        </Card.Subtitle>
        <Card.Body className="bg-light">
          <Card.Text>
            <strong>Temperature: </strong>
            {parseInt(weatherData.main.temp)}°
          </Card.Text>
          <Card.Text>
            <strong>Humidity: </strong>
            {weatherData.main.humidity}
            <br />
            <strong>Windspeed: </strong>
            {weatherData.wind.speed}
            <br />
            <strong>Pressure: </strong>
            {weatherData.main.pressure}
          </Card.Text>
          <Card.Text>
            <strong>Date: </strong>
            {weatherData.dt_txt.split(" ")[0]}
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default WeatherCard;
