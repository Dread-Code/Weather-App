import transformForecast from '../services/transformForecast';


export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';

export const setCity = payload => ({type: SET_CITY, payload});
export const setForecastData = payload => ({type: SET_FORECAST_DATA, payload});

const api_key ="130a5de1cb581a3891833e19ed5ebbe7";
const url = "http://api.openweathermap.org/data/2.5/forecast";

export const setSelectedCity = payload => {
    return dispatch => { // el dispatch provee la posibilida de conectarse con el store
        const url_forcast = `${url}?q=${payload}&appid=${api_key}`;

        // Activar en el estado un indicador de busqueda de datos
        dispatch(setCity(payload)); // Cambia el estado de la city

        return fetch(url_forcast)
        .then((resolve)=> resolve.json())
        .then(
            weather_data =>{
                const forecastData = transformForecast(weather_data);
                console.log(forecastData);
                
                //modificar el estado por el resultado de la promise(fetch)
                dispatch(setForecastData({city: payload, forecastData})); // y pasa a la accion el objeto con la ciudad y el fetchData(forecastData)
            }
        );
    };
};