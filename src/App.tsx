import styles from "./App.module.css";
import Form from "./components/Form/Form"

function App() {
  return (
    <>
      <h1 className={styles.title}>Clima react</h1>

      <div className={styles.container}>
        <Form></Form>
        <p>2</p>
      </div>
    </>
  );
}

export default App;
