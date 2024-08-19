// components/WeatherWidget.js
import { useState, useEffect } from 'react';
import styles from '../styles/WeatherWidget.module.css';

export default function WeatherWidget() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const API_KEY = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;
      const CITY = 'Kerugoya'; // Replace with your preferred location
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`;

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setWeatherData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching weather data:', error);
        setError('Failed to fetch weather data');
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  if (loading) return <div className={styles.weatherWidget}>Loading weather...</div>;
  if (error) return <div className={styles.weatherWidget}>{error}</div>;
  if (!weatherData || !weatherData.weather || weatherData.weather.length === 0) {
    return <div className={styles.weatherWidget}>Weather data unavailable</div>;
  }

  const { name, main, weather } = weatherData;
  const iconUrl = `http://openweathermap.org/img/wn/${weather[0].icon}.png`;

  return (
    <div className={styles.weatherWidget}>
      <div className={styles.location}>{name}</div>
      <div className={styles.temperature}>{Math.round(main.temp)}°C</div>
      <div className={styles.condition}>
        <img src={iconUrl} alt={weather[0].description} />
        <span>{weather[0].main}</span>
      </div>
    </div>
  );
}