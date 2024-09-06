import { create } from "zustand";
import axios from "axios";
import { z } from 'zod'
import { SearchType } from "../types";

type WeatherHook = {
    apiKey: string,
    weather: {
        name: string,
        main: {
            temp: number,
            temp_max: number,
            temp_min: number
        }
    },
    fetchWeather: (search: SearchType) => Promise<void>
}


//zod para validacion de types con axios
//SCHEMA
const Weather = z.object({
    name:z.string(),
    main:z.object({
        temp: z.number(),
        temp_max: z.number(),
        temp_min: z.number(),
    })
})

type Weather = z.infer<typeof Weather>


export const useWeather = create<WeatherHook>()((set, get) => ({
    apiKey: import.meta.env.VITE_APIKEY,
    weather: {
        name: '',
        main: {
            temp: 0,
            temp_max:0,
            temp_min: 0
        }
    },
    fetchWeather: async (search) => { 
        try {
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

                const {data: dataWeather} = await axios.get(weatherUrl)
                const result = Weather.safeParse(dataWeather);

                if(result.success){
                    set((state)=> ({...state, weather: result.data  }))
                }

            }else {
                throw "No se ha encontrado la informacion solicitada"
            }
            
        } catch (error) {
            console.log(error)
        }
    },
  }))