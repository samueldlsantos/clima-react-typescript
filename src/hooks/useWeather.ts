import { create } from "zustand";
import axios from "axios";
import { SearchType } from "../types";

type Weather = {
    apiKey: string,
    fetchWeather: (search: SearchType) => Promise<void>
}


export const useWeather = create<Weather>()((set, get) => ({
    apiKey: import.meta.env.VITE_APIKEY,
    fetchWeather: async (search) => { 
        try {
            console.log(get().apiKey)
            const geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${search.city},${search.country}&appid=${get().apiKey}`

            // await axios({
            //     method: 'get',
            //     url: geoUrl,
            //   })
            //     .then(async function (response) {
            //         if(response.data.length > 0){
            //             const lat = response.data[0].lat;
            //             const lon = response.data[0].lon;
            //             const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${get().apiKey}`
            //             const {data} = await axios(weatherUrl) 
            //             console.log(data);
            //         }else {
            //             
            //         }
            //     }).catch(function (error) {
            //         // manejar error
            //         console.log(error);
            //       })

            const dataGeo = await axios.get(geoUrl);

            if(dataGeo.data.length > 0){
                const lat = dataGeo.data[0].lat;
                const lon = dataGeo.data[0].lon;
                const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${get().apiKey}`

                const dataWeather = await axios.get(weatherUrl)

            }else {
                throw "No se ha encontrado la informacion solicitada"
            }
            
        } catch (error) {
            console.log(error)
        }
    },
  }))