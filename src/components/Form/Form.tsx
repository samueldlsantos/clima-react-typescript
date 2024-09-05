import { countries } from "../../data/countries";
import styles from './Form.module.css'

const Form = () => {
  return (
    <form className={styles.form}>

      <div className={ styles.field }>
        <label htmlFor="city">Ciudad: </label>
        <input className={styles.input} type="text" id="city" name="city" placeholder="Ciudad" />
      </div>

      <div className={styles.field}>
        <label htmlFor="country">País: </label>
        <select className={styles.input} id="country">
          <option value="">-- Seleccione un país --</option>
          {countries.length > 0 &&
            countries.map((country) => (
              <option key={country.code} value={country.code}>
                {country.name}
              </option>
            ))}
        </select>
      </div>

      <input type="submit"  value="Buscar"/>
      
    </form>
  );
};

export default Form;
