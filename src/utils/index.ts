export const formatWeather = (temperature : number) : string => {

    const kelvin = 273.15;

    return `${parseInt((temperature - kelvin).toString())} ˚C`;
}