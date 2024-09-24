import styles from "./App.module.css";
import Form from "./components/Form/Form"
import Loading from "./components/Loading/Loading";
import WeatherDetail from "./components/WeatherDetail/WeatherDetail";
import { useWeather } from "./hooks/useWeather";

function App() {
  const {loading} = useWeather();
  return (
    <>
      <h1 className={styles.title}>Clima react</h1>

      <div className={styles.container}>
        <Form />
        {loading ? 
        <Loading /> :
        <WeatherDetail />
        }
      </div>
    </>
  );
}

export default App;
