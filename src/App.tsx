import styles from "./App.module.css";
import Form from "./components/Form/Form"
import WeatherDetail from "./components/WeatherDetail/WeatherDetail";

function App() {
  return (
    <>
      <h1 className={styles.title}>Clima react</h1>

      <div className={styles.container}>
        <Form />
        <WeatherDetail />
      </div>
    </>
  );
}

export default App;
