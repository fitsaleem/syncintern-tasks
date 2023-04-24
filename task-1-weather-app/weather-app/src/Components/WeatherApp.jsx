import styles from "./WeatherApp.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStreetView} from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from "react";
import { Form, Button, Card, Spinner, Alert } from "react-bootstrap";


const API_KEY = "1be98b1227ef6beaa1048d6245ca0842";
const BASE_URL = "https://api.openweathermap.org/data/2.5/";

export default function WeatherApp() {
  const [location, setLocation] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleLocationSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setWeatherData(null);
  };

  useEffect(() => {
    if (!location || !isLoading) {
      return;
    }

    const fetchData = async () => {
      try {
        const response = await fetch(
          `${BASE_URL}weather?q=${location}&appid=${API_KEY}&units=metric`
        );
        const data = await response.json();
        if (data.cod === "404") {
          setErrorMessage(data.message);
        } else {
          setWeatherData(data);
          setErrorMessage(null);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [location, isLoading]);

  return (
    <>
      <div className={`${styles.card} weather-app`}>
        <h1>Weather App</h1>
        <Form onSubmit={handleLocationSubmit}>
          <Form.Group>
            <Form.Label>Enter city, country</Form.Label>
            <Form.Control
              type="text"
              placeholder="e.g. London, UK"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </Form.Group>
          <div className={styles.button}>
          <Button variant="primary" type="submit">
            Search
          </Button>

          </div>
        </Form>
        {isLoading && (
  <div className={styles["spinner-container"]}>
    <Spinner animation="border" variant="success" />
  </div>
)}
        {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
        {weatherData && (
            <Card className=" text-black">
            <Card.Body>
              <Card.Title>
                <h2>
                  <FontAwesomeIcon
                    icon={faStreetView}
                    className={`${styles.icon} fa-3x fa-flip`}
                    style={{ color: "#1f5120" }}
                  />
                  {weatherData.name}, {weatherData.sys.country}
                </h2>
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {weatherData.weather[0].description}
              </Card.Subtitle>
              <Card.Text>
                Temperature: {weatherData.main.temp} °C
                <br />
                Feels like: {weatherData.main.feels_like} °C
                <br />
                Humidity: {weatherData.main.humidity}%
                <br />
                Pressure: {weatherData.main.pressure} hPa
                <br />
                Wind speed: {weatherData.wind.speed} m/s
                <br />
              </Card.Text>
            </Card.Body>
          </Card>
          
        )}
      </div>
    </>
  );
}
