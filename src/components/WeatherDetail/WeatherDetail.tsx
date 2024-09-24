import styles from "./WeatherDetail.module.css";
import { useWeather } from "../../hooks/useWeather";
import Error from "../Error/Error";
import { formatWeather } from "../../utils";

const WeatherDetail = () => {
  const { weather, errorMessage } = useWeather();
  return (
    weather.name && errorMessage == '' ? (
    <div className={styles.detail}>
      <div className={styles.city}>{weather.name}</div>
      <div className={styles.temp}>
        {formatWeather(weather.main.temp)}
      </div>
      <div className={styles.temps}>
        <div className={styles.mintemp}>
          <p>Min: <span>{formatWeather(weather.main.temp_min)}</span></p>
        </div>
        <div className={styles.maxtemp}>
          <p>Max: <span>{formatWeather(weather.main.temp_max)}</span></p>
        </div>
      </div>
    </div>
    ) :

    errorMessage && (<div className={styles.detail}>
      <Error>{errorMessage}</Error>
    </div>)
  );
};

export default WeatherDetail;
