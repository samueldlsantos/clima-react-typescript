import { countries } from "../../data/countries";
import styles from './Form.module.css'
import { SearchType } from "../../types";
import { useForm } from "react-hook-form";
import Error from "../Error/Error";
import { useWeather } from "../../hooks/useWeather";

const Form = () => {

  const {register, handleSubmit, reset, formState:{errors}} = useForm<SearchType>()

  const {fetchWeather } = useWeather();

  const handleSubmitForm = (data: SearchType) => {
        // reset()
        fetchWeather(data)
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit(handleSubmitForm)}>

      <div className={styles.field}>
        <label htmlFor="city">Ciudad: </label>
        <input 
          className={styles.input} 
          type="text" 
          id="city" 
          placeholder="Ciudad" 
          {
            ...register('city', {
            required: 'Escribe una ciudad para continuar'
            })
          }
        />
        {errors.city && (
          <Error>{errors.city.message}</Error>
        )}
      </div>

      <div className={styles.field}>
        <label htmlFor="country">País: </label>
        <select 
          className={styles.input} 
          id="country" 
          {
            ...register('country', {
            required: 'Selecciona un pais para continuar'
            })
          }
        >
          <option value="">-- Seleccione un país --</option>
          {countries.length > 0 &&
            countries.map((country) => (
              <option key={country.code} value={country.code}>
                {country.name}
              </option>
            ))}
        </select>
        {errors.country && (
          <Error>{errors.country.message}</Error>
        )}
      </div>

      <input className={styles.submit} type="submit" value="Buscar" />

    </form>
  );
};

export default Form;
