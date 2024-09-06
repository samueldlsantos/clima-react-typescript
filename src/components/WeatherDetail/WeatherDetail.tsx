import styles from "./WeatherDetail.module.css";
import { useWeather } from "../../hooks/useWeather";

const WeatherDetail = () => {
  const { weather } = useWeather();
  return (
    weather && (
    <div className={styles.detail}>
      <div className={styles.city}>{weather.name}</div>
      <div className={styles.temp}>
        {(weather.main.temp - 273.15).toFixed(2) + "°C"}
      </div>
      <div className={styles.temps}>
        <div className={styles.mintemp}>
          {(weather.main.temp_min - 273.15).toFixed(2) + "°C"}
        </div>
        <div className={styles.maxtemp}>
          {(weather.main.temp_max - 273.15).toFixed(2) + "°C"}
        </div>
      </div>
    </div>
    )
  );
};

export default WeatherDetail;
